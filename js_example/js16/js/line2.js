"use strict";

// functions

function myRandom(x) {
  return Math.random()*x;
}

function drawLine(context, x1,y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

function drawLines1(context, w, h) {
  context.strokeStyle = "rgb(0,0,255)";
  context.lineWidth = "1";
  for (let i=0; i<100; i++) {
    drawLine(context, myRandom(w), myRandom(h), myRandom(w), myRandom(h));
  }
}

function drawLines2(context, w, h) {
  context.lineWidth = "1";
  for (let i=0; i<100; i++) {
    let r = Math.floor(myRandom(256));
    let g = Math.floor(myRandom(256));
    let b = Math.floor(myRandom(256));
    context.strokeStyle = "rgb("+r+","+g+","+b+")";
    drawLine(context, myRandom(w), myRandom(h), myRandom(w), myRandom(h));
  }
}

function clear(context,w,h) {
  context.clearRect(0,0,w, h);
}

function draw() {
  clear(context1, canvas1.width, canvas1.height);
  clear(context2, canvas2.width, canvas2.height)
  drawLines1(context1, canvas1.width, canvas1.height);
  drawLines2(context2, canvas2.width, canvas2.height);
}

// main program body
// Extension: could replace this with an array of canvases
// global variables first
let canvas1 = document.getElementById("canvas_example1");
let context1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("canvas_example2");
let context2 = canvas2.getContext("2d");
// draw the scene
draw();

let buttonElement = document.getElementById("redraw");
buttonElement.addEventListener('click', draw, false);

// an anonymous function is required if we wish to pass parameters to the draw function
// buttonElement.addEventListener('click', function() { draw(context1, context2); }, false);