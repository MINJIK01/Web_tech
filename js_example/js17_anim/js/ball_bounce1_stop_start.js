"use strict";

function initBall() {
  x = 100;
  y = 100;
  radius = 20;
  dx = 2;
  dy = 3;
}

function circle(x, y, r, c) {
  context.fillStyle = c;
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
}

function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function update() {
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}

function draw() {
  console.log("draw");
  clear();
  circle(x, y, radius, "rgb(0,0,255)");
}

// animation frames
function nextFrame() {
  requestId = requestAnimationFrame(nextFrame);
  update();
  draw();
}

function start() {
  if (!startButton.disabled) {
    startButton.disabled = true;
    draw();
    nextFrame();
  }
}

function stop() {
  startButton.disabled = false;
  if (requestId)
    cancelAnimationFrame(requestId);
}
//
// main program body
// program makes use of the following global variables
let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let requestId;
let x, y, radius, dx, dy;

initBall();
draw();

let startButton = document.getElementById("start_button");
startButton.addEventListener('click', start);
let stopButton = document.getElementById("stop_button");
stopButton.addEventListener('click', stop);