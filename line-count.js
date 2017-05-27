const root    = process.argv.slice(2)[0];
const read = require('./src/read');


read.dir(root).then( (res) => {
    console.log(res);
});
