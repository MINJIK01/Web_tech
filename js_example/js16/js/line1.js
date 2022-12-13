"use strict";

// main program

let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");

context.strokeStyle = "rgb(0,0,255)";
context.lineWidth = "5";
context.beginPath();
  context.moveTo(0,0);
  context.lineTo(100,100);
context.stroke();