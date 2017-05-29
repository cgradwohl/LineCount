/**
* counts lines of source files
*
* @param {String} filename
* @return {Promise}
*/

const fs    = require('fs');

/*module.exports = {
  lines: (directory) => {
    let files = directory.files;

    files.forEach((file) => {
      if (file.type === 'Directory') {
        module.exports.lines(file);
      }

      if (file.type === 'File') {
        fs.readFile(file.path, (err, data) => {

          if (err) reject(Error(err));

          if (process.platform === 'win32') {
            let winLen = data.toString().split('\r\n').length;
            file.lines = (winLen - 1);
          } else {
            let nixLen = data.toString().split('\n').length;
            file.lines = (nixLen - 1);

            // console.log(file.name, 'has', file.lines);
          }
        });
      }

    });
  },
};*/

/*let files = directory.files;

files.forEach((file) => {
  // console.log(file);

  if (file.type === 'Directory') {
    let slashCount = file.path.split('/').length - 2;
    let whiteSpace = '  '.repeat(slashCount);
    console.log(whiteSpace + file.name + '/ = ' + file.contents + ' files\n');
    module.exports.files(file);
  }
});*/

const lines = (file) => {

  return new Promise((resolve, reject) => {

    fs.readFile(file.path, (err, data) => {

      if (err) reject(Error(err));

      if (process.platform === 'win32') {
        let winLen = data.toString().split('\r\n').length;
        file.lines = (winLen - 1);
        resolve(file);
      } else {
        let nixLen = data.toString().split('\n').length;
        file.lines = (nixLen - 1);
        resolve(file);
      }
    });
  });
};

/*const lines = (file) => {

  fs.readFile(file.path, (err, data) => {

    if (err) reject(Error(err));

    if (process.platform === 'win32') {
      let winLen = data.toString().split('\r\n').length;
      file.lines = (winLen - 1);
      return file;
    } else {
      let nixLen = data.toString().split('\n').length;
      file.lines = (nixLen - 1);
      return file;
    }
  });
};*/

module.exports.lines = lines;
