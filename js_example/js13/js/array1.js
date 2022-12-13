"use strict"; 

let properties = ['red','14px','Arial'];
properties[properties.length] = 'bold';  // red, 14px, Arial, bold
document.write(properties);
document.write("<br>");
properties.push('italic', 'underlined'); // red, 14px, Arial, bold, italic, underlined
document.write(properties);
document.write("<br>");


let data = [];
let number;

document.write(data);
document.write("<br>");

for (let i=0; i<10; ++i) {
  number = (Math.random()*10).toFixed(2);
  data.push(number);
  document.write(data);
  document.write("<br>");
}
document.write("Result: "+data);
document.write("<br>");


