/**
* shows line count of source files of a root directory
*
* @param {String} root - directory to be explored
* @return {Directory}
*/

const root  = process.argv.slice(2)[0];
const read  = require('./src/read');
const count = require('./src/count');

read.dir(root).then((directory) => {

  console.log(directory.name + '/', '=', directory.length, 'files');

  let files = directory.files;

  files.forEach((file) => {
    if (file.type === 'Directory') {// --src/ = 50 files, 5000 lines
      console.log(file.name + '/', '=', file.length, 'files');

      // console.log(file.path);
    }

    // if (file.type === 'File') {}

  });

  // console.log(files);
});

/*count.lines('./src/file.js')
.then( (value) => {
  console.log(value);
})*/
