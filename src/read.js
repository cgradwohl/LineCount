const Promise   = require('bluebird');
const fs        = Promise.promisifyAll(require('fs'));
const Directory = require('./directory');
const File = require('./file');

const readDir = (inputDir) => {
  let directory = new Directory(inputDir),
      file;

  return fs.readdirAsync(inputDir)
    .map( (fileName) => {

      return fs.statAsync(inputDir + '/' + fileName)
      .then( (stat) => {

        if (stat.isFile()) {
          file = new File(fileName);
          file.size = stat.size;
          return file;
        }

        if (stat.isDirectory()) {
          return readDir(inputDir + '/' + fileName).then( (directory) => directory);
        }
      });

    })
    .map( (files) => {
      directory.length += 1;
      directory.files.push(files);
    }).then(() => directory);
}

module.exports.dir = readDir;
