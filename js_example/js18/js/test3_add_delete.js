"use strict";

// Author: Steve Maddock

// object
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  
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
results.innerHTML = ("<p>Rectangle 1" + JSON.stringify(rect1) + "</p>");
results.innerHTML += ("<p>Rectangle 2" + JSON.stringify(rect2) + "</p>");
console.log("Rectangle 1"); console.log(JSON.stringify(rect1));
console.log("Rectangle 2"); console.log(JSON.stringify(rect2));

rect2.name = "Kitchen floor";
results.innerHTML += ("<p>Rectangle 1" + JSON.stringify(rect1) + "</p>");
results.innerHTML += ("<p>Rectangle 2" + JSON.stringify(rect2) + "</p>");
console.log("Rectangle 1"); console.log(JSON.stringify(rect1));
console.log("Rectangle 2"); console.log(JSON.stringify(rect2));

delete rect1.width;
results.innerHTML += ("<p>Rectangle 1" + JSON.stringify(rect1) + "</p>");
results.innerHTML += ("<p>Rectangle 2" + JSON.stringify(rect2) + "</p>");
console.log("Rectangle 1"); console.log(JSON.stringify(rect1));
console.log("Rectangle 2"); console.log(JSON.stringify(rect2));
