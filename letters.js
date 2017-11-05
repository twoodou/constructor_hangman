var Letter = function(letter) {
  this.letter = letter;
  this.visible = false;
  this.showLetter = function() {
    if (this.visible === false) {
      return "_";
    } else {
      return this.letter;
    }
  };
};

module.exports = Letter;
