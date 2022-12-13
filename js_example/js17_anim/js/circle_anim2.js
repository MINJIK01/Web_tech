"use strict";

// class for a DataItem

function DataItem(width, height) {

  this.w = width;
  this.h = height;
  
  this.init = function() {
    this.r = Math.random()*10;
    this.x = this.r+Math.random()*(this.w-2*this.r);
    this.y = this.r+Math.random()*(this.h-2*this.r);
    this.lifetime = 7+Math.floor(Math.random()*10);
  }

  this.init();  
}

DataItem.prototype.dec = function() {
  if (this.lifetime<=0) {
    this.init();
  }
  else {
    this.lifetime--;
    this.r*=1.1;
  }
}

DataItem.prototype.display = function(context) {
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
  context.closePath();
  context.stroke();
}

// class for a DataList

function DataList(n, w, h) {
  this.numItems = n;
  this.data = new Array(this.numItems);

  this.init = function() {
    for (let i=0; i<this.numItems; i++) {
      this.data[i] = new DataItem(w,h);
    }
  }
  
  this.init();  
}

DataList.prototype.update = function() {
  for (let i=0; i<this.numItems; i++) {
    this.data[i].dec();
  }
}

DataList.prototype.display = function(context) {
  context.strokeStyle = "rgb(0,0,255)";
  context.lineWidth = "5";
  for (let i=0; i<this.numItems; i++) {
    this.data[i].display(context);
  }
}

// main program functions 

function update() {
  dataList.update();
}

function display() {
  clearCanvas();
  dataList.display(context);
}

// animation frames
function nextFrame() {
  setTimeout(function() {
    requestID = requestAnimationFrame(nextFrame);
    update();
    display();
  }, 50);
}

function init() {
  dataList.display(context);
  nextFrame();
}

function clearCanvas() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

// main program global variables
let mycanvas = document.getElementById('example');
let context = mycanvas.getContext('2d');
const WIDTH = mycanvas.width;
const HEIGHT = mycanvas.height;
let requestID;
let dataList = new DataList(20, WIDTH, HEIGHT);

// main program body
init();
