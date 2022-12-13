"use strict";

// Author: Steve Maddock

class MyRectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  area() {
    return this.width * this.height;
  }

  toString() {
    return '(' + this.width + ', ' + this.height + ')';
  }
}


// main program body
console.log("running...");
let rect1 = new MyRectangle(3,4);
let rect2 = new MyRectangle(5,6);

let results = document.getElementById("results");
results.innerHTML = ("<p>Rectangle 1 " + rect1 + "</p>");
results.innerHTML += ("<p>Width = " + rect1.getWidth() + "</p>");
results.innerHTML += ("<p>Area = " + rect1.area() + "</p>");
console.log("Rectangle 1");
console.log(rect1);
console.log("Width = " + rect1.getWidth());
console.log("Area = " + rect1.area());

results.innerHTML += ("<p>Rectangle 2 " + rect2 + "</p>");
results.innerHTML += ("<p>Width = " + rect2.getWidth() + "</p>");
results.innerHTML += ("<p>Area = " + rect2.area() + "</p>");
console.log("Rectangle 2");
console.log(rect2);
console.log("Width = " + rect2.getWidth());
console.log("Area = " + rect2.area());
