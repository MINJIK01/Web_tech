"use strict";

let names = ["images/image1.jpg", "images/eye1.png"];
const EYE = 1;

// functions

// could make images a global variable to save passing this structure around
// given it is a small program
function start(images) {
  for (let i=0; i<images.length; i++) {
    context.drawImage(images[i], 70, 70);
  }

  for (let i=0; i<10; i++) {
    let x = Math.round(Math.random()*canvas.width);
    let y = Math.round(Math.random()*canvas.height);
    let w = Math.round(Math.random()*canvas.width/5);
    let h = Math.round(Math.random()*canvas.height/5);
    context.drawImage(images[EYE], x,y,w,h);
  }  
}

function loadImages(filenames, callback) {
  let myImages = new Array(filenames.length);
  let imageCount = 0;
  for (let i=0; i<filenames.length; ++i) {
    myImages[i] = new Image();
    myImages[i].onload = function() {
      imageCount++; 
      if (imageCount==filenames.length) callback(myImages);
    }
    myImages[i].src = filenames[i];
  }
}

function initAndStart() {
  loadImages(names, start);
}
  
// main program body
// global variables
let canvas = document.getElementById("example");
let context = canvas.getContext("2d"); // use a global variable for context

// start
initAndStart();