var jade = require('jade');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var Immutable = require('immutable');
var fs = require('fs');
var template = null;

fs.readFile('manifest.json', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    var manifest = JSON.parse(data);
    rimraf.sync('./build', function (err) { });
    rimraf.sync('./build-tmp', function (err) { });
    mkdirp.sync('./build', function (err) {});
    mkdirp.sync('./build-tmp', function (err) {});
    fs.readFile('template.jade', 'utf8', function (err, data) {
        template = data;
        traverseManifest(manifest, Immutable.List.of('..'));
    });
});

var traverseManifest = function (entity, dirpath, home, language, category) {
    if (entity.type === 'page') {
        renderPage(dirpath, entity.src, entity, category, language);
    }
    else if (entity.type === 'category' || entity.type === 'language' || entity.type === 'home')
    {
        var prevNext = {"prev": undefined, "next": undefined};
        if (entity.type === 'language') {
            language = entity;
            prevNext = { "prev": undefined, "next": entity.entities[0] };
        } else if (entity.type === 'category') {
            category = entity;
            prevNext = getPrevNext(language.entities, entity);
        } else if (entity.type === 'home') {
            home = entity;
            prevNext = getPrevNext(entity.entities);
        }

        linkWp(dirpath);

        var filePath = dirpath.push('README.md').join('/');
        var template1 = template.replace('$$FILE_NAME$$', '../' + filePath);
        var template0 = template1.replace('$$ROSTER_NAME$$', '../' + 'roster.jade');
        fs.writeFileSync('./build-tmp/index.tmp.jade', template0);
        var fn = jade.compileFile('./build-tmp/index.tmp.jade', { "pretty": true });
        var path;
        if (entity.type === 'language') {
            path = dirpath.slice(1).join('/');
        } else {
            path = dirpath.slice(1).join('/');
        }
        if (path) {
            path += '/';
        }
        var html = fn({
            "language": language ? language : entity,
            "current": entity,
            "prev": prevNext.prev,
            "next": prevNext.next,
            "path": '/articles/' + path
        });
        rimraf.sync('./build-tmp/index.tmp.jade', function (err) { });
        fs.writeFileSync('./build/' + dirpath.slice(1).push('index.html').join('/'), html);
    }

    for (k in entity.entities) {
        var e = entity.entities[k];
        var dirpath0 = dirpath.push(e.src);
        traverseManifest(e, dirpath0, home, language, category);
    }
};

var getPrevNext = function (entities, entity) {
    var prev, next;
    for (k in entities) {
        if (!entity || next === true) {
            next = entities[k];
            break;
        } else if (entities[k].src === entity.src) {
            next = true;
        } else {
            prev = entities[k];
        }
    }

    if (next === true) {
        next = undefined;
    }

    return { "prev": prev, "next": next };
};

var linkWp = function (dirpath) {
    var dir = './build/' + dirpath.slice(1).join('/');
    var r = mkdirp.sync(dir);
    var rp = fs.realpathSync('./wp');
    fs.symlinkSync(rp + '/wp-content', dir + '/wp-content');
    fs.symlinkSync(rp + '/wp-includes', dir + '/wp-includes');
    fs.symlinkSync(rp + '/sspro-2.010r', dir + '/sspro-2.010r');
};

var renderPage = function (dirpath, fileName, entity, category, padre) {
    var filePath = dirpath.slice(1).join('/');
    var template1 = template.replace('$$FILE_NAME$$', '../../' + filePath + '.md');
    var template0 = template1.replace('$$ROSTER_NAME$$', '../' + 'roster.jade');
    fs.writeFileSync('./build-tmp/' + fileName + '.tmp.jade', template0);
    var fn = jade.compileFile('./build-tmp/' + fileName + '.tmp.jade', { "pretty": true });
    var prevNext = getPrevNext(category.entities, entity);
    var html = fn({
        "language": padre,
        "category": category,
        "current": entity,
        "prev": prevNext.prev,
        "next": prevNext.next,
        "path": '/articles/' + dirpath.slice(1, -1).join('/') + '/'
    });
    fs.writeFileSync('./build/' + filePath + '.html', html);
};
