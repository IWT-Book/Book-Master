var fs = require('fs');
var path = require('path');

var walk = function(dir, done) {
  var results = [];

  fs.readdir(dir, function(err, list) {
    if (err) {
      return done(err);
    }

    var pending = list.length;
    if (!pending) {
      return done(null, results);
    }

    list.forEach(function(file) {
      var fullname = path.resolve(dir, file);
      fs.stat(fullname, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(fullname, function(err, res) {
            results[file] = res;
            if (!--pending) {
              done(null, results);
            }
          });
        } else {
          results.push(file);
          if (!--pending) {
            done(null, results);
          }
        }
      });
    });
  });
};

function output(err, results) {
  if (err) {
    console.log(err);
  }

  var str = walkTree(results, 1, str);
  fs.writeFile('./results.txt', str);
  console.log(str);
}

function walkTree(obj, level) {
  var str = '';
  var nextLevel = level + 1;

  var keys = Object.keys(obj).sort();

  for (var i = 0; i<keys.length;i++) {
    var newObj = obj[keys[i]];
    if (typeof (newObj) === 'object') {
      str += Array(level).join('\t') + keys[i] + '\n';
      str += walkTree(newObj, nextLevel);
    }
  }

  for (var i = 0; i < obj.length; i++) {
    str += Array(level).join('\t') + obj[i] + '\n';
  }

  return str;

}

walk('.', output);

