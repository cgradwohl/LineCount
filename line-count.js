/**
* shows line count of source files of a root directory
*
* @param {String} root - directory to be explored
* @return {Directory}
*/


const root = process.argv.slice(2)[0];
const read = require('./src/read');


read.dir(root).then( (directory) => {
  let files = directory.files;
  console.log(files);
});
