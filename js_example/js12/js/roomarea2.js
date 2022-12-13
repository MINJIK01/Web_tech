"use strict";

let length = parseFloat(prompt("Rectangle length in cm?"));
console.log("Length=" + length);

let width = parseFloat(prompt("Rectangle width in cm?"));
console.log("Width=" + width);

let area = length * width;

let elem1 = document.getElementById('answer1');
elem1.textContent = "The area is: " + area;

let elem2 = document.getElementById('answer2');
elem2.innerHTML = "<em>The area is: " + area + "</em>";

// don't use document.write
// document.write("Area = " + length*width);
// alert("Area = "+length*width);