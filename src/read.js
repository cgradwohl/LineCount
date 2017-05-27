const Promise   = require('bluebird');
const fs        = Promise.promisifyAll(require('fs'));
const Directory = require('./directory');
const File      = require('./file');


/**
* @param {String} root - directory to be explored
*/
const read = (root) => {
  let directory = new Directory(root),
      file;

  return fs.readdirAsync(root)
    .map( (fileName) => {
      return fs.statAsync(root + '/' + fileName)
      .then( (stat) => {

        if (stat.isFile()) {
          file = new File(fileName);
          file.size = stat.size;
          return file;
        }

        if (stat.isDirectory()) {
          return read(root + '/' + fileName).then( (directory) => directory);
        }
      });

    })
    .map( (files) => {
      directory.length += 1;
      directory.files.push(files);
    }).then(() => directory);
}

module.exports.dir = read;
