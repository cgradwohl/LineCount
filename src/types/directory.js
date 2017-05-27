/**
* Directory object
*
* @param {String} path
* @return {Object}
*/


const Directory = function(path) {

  let dirArray = path.split('/');
  let name     = dirArray[dirArray.length - 1];

  this.name   = name;
  this.path   = path;
  this.files  = [];
  this.length = 0;
  this.hidden = false;
  this.type   = 'Directory';
  if (this.name.substr(0, 1) === '.') this.hidden = true;


  return this;
}

module.exports = Directory;
