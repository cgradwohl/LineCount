const fs = require('fs');
const path = require('path');

module.exports = {

  /**
  * Counts the sub_directories of a root directory
  *
  * @param {String} root - path to the root directory
  */
  sub_directories: (dir) => {
    return new Promise( (resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        if(files) resolve(files);
        else reject(Error('sub_directories Broke!'));
      });
    })

    // return sub_directories;
  },

  /**
  * counts the files in a directory
  * returns an object with directory paths as keys, array of files as values.
  *
  * @param {Array} directories - an array of directories
  */
  files: (directories) => {
    return new Promise( (resolve, reject) => {
      if (directories) resolve(directories);
      else reject(Error('file Broke!'))
    });

  },

  /**
  * counts the lines in a file
  *
  * @param {Map} map - map object with directory paths as keys, array of files as values.
  */
  lines: (map) => {





    return print_obj;
  }

};
