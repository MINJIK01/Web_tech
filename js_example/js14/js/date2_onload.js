"use strict"; 

// functions
function getGreeting() {
  let today = new Date();
  console.log("Date=" + today);
  let hour = today.getHours();
  console.log("The hour is: " + hour);
  let greeting = "";
  if (hour < 12) {
    greeting = "Good morning"
  }
  else if (hour < 18) {
    greeting = "Good afternoon"	
  }
  else {
    greeting = "Good evening"
  }
	return greeting;
}

function ready() {
  let myElement = document.getElementById('outputArea');
  myElement.textContent = getGreeting();
  console.log(myElement);
}

// main program
if (window.addEventListener) {
  window.addEventListener('load', ready, false);
}