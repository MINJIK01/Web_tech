"use strict";

function Ball() {
  this.x = 100;
  this.y = 100;
  this.radius = 20;
  this.dx = 2;
  this.dy = 3;
  
  /* could use a method so ball draw itself
  this.draw = function(context) {
    context.fillStyle = "rgb(0,0,255)";
    context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
  }
  */
}

function circle(context, x, y, r, c) {
  context.fillStyle = c;
  context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, true);
  context.closePath();
  context.fill();
}
    
function clear(context) {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function update(ball) {
  if (ball.x + ball.dx > WIDTH || ball.x + ball.dx < 0)
    ball.dx = -ball.dx;
  if (ball.y + ball.dy > HEIGHT || ball.y + ball.dy < 0)
    ball.dy = -ball.dy;
    
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function draw(context, ball) {
  clear(context);
  //ball.draw(context); // ball draws itself
  circle(context, ball.x+10, ball.y, ball.radius, "rgb(0,0,255)");
}

// animation frames
function nextFrame(context, ball) {
  requestID = requestAnimationFrame(function() { nextFrame(context,ball); } );
  update(ball);
  draw(context,ball);
}

function start(context, ball) {  
  draw(context, ball);
  nextFrame(context, ball);
}
    
// main program body
let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let requestID;
let ball = new Ball();
start(context, ball);