"use strict";

// Author: Steve Maddock

function calculateValues() {
  // do some calculations
  let something = 42;
  return {x:3, y:4, z:something};
}

// main program body

let coords1 = {x:10, y:20, z:30};
document.write("coords1 = "+coords1.x+", "+coords1.y+", "+coords1.z+"<br>");

let coords2 = calculateValues();
document.write("coords2 = "+coords2.x+", "+coords2.y+", "+coords2.z+"<br>");

let person = {firstName:"John", surname:"Smith", age:20, eyeColour:"green"};
document.write(person.eyeColour+"<br>");
document.write(JSON.stringify(person));
