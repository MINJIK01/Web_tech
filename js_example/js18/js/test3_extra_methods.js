"use strict";

// Author: Steve Maddock

// object
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  
  this.getWidth = function() {
    return this.width;
  };

  this.setWidth = function(w) {
    this.width = w;
  };

  this.getHeight = function() {
    return this.height;
  };
  
  this.setHeight = function(h) {
    this.height = h;
  };
  
  this.area = function() {
    return this.width * this.height;
  };
  
  this.perimeter = function() {
    return 2 * (this.width + this.height);
  };
}

// main program body
console.log("running...");
let rect1 = new Rectangle(3,4);
let rect2 = new Rectangle(5,6);

let results = document.getElementById("results");
results.innerHTML = ("<p>Rectangle 1</p>");
results.innerHTML += ("<p>" + rect1 + "</p>");
results.innerHTML += ("<p>Width = " + rect1.width + "</p>");
results.innerHTML += ("<p>Width = " + rect1.getWidth() + "</p>");
results.innerHTML += ("<p>Area = " + rect1.area() + "</p>");
console.log("Rectangle 1");
console.log(rect1);
console.log("Width = " + rect1.width);
console.log("Width = " + rect1.getWidth());
console.log("Area = " + rect1.area());

results.innerHTML += ("<p>Rectangle 2</p>");
results.innerHTML += ("<p>" + rect2 + "</p>");
results.innerHTML += ("<p>Width = " + rect2.width + "</p>");
results.innerHTML += ("<p>Width = " + rect2.getWidth() + "</p>");
results.innerHTML += ("<p>Area = " + rect2.area() + "</p>");
console.log("Rectangle 2");
console.log(rect2);
console.log("Width = " + rect2.width);
console.log("Width = " + rect2.getWidth());
console.log("Area = " + rect2.area());
