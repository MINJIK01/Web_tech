"use strict";

// main program

let canvas = document.getElementById("example");
let context = canvas.getContext("2d");

context.strokeStyle = "rgb(0,0,255)";
context.lineWidth = "5";

context.beginPath();
  context.moveTo(0,0);
  context.lineTo(100,100);
context.stroke();

context.beginPath();
  context.moveTo(50,0);
  context.lineTo(150,100);
  context.lineTo(200,100);
context.closePath();
context.stroke();