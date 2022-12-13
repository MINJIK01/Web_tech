"use strict";

// functions

function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw(x, y, t) {
  if (t>1) t = 1;
  clear();
  context.strokeStyle = "rgb(255,0,255)";
  context.beginPath();
    context.arc(x, y, 50*t, 0, Math.PI*2, true);
  context.stroke();
}

function displayTime(t) {
  //console.log("time: "+t);
  let str = "time: "+t;
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
/*function nextFrame(x, y, startTime, timePeriod) {
  let date = new Date();
  let now = date.getTime();
  let elapsedTime = now-startTime;
  displayTime(elapsedTime);
  if (elapsedTime > timePeriod) {
    stop();
  }
  else {
    requestId = requestAnimationFrame(function() {nextFrame(x,y, startTime, timePeriod); });
    draw(x, y, elapsedTime/timePeriod);
  }
}
*/

function nextFrame(x, y, startTime, timePeriod) {
  let date = new Date();
  let now = date.getTime();
  let elapsedTime = now-startTime;
  displayTime(elapsedTime);
  requestId = requestAnimationFrame(function() {
    nextFrame(x,y, startTime, timePeriod); 
  });
  draw(x, y, elapsedTime/timePeriod);
  if (elapsedTime > timePeriod) {
    stop();
  }
}

function animation(x, y) {
  let timePeriod = 500;
  let date = new Date();
  let startTime = date.getTime();
  draw(x, y, 0);
  nextFrame(x,y, startTime, timePeriod);  
}

function stop() {
  if (requestId)
    cancelAnimationFrame(requestId);
}

function getMouseXY(e) {
  let canvas = document.getElementById('canvas_example');
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  let w = (boundingRect.width-canvas.width)/2;
  let h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  // use clientX and clientY as getBoundingClientRect is used above
  let mx = Math.round(e.clientX-offsetX);
  let my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
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

function doSomething(evt) {
  let pos = getMouseXY(evt);
  let str = "x, y: "+pos.x+", "+pos.y;
  displayResult(str);
  animation(pos.x, pos.y);
}

// main program
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let requestId;

canvas.addEventListener('click', doSomething);