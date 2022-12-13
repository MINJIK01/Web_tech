"use strict"; 

function makeArray(a) {
  let m = "<p>Length="+a.length+"; Contents: ";
  for (let i=0; i<a.length; ++i) {
    m += ((i<a.length-1)?(a[i]+", "):a[i]); // obfuscation
  }
  //data.forEach(function(e, i, a) { m+=((i<a.length-1)?(e+", "):e); });  // does not return undefined values
  return m+"</p>";
}

let myElement = document.getElementById('answer');
// don't use element as the variable name because element is a reserved word

let data = [];
data[0] = 42;
data[1] = 21;
data[2] = data[0] * 2;
data[3] = data[0] * data[0]
data[4] = 'data[0]';

let message = makeArray(data);
myElement.innerHTML = message;

data[7] = 34;

let message2 = makeArray(data);
myElement.innerHTML += message2;

