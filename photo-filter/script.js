"use strict";

let filters = document.querySelectorAll(".filters");
let editor = document.querySelector(".editor");

//  filters
function inputValue(event) {
  let output = document.querySelectorAll("output");

  let img = document.querySelector("img");
  img.style.setProperty(`--${event.target.name}`, event.target.value + event.target.dataset.sizing);

  for (var i = 0; i < output.length; i++) {
    if (output[i].name === event.target.name) {
      output[i].value = event.target.value;
    }
  }
}
filters.forEach((input) => input.addEventListener("input", inputValue));
