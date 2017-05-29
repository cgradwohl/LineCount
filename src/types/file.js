/**
* File object
*
* @param {String} name
* @return {Object}
*/
const count = require('../count');

const File = function (path) {

  const pathArray = path.split('/');
  const name      = pathArray[pathArray.length - 1];

  this.name   = name;
  this.path   = path;
  this.size   = 0;
  this.lines  = 0;
  this.hidden = false;
  this.type   = 'File';
  if (name.substr(0, 1) === '.') this.hidden = true;

  return this;
};

module.exports = File;
