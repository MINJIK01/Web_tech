"use strict";

// Author: Steve Maddock

// main program body
// makes use of rectangle.js
console.log("running...");
let rect1 = new Rectangle(3,4);
let rect2 = new Rectangle(5,6);

let results = document.getElementById("results");
results.innerHTML = ("<p>Rectangle 1 " + rect1 + "</p>");
results.innerHTML += ("<p>Width = " + rect1.width + "</p>");
results.innerHTML += ("<p>Area = " + rect1.area() + "</p>");
console.log("Rectangle 1");
console.log(rect1);
console.log("Width = " + rect1.width);
console.log("Area = " + rect1.area());

results.innerHTML += ("<p>Rectangle 2 " + rect2 + "</p>");
results.innerHTML += ("<p>Width = " + rect2.width + "</p>");
results.innerHTML += ("<p>Area = " + rect2.area() + "</p>");
console.log("Rectangle 2");
console.log(rect2);
console.log("Width = " + rect2.width);
console.log("Area = " + rect2.area());

// It is possible to do this, but you have to think carefully about
// using this facility. Since the method is added to the prototype,
// it is automatically added to all instances using the prototype
Rectangle.prototype.getLongestSide = function() {
  return (this.getHeight() > this.getWidth()) ? this.getHeight() : this.getWidth();
}

console.log("Rectangle 1 longest side = " + rect1.getLongestSide());
console.log("Rectangle 2 longest side = " + rect2.getLongestSide());
