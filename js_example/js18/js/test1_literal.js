"use strict";

// Author: Steve Maddock

// object
let rect = {
  width: 3,
  height: 4,
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};

// main program body
console.log("running...");
let results = document.getElementById("results");
results.innerHTML = ("<p>Width = " + rect.width + "</p>");
console.log("Width = " + rect.width);
results.innerHTML += ("<p>Area = " + rect.area() + "</p>");
console.log("Area = " + rect.area());