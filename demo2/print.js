'use strict';

module.exports = function Print() {
  if(this){
    console.log('\n\nTitle: ' + this.text);
    console.log('Words: ' + this.data.words);
    setTimeout(function printLater(){
      console.log('Letters: ' + this.data.letters +'\n\n');
    }.bind(this),500);
  }
};
