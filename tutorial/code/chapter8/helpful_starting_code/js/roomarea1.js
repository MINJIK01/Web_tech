"use strict";

// functions

function area() {
  var length = document.getElementById('mylength').value;
  var width = document.getElementById('mywidth').value;
  document.getElementById('output').value = length*width;
}

// main program

var myButton = document.getElementById('calculate');
myButton.addEventListener('click', area, false);