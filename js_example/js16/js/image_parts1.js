"use strict";

// functions

function myDrawImage(img, context) {
  let w = img.width/2;
  let h = img.height/2;
  let ox = WIDTH/4
  let oy = HEIGHT/2;
  context.drawImage(img, 0,0);
  context.drawImage(img, 0, 0, w, h, ox+w, oy, w, h); 
  context.drawImage(img, w, 0, w, h, ox+w, oy+h, w, h);
  context.drawImage(img, w, h, w, h, ox, oy+h, w, h);
  context.drawImage(img, 0, h, w, h, ox, oy, w, h);
}

function draw(context, callback) {  
                                 // A 'callback' is a function that is invoked after some kind of event, 
                                 // In this example, it is called once the image has completed loading
  let img = new Image();
  img.onload = function() {      // Anonymous function, i.e. it has no name
    callback(this, context);     // Call the function stored in the variabe 'callback'
                                 // 'this' refers to the containing object currently in focus, i.e. img
  }
  img.src = "images/image1.jpg";
}

// main program body

let canvas = document.getElementById("example");
let context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
draw(context, myDrawImage);     // pass the name of a function as the second parameter
                                // In JavaScript, functions can be stored in variables