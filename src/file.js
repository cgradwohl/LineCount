/**
* File object
* @param {String} name
*/
const File = function(name) {
  this.name = name;
  this.size = 0;
  this.hidden = false;
  if (name.substr(0, 1) === '.'){
    // this.hidden = true;
    return 0;
  }



  return this;
}

module.exports = File;
