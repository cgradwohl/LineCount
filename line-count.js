const count = require('./src/count');
const print = require('./src/print');

(function() {

  const root = process.argv.slice(2)[0];

  count.directories(root)
    .then( (sub_dirs) => count.files(sub_dirs) );
    /*.then( (files) => count.lines(files) )
    .then( (obj) => print.rootDir(obj) );*/
})();
