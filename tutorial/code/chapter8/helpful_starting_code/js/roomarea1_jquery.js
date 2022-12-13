"use strict";

// functions

function area() {
  console.log("area");
  var length = $("#mylength").val();
  var width = $("#mywidth").val();
  console.log(length+", "+width);
  $("#output").val(length*width);
}

function clearOutput() {
  console.log(clearOutput);
  $("#output").val("");
}

// main program

console.log("running...");

//$("#calculate").on("click", area);
$("#calculate").click(area);

$("#mylength").on("blur", clearOutput);

$("#mywidth").blur(clearOutput);