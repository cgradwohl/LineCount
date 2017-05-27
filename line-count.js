const root    = process.argv.slice(2)[0];
const read = require('./src/read');


read.dir(root).then( (dirs) => {
  let sub_directories = dirs.files;
  console.log(sub_directories);
});
