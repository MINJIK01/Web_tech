"use strict"; 

function aGetTwoRandomNumbers(n) {
  return [Math.random()*n, Math.random()*n];
}

function bGetTwoRandomNumbers(n) {
  return {x:Math.random()*n, y:Math.random()*n};
}

let a = aGetTwoRandomNumbers(10);
console.log(a[0], a[1]);

let b = bGetTwoRandomNumbers(10);
console.log(b.x, b.y);

let myElement = document.getElementById('answer');
// don't use element as the variable name because element is a reserved word

let message = "<p>a= " + a + "</p>";
myElement.innerHTML = message;

message = "<p>b= " + b.x + ", " + b.y + "</p>";
myElement.innerHTML += message;