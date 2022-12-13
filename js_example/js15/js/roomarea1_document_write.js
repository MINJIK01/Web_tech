"use strict";

// functions

function area() {
  var length = document.forms["calcarea"].elements["mylength"].value;
  var width = document.calcarea.mywidth.value;
  document.write("Area = " + length*width);
}

// main program

var myButton = document.getElementById('calculate');
myButton.addEventListener('click', area, false);
