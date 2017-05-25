const fs = require('fs');

module.exports = {

  /**
  * count.directories()
  * counts the sub_directories of a root directory
  * returns an array of sub_directories
  *
  * @param {String} root - path to the root directory
  */
  directories: (root) => {

    return new Promise( (resolve, reject) => {
      fs.readdir(root, (err, files) => {
        if(files) resolve(files);

        else reject();
      });
    });





    // return sub_directories;
    // return sub_directories;
  },




















  /**
  * count.files()
  * counts the files in a directory
  * returns an object with directory paths as keys, array of files as values.
  *
  * @param {Array} directories - an array of directories
  */
  files: (directories) => {
    console.log(directories);
    
    // return path_obj;
  },

  /**
  * count.lines()
  * counts the lines in a file
  * returns an object
  *
  * @param {Map} map - map object with directory paths as keys, array of files as values.
  */
  lines: (map) => {





    return print_obj;
  }

};
