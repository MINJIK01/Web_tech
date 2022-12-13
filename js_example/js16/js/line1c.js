"use strict";

// functions

function draw(context) {
  context.strokeStyle = "rgb(0,0,255)";
  
  context.lineWidth = "5";
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(100,100);
  context.stroke();
  
  context.lineWidth = "1";
  context.beginPath();
  context.moveTo(50,0);
  context.lineTo(150,100);
  context.moveTo(100,0);
  context.lineTo(200,100);
  context.stroke();
}

// main program

let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
draw(context);