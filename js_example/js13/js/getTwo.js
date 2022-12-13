"use strict"; 

function aGetTwoRandomNumbers(n) {
  let x = Math.random()*n;
  let y = Math.random()*n;
  return [x.toFixed(2), y.toFixed(2)];
}

let a = aGetTwoRandomNumbers(10);
console.log(a[0], a[1]);

let myElement = document.getElementById('answer');
// don't use element as the variable name because element is a reserved word

let message = "<p>a= " + a + "</p>";
myElement.innerHTML = message;

a = aGetTwoRandomNumbers(10);          // get two more random numbers
console.log(a[0], a[1]);

message = "<p>a= " + a + "</p>";       // when writing an array, JavaScript automatically
                                       // writes each element in a comma-separated list
myElement.innerHTML += message;        // add more output to the element

// and do it again, but write it out in a slightly long-winded way
a = aGetTwoRandomNumbers(10);         // get two more random numbers
console.log(a[0], a[1]);

let elem2 = document.getElementById('answer2');
let message2 = "<p>a= " + a + "</p>";
let existingContentOfAnswerElement = myElement.innerHTML;         // get the existing content of the element
elem2.innerHTML = existingContentOfAnswerElement + message2;  // add more output to the element using string concatenation

// and do it again, but write it out slightly differently
a = aGetTwoRandomNumbers(10);         // get two more random numbers
console.log(a[0], a[1]);
                                      // write each element to 2 decimal points
                                      // could write a function to produce the output string for the array
let message3 = "<p>a= " + a[0] + ", " + a[1] + "</p>";
elem2.innerHTML += message3;      // add more output to the element