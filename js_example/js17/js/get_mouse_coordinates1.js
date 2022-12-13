"use strict";

// functions

function getMouseXY(e) {
  let canvas = document.getElementById('canvas_example');
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  //console.log("left,top: "+offsetX+", "+offsetY);
  // assumes border and padding are equal width and height
  let w = (boundingRect.width-canvas.width)/2;
  let h = (boundingRect.height-canvas.height)/2;
  //console.log("w,h: "+w+", "+h);
  offsetX += w;
  offsetY += h;
  //console.log("clientX, clientY: "+e.clientX+", "+e.clientY);
  // use clientX and clientY as getBoundingClientRect is used above
  let mx = Math.round(e.clientX-offsetX);
  let my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
}

// System automatically fills in the evt parameter with details
// of the event that happened
function doSomething(evt) {
  let pos = getMouseXY(evt);
  console.log("click: "+pos.x+", "+pos.y);
}

// main program
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

canvas.addEventListener('click', doSomething);



// alternative code to get left border width and top border height
// styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
// styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;