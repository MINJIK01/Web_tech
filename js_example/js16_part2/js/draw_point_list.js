"use strict";

function convertY(y) {
  return canvas.height-y;
}

function drawPath(a, c) {
  context.strokeStyle = c;
  context.beginPath();
    //console.log(a[0]);
    context.moveTo(a[0].x, convertY(a[0].y));
    for (var i=1; i<a.length; ++i) {
      //console.log(a[i].x+","+a[i].y);
      context.lineTo(a[i].x, convertY(a[i].y));
    }
  context.stroke();
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPicture(p, c) {
  clear();
  drawPath(p, c);
}

function adjustPicture(p) {
  for (let i=1; i<p.length; ++i) {
    p[i].x += (10*(Math.random()-0.5));
    p[i].y += (10*(Math.random()-0.5));
  }
  p[0].x = p[p.length-1].x;
  p[0].y = p[p.length-1].y;
}

function resetPicture(p) {
  for (let i=0; i<p.length; ++i) {
    p[i].x = defaultPoints[i].x;
    p[i].y = defaultPoints[i].y;
  }
}

function clonePoints(dp) {
  let p = new Array(dp.length);
  for (let i=0; i<dp.length; ++i) {
    p[i] = {x:dp[i].x, y:dp[i].y};
    //console.log(p[i]);
  }
  return p;
}

// main program body
// program makes use of the following global variables

let myColour = "rgb(20,100,200)";
const defaultPoints = [{x:100,y:100}, {x:100,y:300}, {x:250,y:450}, {x:400,y:300}, {x:400,y:100}, {x:100,y:100}];
let points = clonePoints(defaultPoints);

let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");

drawPicture(points, myColour);

let adjustButton = document.getElementById("adjustbutton");
let resetButton = document.getElementById("resetbutton");
adjustButton.addEventListener("click", function() { adjustPicture(points); drawPicture(points, myColour); });
resetButton.addEventListener("click", function() { resetPicture(points); drawPicture(points, myColour); });
