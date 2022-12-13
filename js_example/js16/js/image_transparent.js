"use strict";

// functions

function draw(context, myImages) {
  for (let i=0; i<myImages.length; ++i) {
    let x = WIDTH*Math.random()*0.5;
    let y = HEIGHT*Math.random()*0.5;
    context.drawImage(myImages[i], x, y);
  }
}

function loadImages(context, filenames, callback) {
  let myImages = new Array(filenames.length);
  let imageCount = 0;
  for (let i=0; i<filenames.length; ++i) {
    myImages[i] = new Image();
    myImages[i].onload = function() {
      imageCount++; 
      if (imageCount==filenames.length) callback(context, myImages);
    }
    myImages[i].src = filenames[i];
  }
}

function initAndStart(context) {
  let names = ["images/image1.jpg", "images/image2.jpg", "images/horse1_transparent.png"]; //"images/animhorse_5.jpg" ];
  loadImages(context, names, draw);
}
  
// main program body
// global variables
let canvas = document.getElementById("example");
let context = canvas.getContext("2d");
// assumes canvas size does not change
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
// start


initAndStart(context);
