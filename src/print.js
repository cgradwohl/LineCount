/**
* prints the directory hierarchy as a tree-like structure
*
*
* @param {String} name - description
*/

const count = require('./count');

module.exports = {

  root: (directory) => {
    let dirCount  = 0;
    let fileCount = 0;

    directory.files.forEach((file) => {
      if (file.type === 'File') fileCount += 1;
      if (file.type === 'Directory') dirCount += file.contents;
    });
    console.log(directory.name + '/ = ' + (fileCount + dirCount) + ' files\n');
  },

  files: (directory) => {
    let files = directory.files;

    files.forEach((file) => {
      if (file.type === 'Directory') {
        let slashCount = file.path.split('/').length - 2;
        let whiteSpace = '  '.repeat(slashCount);
        console.log(whiteSpace + file.name + '/ = ' + file.contents + ' files\n');
        module.exports.files(file);
      }
    });
  },

};
