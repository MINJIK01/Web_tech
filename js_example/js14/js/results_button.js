"use strict"; 

// functions
function updateResults() {
  let results = document.getElementById("results");
  let elem = document.createElement("p");
  let n = Math.random()*50;
  let str = "Here are the new results: " + n.toFixed(2);
  let textNode = document.createTextNode(str);
  elem.appendChild(textNode);
  results.appendChild(elem);
}

function addButtonhandler() {
  let b = document.getElementById("moreResults");
  b.addEventListener('click', updateResults, false);
}

// main program
addButtonhandler();