"use strict";

// functions

function clearCanvas(context) {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawRandomLine(context, colour) {
  context.strokeStyle = colour;
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
let redButton = document.getElementById("redbutton");
let greenButton = document.getElementById("greenbutton");
let blueButton = document.getElementById("bluebutton");

// With anonymous functions, the context can be passed as a parameter to each of the functions
clearButton.addEventListener("click", function(event) { clearCanvas(context); console.log(event); } );
redButton.addEventListener("click", function() { drawRandomLine(context, "rgb(255,0,0)") });
greenButton.addEventListener("click", function() { drawRandomLine(context, "rgb(0,255,0)") });
blueButton.addEventListener("click", function() { drawRandomLine(context, "rgb(0,0,255)") });