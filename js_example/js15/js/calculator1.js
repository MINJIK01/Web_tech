"use strict";

// functions

function concatenate(s,ch) {
  //console.log("concatenate "+s+" "+ch);
  s+=ch;
  document.getElementById('output').value = s;
  return s;
}

function clear() {
  let s="";
  document.getElementById('output').value = s;
  return s;
}

function interpret(s) {
  let answer = Math.eval(s);  // the eval function is dangerous as it can be supplied with any javascript code and will evaluate it
  document.getElementById('output').value = answer;
}

function parse(s) {
  let answer = Function(`'use strict'; return (${s})`)();
  document.getElementById('output').value = s+"="+answer;
}

// main program

let str = '';
let button;

button = document.querySelector('#number_1');
button.addEventListener('click', function() { str=concatenate(str,'1'); } );

button = document.querySelector('#number_2');
button.addEventListener('click', function() { str=concatenate(str,'2'); } );

button = document.querySelector('#operator_plus');
button.addEventListener('click', function() { str=concatenate(str,'+'); } );

button = document.querySelector('#equals');
button.addEventListener('click', function() { parse(str); } );

// Could reuse button variable.
// Demonstrates getElementById.
let b_clear = document.getElementById('key_clear');
b_clear.addEventListener('click', function() { str = clear(); } );