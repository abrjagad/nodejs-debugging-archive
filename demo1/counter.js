'use strict';

function Counter(text) {
  this.text = text;
  this.data = {
    words: 1,
    letters: 0
  };
  this.count();
}

Counter.prototype = {
  count: function() {
      for (let i = 0; i < this.text.length; i++) {
        if (this.text.charAt(i) === ' ') {
          ++this.data.words;
        } else {
          ++this.data.letters;
        }
      }
      Print.call(this);
      return this;
    }
};
