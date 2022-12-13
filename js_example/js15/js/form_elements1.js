"use strict";

// functions

function displaySliderValue() {
  document.getElementById('sliderText').value = document.getElementById('myslider').value;
}

// main program

let sliderElement = document.getElementById('myslider');
sliderElement.addEventListener('change', displaySliderValue, false);