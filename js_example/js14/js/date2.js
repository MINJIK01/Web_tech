"use strict"; 

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
	
let elem = document.getElementById('outputArea');
elem.textContent = greeting;
console.log(elem);

// don't use element as the variable name as it is a reserved word