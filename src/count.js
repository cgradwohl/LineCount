/**
* counts lines of source files
*
* @param {String} filename
* @return {Promise}
*/

const fs    = require('fs');

const count = (filename) => {

  new Promise((resolve, reject) => {

    fs.readFile(filename, (err, data) => {

      if (err) reject(Error(err));

      if (process.platform === 'win32') {
        let winLen = data.toString().split('\r\n').length;
        resolve(winLen - 1);
      } else {
        let nixLen = data.toString().split('\n').length;
        resolve(nixLen - 1);
      }
    });
  });
};

module.exports.lines = count;

/*count.then((val) => {
  console.log(val);
});*/
