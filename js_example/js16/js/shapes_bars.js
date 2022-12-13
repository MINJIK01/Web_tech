"use strict";

// functions

function randomColour() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let colour = "rgb("+r+","+g+","+b+")"; 
  return colour;
}

function drawBar(context, x, y, width, height, c) {
  context.fillStyle = c;
  context.fillRect(x, HEIGHT-y-height, width, height); 
}
    
function drawBars(context) {
  let numbars = 10;
  let width = WIDTH/numbars;
  for (let i=0; i<numbars; ++i) {
    let height = Math.random()*HEIGHT;
    let colour = randomColour();
    drawBar(context, width*i, 0, width, height, colour);
  }
}

// main program body

let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
// assumes width and height of canvas do not change
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
  
drawBars(context);