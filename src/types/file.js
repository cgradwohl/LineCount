/**
* File object
*
* @param {String} name
* @return {Object}
*/

const File = function (name) {

  this.name   = name;
  this.size   = 0;
  this.hidden = false;
  this.type = 'File';
  if (name.substr(0, 1) === '.') this.hidden = true;

  return this;
};

module.exports = File;
