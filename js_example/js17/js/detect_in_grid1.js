"use strict";

// functions

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

function drawGrid(context) {
  context.strokeStyle = "rgb(100,100,100)";
  context.lineWidth = "1";
  for (let x=0; x<CANVAS_WIDTH; x+=CELL_WIDTH) {
    context.beginPath();
    context.moveTo(x,0);
    context.lineTo(x,CANVAS_HEIGHT);
    context.stroke();
  }
  for (let y=0; y<CANVAS_HEIGHT; y+=CELL_HEIGHT) {
    context.beginPath();
    context.moveTo(0,y);
    context.lineTo(CANVAS_WIDTH, y);
    context.stroke();
  }
}

function whichGridCell(x, y) {
  if (x<0) x = 0;
  if (y<0) y = 0;
  if (x>=CANVAS_WIDTH) x = CANVAS_WIDTH-1;
  if (y>=CANVAS_HEIGHT) y = CANVAS_HEIGHT-1;
  let gx = Math.floor(x/CELL_WIDTH);
  let gy = Math.floor(y/CELL_HEIGHT);
  // need to be careful here
  // x, y on screen is j,i in grid
  return {j: gx, i: gy};
}

function doSomething(evt) {
  let pos = getMouseXY(evt);
  let str = "x, y: "+pos.x+", "+pos.y;
  let gridCell = whichGridCell(pos.x, pos.y);
  str += "  grid cell i, j: "+gridCell.i+", "+gridCell.j;
  displayResult(str);
}

// main program
let canvas = document.getElementById('canvas_example');
let context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

// divide canvas into 4x4 grid
const NUM_CELLS = 4;
const CELL_WIDTH = CANVAS_WIDTH/NUM_CELLS;
const CELL_HEIGHT = CANVAS_HEIGHT/NUM_CELLS;
drawGrid(context);

canvas.addEventListener('click', doSomething);
