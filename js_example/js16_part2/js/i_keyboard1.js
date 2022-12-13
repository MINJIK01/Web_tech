"use strict";

// functions

function resetCurrentPoint() {
  currentX = WIDTH/2;
  currentY = HEIGHT/2;  
  context.moveTo(currentX, currentY);
}

function clearCanvas() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function resetCanvas() {
  clearCanvas();
  resetCurrentPoint();
  drawObject();
}

function drawObject() {
  context.strokeStyle = "rgb(0,0,255)";
  context.beginPath();
  context.arc(currentX, currentY, RADIUS, 0, Math.PI*2, true);
  context.fill();
}

function onKeyDown(ev) {
  console.log(ev.key+" "+ev.keyCode);
  switch (ev.key) {
    case 'ArrowLeft':  /* Left arrow was pressed 37 */
      if (currentX - dx > 0){ 
        currentX -= dx;
      }
      break;
    case 'ArrowRight':  /* Right arrow was pressed 39*/
      if (currentX + dx < WIDTH){ 
        currentX += dx;
      }
      break;
    case 'ArrowUp':  /* Up arrow was pressed 38*/
      if (currentY - dy > 0){ 
        currentY -= dy;
      }
      break;
    case 'ArrowDown':  /* Down arrow was pressed 40*/
      if (currentY + dy < HEIGHT){ 
        currentY += dy;
      }
      break;
  }
  clearCanvas();
  drawObject();
}

// main program body
// uses global variables
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let RADIUS = 50;
let currentX, currentY;
let dx = 2, dy = 2;

let resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", resetCanvas);

document.addEventListener('keydown',onKeyDown);
resetCanvas();