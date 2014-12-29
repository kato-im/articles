var jade = require('jade');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var ncp = require('ncp');
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
        traverseManifest(manifest, Immutable.List.of('.'));
    });
});

var traverseManifest = function (entity, dirpath, home, language, category) {
    if (entity.type === 'home') {
        home = entity;

        var dir = './build/' + dirpath.slice(1).join('/');
        var r = mkdirp.sync(dir);
        var rp = fs.realpathSync('./wp');
        fs.symlinkSync(rp + '/wp-content', dir + '/wp-content');
        fs.symlinkSync(rp + '/wp-includes', dir + '/wp-includes');
        fs.symlinkSync(rp + '/sspro-2.010r', dir + '/sspro-2.010r');

        var filePath = dirpath.push('README.md').join('/');
        var template1 = template.replace('$$FILE_NAME$$', '../' + filePath);
        var template0 = template1.replace('$$ROSTER_NAME$$', '../' + 'roster.jade');
        fs.writeFileSync('./build-tmp/index.tmp.jade', template0);
        var fn = jade.compileFile('./build-tmp/index.tmp.jade', { "pretty": true });
        var prevNext = getPrevNext(entity.entities, entity.entities[0]);
        var html = fn({"language": entity, "entity": entity, "prev": prevNext.prev, "next": prevNext.next});
        rimraf.sync('./build-tmp/index.tmp.jade', function (err) { });
        fs.writeFileSync('./build/' + dirpath.push('index.html').join('/'), html);
    }
    else if (entity.type === 'page') {
        var filePath = dirpath.slice(0, -1).push(entity.src + '.md').join('/');
        var template1 = template.replace('$$FILE_NAME$$', '../' + filePath);
        var template0 = template1.replace('$$ROSTER_NAME$$', '../' + 'roster.jade');
        fs.writeFileSync('./build-tmp/' + entity.src + '.tmp.jade', template0);
        var fn = jade.compileFile('./build-tmp/' + entity.src + '.tmp.jade', { "pretty": true });
        var prevNext = getPrevNext(category.entities, entity);
        var html = fn({"language": language, "entity": entity, "prev": prevNext.prev, "next": prevNext.next});
        fs.writeFileSync('./build/' + dirpath.slice(0, -1).push(entity.src + '.html').join('/'), html);
    }
    else if (entity.type === 'category' || entity.type === 'language')
    {
        if (entity.type === 'language') {
            language = entity;
        } else if (entity.type === 'category') {
            category = entity;
        }

        var dir = './build/' + dirpath.slice(1).join('/');
        var r = mkdirp.sync(dir);
        var rp = fs.realpathSync('./wp');
        fs.symlinkSync(rp + '/wp-content', dir + '/wp-content');
        fs.symlinkSync(rp + '/wp-includes', dir + '/wp-includes');
        fs.symlinkSync(rp + '/sspro-2.010r', dir + '/sspro-2.010r');

        var filePath = dirpath.push('README.md').join('/');
        var template1 = template.replace('$$FILE_NAME$$', '../' + filePath);
        var template0 = template1.replace('$$ROSTER_NAME$$', '../' + 'roster.jade');
        fs.writeFileSync('./build-tmp/index.tmp.jade', template0);
        var fn = jade.compileFile('./build-tmp/index.tmp.jade', { "pretty": true });
        var prevNext = {"prev": undefined, "next": undefined};
        if (entity.type === 'category') {
            prevNext = getPrevNext(language.entities, entity);
        } else if (entity.type === 'language') {
            prevNext = getPrevNext(home.entities, entity);
        }
        var html = fn({"language": language, "entity": entity, "prev": prevNext.prev, "next": prevNext.next});
        rimraf.sync('./build-tmp/index.tmp.jade', function (err) { });
        fs.writeFileSync('./build/' + dirpath.push('index.html').join('/'), html);
    }

    for (k in entity.entities) {
        var e = entity.entities[k];
        var dirpath0 = dirpath.push(e.src);
        traverseManifest(e, dirpath0, home, language, category);
    }
};

var getPrevNext = function(entities, entity) {
    var prev;
    var next;
    for (k in entities) {
        if (entities[k].src === entity.src) {
            next = true;
        } else if (next === true) {
            next = entities[k];
            break;
        } else {
            prev = entities[k];
        }
    }

    if (next === true) {
        next = undefined;
    }

    return { "prev": prev, "next": next };
};
