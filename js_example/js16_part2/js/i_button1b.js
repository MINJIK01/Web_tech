"use strict";

// functions

function clearCanvas(context) {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawRandomLine(context) {
  context.strokeStyle = "rgb(0,0,255)";
  let x1 = Math.random()*WIDTH;
  let y1 = Math.random()*HEIGHT;
  let x2 = Math.random()*WIDTH;
  let y2 = Math.random()*HEIGHT;
  context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
  context.stroke();
}

// main program body 

let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let clearButton = document.getElementById("clearbutton");
let drawButton = document.getElementById("drawbutton");

// Without anonymous funcions, context will be a global variable referred to from the
// functions clearCanvas and drawRandomLine
// clearButton.addEventListener("click", clearCanvas);
//  drawButton.addEventListener("click", drawRandomLine);

// With anonymous functions, the context can be passed as a parameter to each of the functions
clearButton.addEventListener("click", function() { clearCanvas(context) });
drawButton.addEventListener("click", function() { drawRandomLine(context) });