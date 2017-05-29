/**
* shows line count of source files of a root directory
*
* @param {String} root - directory to be explored
* @return {Directory}
*/

const root  = process.argv.slice(2)[0];
const read  = require('./src/read');
const print = require('./src/print');

read.dir(root).then((directory) => {

  print.root(directory);

  print.files(directory);

});
