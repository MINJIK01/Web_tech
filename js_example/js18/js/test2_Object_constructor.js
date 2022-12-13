"use strict";

// Author: Steve Maddock

// object

let rect = new Object();
rect.width = 3;
rect.height = 4;
rect.area = function() {
  return this.width * this.height;
};
rect.perimeter = function() {
  return 2 * (this.width + this.height);
};

// main program body
console.log("running...");
let results = document.getElementById("results");
results.innerHTML = ("<p>Width = " + rect.width + "</p>");
console.log("Width = " + rect.width);
results.innerHTML += ("<p>Area = " + rect.area() + "</p>");
console.log("Area = " + rect.area());

