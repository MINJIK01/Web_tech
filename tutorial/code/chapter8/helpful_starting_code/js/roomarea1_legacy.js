"use strict";

// functions

function area() {
  var length = document.forms["calcarea"].elements["mylength"].value;
  var width = document.calcarea.mywidth.value;
  document.forms["calcarea"]["output"].value=length*width;    
}

function clearOutput() {
  document.getElementById('output').value = "";
}

// main program

var myButton = document.getElementById('calculate');
myButton.addEventListener('click', area, false);

var lengthInputElement = document.getElementById('mylength');
lengthInputElement.addEventListener('blur', clearOutput, false);

var widthInputElement = document.getElementById('mywidth');
widthInputElement.addEventListener('blur', clearOutput, false);