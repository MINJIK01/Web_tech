"use strict";

// functions

function getMouseXY(e, canvas) {
  let canvas = document.getElementById('canvas_example');
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  //console.log("left,top: "+offsetX+", "+offsetY);
  let w = (boundingRect.width-canvas.width)/2;
  let h = (boundingRect.height-canvas.height)/2;
  //console.log("w,h: "+w+", "+h);
  offsetX += w;
  offsetY += h;
  //console.log("clientX, clientY: "+e.clientX+", "+e.clientY);
  // use clientX and clientY as getBoundingClientRect is used above
  let mx = Math.round(e.clientX-offsetX);
  let my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};  // return as an object with two properties
}

function displayResult(str) {
  let outputArea = document.getElementById('output_area');
  let myElement = document.createElement("p");
  let textNode = document.createTextNode(str);
  myElement.appendChild(textNode);
  if (outputArea.firstChild)
    outputArea.replaceChild(myElement, outputArea.firstChild);
  else
    outputArea.appendChild(myElement);
}

// System automatically fills in the evt parameter with details
// of the event that happened
function doSomething(evt) {
  let pos = getMouseXY(evt);
  console.log("click: "+pos.x+", "+pos.y);
  let str = "x, y: "+pos.x+", "+pos.y;
  displayResult(str);
}

// main program
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

canvas.addEventListener('click', doSomething);