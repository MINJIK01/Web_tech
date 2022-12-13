"use strict";

// functions

function printDateInfo() {
  var now = new Date();
  alert(now);
}

// main program

var buttonElement = document.getElementById('dateinfo');
console.log(buttonElement);
buttonElement.addEventListener('click', printDateInfo, false);