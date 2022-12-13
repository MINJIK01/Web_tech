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

function displayResult(str) {
  let outputArea = document.getElementById('output_area');
  let myElement = document.createElement("p");
  let textNode = document.createTextNode(str);
  myElement.appendChild(textNode);
  if (outputArea.firstChild)
    outputArea.replaceChild(myElement, outputArea.firstChild);
  else
    outputArea.appendChild(myElement);
}

function displayTime(t) {
  //console.log("time: "+t);
  let str = "time: " + t;
  let outputArea = document.getElementById('output_area');
  let myElement = document.createElement("p");
  let textNode = document.createTextNode(str);
  myElement.appendChild(textNode);
  if (outputArea.firstChild)
    outputArea.replaceChild(myElement, outputArea.firstChild);
  else
    outputArea.appendChild(myElement);
}

// animation frames
/*
function nextFrame() {
  let date = new Date();
  let now = date.getTime();
  displayTime(now-startTime);
  if (now-startTime > timePeriod) {
    stop();
  }
  else {
    requestId = requestAnimationFrame(nextFrame);
    update();
    draw();
  }
}
*/

function nextFrame() {
  requestId = requestAnimationFrame(nextFrame);
  update();
  draw();
  let date = new Date();
  let now = date.getTime();
  displayTime(now - startTime); // elapsed time
  if (now - startTime > timePeriod) {
    stop();
  }
}

function start() {  
    let date = new Date();
    startTime = date.getTime(); // get time when start button was pressed
    draw();
    nextFrame();
}

function stop() {
  if (requestId)
    cancelAnimationFrame(requestId);
}

// main program body
// program makes use of the following global variables
let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let requestId;
let x, y, radius, dx, dy;
let timePeriod = 2000;  // 2 seconds
let startTime;

console.log("Hello world");
initBall();
draw();

let startButton = document.getElementById("start_button");
startButton.addEventListener('click', start);
