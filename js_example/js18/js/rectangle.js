"use strict";

// Author: Steve Maddock
// Rectangle object

function Rectangle(w,h) {
  this.width = w;
  this.height = h;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getHeight = function() {
  return this.height;
}

Rectangle.prototype.setWidth = function(w) {
  this.width = w;
}

Rectangle.prototype.setHeight = function(h) {
  this.width = h;
}

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

Rectangle.prototype.perimeter = function() {
  return 2 * (this.width + this.height);
}

Rectangle.prototype.toString = function() {
  return ("(" + this.width + "," + this.height + ")");
}

Rectangle.UNIT = new Rectangle(1,1);

Rectangle.max = function(a,b) {
  if (a.area() > b.area()) return a;
  else return b;
}
