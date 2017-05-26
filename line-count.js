const count = require('./src/count');
const print = require('./src/print');



const fs = require('fs');
(function() {

  const root = process.argv.slice(2)[0];
  //@TODO user input validation

  count.sub_directories(root).then( (value) => {
    console.log('from async readdir', value);
  }, (err) => {
    throw err;
  });


    /*.then( (sub_dirs) => { count.files(sub_dirs);
    .then( (files) => count.lines(files) )
    .then( (obj) => print.rootDir(obj) );*/





})();
