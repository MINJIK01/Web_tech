"use strict"; 

let mylist = document.getElementById("mylist");
console.log(mylist);  
console.log(mylist.firstChild); 
console.log(mylist.childNodes[0]);    
let nodes = mylist.childNodes;
console.log(nodes); 
console.log(nodes.item(0));
console.log(nodes.item(1)); 
console.log(nodes[2]); 