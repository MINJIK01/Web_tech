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

function drawTextAt(x,y) {
  context.fillStyle = "rgb(0,0,255)";
  context.font = "16px sans-serif";
  context.fillText("Hello", x,y);
  //context.strokeText("Hello", x,y);
}

// System automatically fills in the evt parameter with details
// of the event that happened
function doSomething(evt) {
  let pos = getMouseXY(evt);
  drawTextAt(pos.x, pos.y);
}

// main program
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

canvas.addEventListener('click', doSomething);