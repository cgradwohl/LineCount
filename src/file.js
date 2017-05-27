const init = function(name) {
    this.name = name;
    this.size = 0;
    this.hidden = false;
    if (name.substr(0, 1) === '.') this.hidden = true;


    return this;
}
module.exports = init;
