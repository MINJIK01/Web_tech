"use strict";

// functions

function getMouseXY(e) {
  let canvas = document.getElementById('canvas_example');
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  let w = (boundingRect.width-canvas.width)/2;
  let h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  // use clientX and clientY as getBoundingClientRect is used above
  let mx = Math.round(e.clientX-offsetX);
  let my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
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

function drawRectangle(context, rectangle) {
  context.fillStyle = "rgb(0,0,255)";
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
  context.fill();
}

// this could be replaced to check containment in any shape, e.g. a circle
function checkContained(x,y, rectangle) {
  return ((x>=rectangle.x)
          && (x<=rectangle.x+rectangle.w)
          && (y>=rectangle.y)
          && (y<=rectangle.y+rectangle.h));
}

function doSomething(evt, rectangle) {
  let pos = getMouseXY(evt);
  let inside = checkContained(pos.x, pos.y, rectangle);
  console.log("inside: " + inside);
  let str = "x, y, inside: "+pos.x+", "+pos.y+", "+inside;
  displayResult(str);
}

// main program
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let rectangle = {x: 50, y: 50, w: 30, h: 70};
console.log(rectangle);
drawRectangle(context, rectangle);

canvas.addEventListener('click', function(evt) { doSomething(evt, rectangle); });