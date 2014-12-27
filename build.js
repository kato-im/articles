var jade = require('jade');
var template = jade.compileFile('template.jade');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var ncp = require('ncp');
var Immutable = require('immutable');
fs = require('fs')
fs.readFile('manifest.json', 'utf8', function (err, data) {
    if (err) { return console.log(err); }
    var manifest = JSON.parse(data);

    rimraf.sync('./build', function (err) { });
    mkdirp('./build', function (err) {});
    ncp('./wp/wp-content', './build/wp-content', function (err) {})
    ncp('./wp/wp-includes', './build/wp-includes', function (err) {})
    traverseManifest(manifest, Immutable.List.of('.'));

});

var traverseManifest = function (entity, dirpath) {
    if (entity.type === 'page') {
        fs.readFile(dirpath.slice(0, -1).push(entity.src + '.md').join('/'), function (err, data) {
            if (err) {
                console.log(err);
            } else {
                entity.text = data;
                var html = template(entity);
            }
        });
    }
    else if (entity.type === 'category')
    {
        mkdirp('./build/' + dirpath.join('/'), function (err) {});
    }

    for (entry in entity.entries) {
        dirpath.push(entry);
        var dirpath0 = dirpath.push(entry);
        traverseManifest(entity.entries[entry], dirpath0);
    }
};
