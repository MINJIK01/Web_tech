"use strict";

// functions

function area() {
  var length = document.getElementById('mylength').value;
  var width = document.getElementById('mywidth').value;
  document.getElementById('output').value = length*width;    
}

function clearElement(str) {
  document.getElementById(str).value = "";
}

function clearOutput() {
  document.getElementById('output').value = "";
}

// main program

var myButton = document.getElementById('calculate');
myButton.addEventListener('click', area, false);

// Multiple listeners can be added to the same element
// Anonymous functions can be used so that parameters can be passed to a function that responds to the event
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
var lengthInputElement = document.getElementById('mylength');
lengthInputElement.addEventListener('focus', function() { clearElement('output'); }, false);
lengthInputElement.addEventListener('focus', function() { clearElement('mylength'); }, false);

var widthInputElement = document.getElementById('mywidth');
widthInputElement.addEventListener('focus', clearOutput, false);
widthInputElement.addEventListener('focus', function() { clearElement('mywidth'); }, false);