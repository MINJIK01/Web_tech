"use strict";

// functions

function draw() {
  let canvas = document.getElementById("canvas_example");
  let context = canvas.getContext("2d");
  context.fillStyle = "rgb(0,0,255)";
  context.fillRect(50,100,30,70);       
}

// main program body

draw();