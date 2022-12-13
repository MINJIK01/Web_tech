"use strict";

function circle(x, y, r, c) {
  context.fillStyle = c;
  context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, true);
  context.fill();
}
    
function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function update() {
  if (ball.x + ball.dx > WIDTH || ball.x + ball.dx < 0)
    ball.dx = -ball.dx;
  if (ball.y + ball.dy > HEIGHT || ball.y + ball.dy < 0)
    ball.dy = -ball.dy;
    
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function draw() {
  clear();
  circle(ball.x, ball.y, ball.radius, ball.colour);
}

// animation frames
function nextFrame() {
  requestId = requestAnimationFrame(nextFrame);
  update();
  draw();
}

function start() {  
  draw();
  nextFrame();
}
    
// main program body
// program makes use of the following global variables
let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let requestId;
// ball is treated as a global variable which means it does not have to be passed as a parameter to each function that uses it. In practice, it would be better to pass it as a parameter.
let ball = {x: 100, y: 100, radius: 20, dx: 2, dy: 3, colour: "rgb(0,0,255)"};

start();