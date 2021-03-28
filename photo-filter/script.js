"use strict";

const fullScreen = document.querySelector(".fullscreen");
const root = document.querySelector(":root");
const filters = document.querySelectorAll(".filters");
const input = document.querySelectorAll("input");
const output = document.querySelectorAll("output");
const btnContainer = document.querySelector(".btn-container");

//  filters
function inputValue(event) {
  root.style.setProperty(`--${event.target.name}`, event.target.value + event.target.dataset.sizing);
  output.forEach((el) => (el.name === event.target.name ? (el.value = event.target.value) : null));
}
filters.forEach((event) => event.addEventListener("input", inputValue));

// fullScreen
fullScreen.addEventListener("mousedown", () => {
  const elem = document.documentElement;
  if (document.fullscreenElement === null) {
    elem.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// reset btn
function btnReset() {
  input.forEach((input) => {
    input.value = input.defaultValue;
    root.style.setProperty(`--${input.name}`, input.value + input.dataset.sizing);
  });
  output.forEach((el) => (el.value = el.defaultValue));
}

// all btn
btnContainer.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("btn-reset")) {
    btnReset();
  }
});
