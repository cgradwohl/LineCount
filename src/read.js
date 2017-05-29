/**
* recursively visits the sub-directories of a root directory
*
* @param {String} root - directory to be explored
* @return {Promise}
*/

const count     = require('./count');
const Directory = require('./types/directory');
const File      = require('./types/file');
const Promise   = require('bluebird');
const fs        = Promise.promisifyAll(require('fs'));

const read = (root) => {

  let directory = new Directory(root);
  let file;

  return fs.readdirAsync(root)
    .map((fileName) => {
      return fs.statAsync(root + '/' + fileName)
      .then((stat) => {

        if (stat.isFile()) {
          file = new File(root + '/' + fileName);
          file.size = stat.size;

          // @TODO count lines

          return file;
        }

        if (stat.isDirectory()) {
          return read(root + '/' + fileName)
          .then((directory) => {
            directory.files.forEach((file) => {
              if (file.type === 'File') directory.contents += 1;

              if (file.type === 'Directory') directory.contents += 1 + file.length;
            });
            return directory;
          });
        }
      });
    })
    .map((files) => {
      directory.length += 1;
      directory.files.push(files);
    })
    .then(() => directory);

};

module.exports.dir = read;
