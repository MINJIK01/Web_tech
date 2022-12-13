"use strict"; 

let a = 55;
let data = new Array(3);
data[0] = 42;
data[1] = 12;
data[2] = a;
data[1] = data[1] + 2 * data[0]; // data[1] now contains 96
document.write(data);
document.write("<br>")
let another = [34, data[0], data[2]*2, 11*3];
document.write(another);
document.write("<br>")

let days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
let i = days.length-1;
document.write(days[i]);  // Sun

let dataB = [];
dataB[0] = 21;
dataB[1] = dataB[0] * 2;
dataB[2] = 'dataB[0]';
dataB[7] = 34;
document.write(dataB);
document.write("<br>")
