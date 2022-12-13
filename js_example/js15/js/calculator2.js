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

let buttons = document.querySelectorAll('.number, .operator');
buttons.forEach(button => {
  button.addEventListener(
    'click', function() { str=concatenate(str,button.textContent); } );
  }
);

let button = document.querySelector('.equals');
button.addEventListener('click', () => { parse(str); } );

let b_clear = document.getElementById('key_clear');
b_clear.addEventListener('click', () => str=clear() );
