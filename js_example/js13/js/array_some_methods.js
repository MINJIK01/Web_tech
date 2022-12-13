"use strict"; 

function show(x) {
  let start = x.slice(0,1).toUpperCase();
  let end = x.slice(1);
  //document.write("start: "+start+"; end: "+end+"<br>");
  document.write(`${start}${end} `)
}

['jan','mar','may','jul','aug','oct','dec'].forEach(show);
document.write(" all have 31 days");

document.write("<br><br>");

['Bobbin', 'jilly', 'andy', 'Tez'].sort().forEach(
  function(str) {
    document.write(`${str}, `)
  }
);

document.write("<br><br>");

['Bobbin', 'jilly', 'andy', 'Tez'].sort(
  function(str1, str2) {
    let s1=str1.toLowerCase(), s2=str2.toLowerCase(), result=0;
    if (s1>s2) { result = 1; }
    else if (s1<s2) { result = -1; }
    return result;
  }
).forEach(
  function(str) {
    document.write(`${str}, `)
  }
);