"use strict";

// functions

function gridColour(v) {
  let colour;
  if (v == 1) {
    colour = "rgb(0,0,255)";
  }
  else {
    colour = "rgb(255,0,0)";
  }
  return colour;
}

function zeroOrOne() {
  return(Math.random()<0.5) ? 0 : 1;
}

function randomGrid(size) {
  let grid = new Array(size);
  for (let i=0; i<grid.length; i++) {
    grid[i] = new Array(size);
  }
  for (let i=0; i<grid.length; i++) {
	  for (let j=0; j<grid[i].length; j++) {
	    grid[i][j] = zeroOrOne();
	  }
  }
  return grid;
}

function drawCell(x, y, width, height, c) {
  context.fillStyle = c;
  context.fillRect(x, y, width, height); 
}
    
function drawGrid(context, grid) {
  let w = WIDTH/grid.length;
  for (let i=0; i<grid.length; ++i) {  
    let h = HEIGHT/grid[i].length;  
    for (let j=0; j<grid[i].length; ++j) {  
      let colour = gridColour(grid[i][j]);
      drawCell(j*w, i*h, w, h, colour);   // row = y coordinate on screen
    }                                     // column = x coordinate on screen
  }
}

function printGrid(grid) {
  let str="";
  for (let i=0; i<grid.length; ++i) {    
    for (let j=0; j<grid[i].length; ++j) {  
      str+=grid[i][j]+" ";
    }
    str+="\n";
  }
  console.log(str);
}


// main program body

let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
// assumes width and height stay constant
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let grid = [[0,0,0,0],
            [1,0,1,0],
            [0,1,0,1],
            [1,1,1,1]];

            
//let grid = randomGrid(4);  
drawGrid(context, grid);
printGrid(grid);