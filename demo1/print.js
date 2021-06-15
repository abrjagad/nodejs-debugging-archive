'use strict';

function createResult(result, parent,key) {
  var parentElement = document.getElementById(parent);
  var childElement = document.createElement("i");
  childElement.textContent = result;
  parentElement.appendChild(childElement);
  console.log(key+': ' + result);
}

function Print() {

  createResult(this.data.words, 'results', 'words');

  setTimeout(function printLater() {
    createResult(this.data.letters, 'results2', 'letters');
  }.bind(this), 500);

};
