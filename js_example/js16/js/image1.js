"use strict";

// functions

function draw(context) {
  let img = new Image();
  img.onload = function() { 
    context.drawImage(img,0,50); 
  }
  img.src = "images/image2.jpg";
}

// main program body

let canvas = document.getElementById("canvas_example");
let context = canvas.getContext("2d");
draw(context);