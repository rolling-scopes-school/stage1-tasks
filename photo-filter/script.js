"use strict";

const fullScreen = document.querySelector(".fullscreen");
const root = document.querySelector(":root");
const filters = document.querySelectorAll(".filters");
const input = document.querySelectorAll("input");
const output = document.querySelectorAll("output");
const btnContainer = document.querySelector(".btn-container");
let img = document.querySelector("img");

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
//  Next picture
let count = 1;
function nextPicture() {
  let timer = new Date().getHours();
  let season = "";
  switch (true) {
    case count < 10:
      count = "0" + count;
      break;
    case count === 21:
      count = "0" + 1;
      break;
    default:
      count;
      break;
  }
  switch (true) {
    case timer >= "0" && timer < "6":
      season = "night";
      break;
    case timer < "12":
      season = "morning";
      break;
    case timer < "18":
      season = "day";
      break;
    default:
      season = "evening";
      break;
  }
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${season}/${count}.jpg`;
  count++;
}
// Load picture
function loadPicture() {
  const selectedFile = document.querySelector(".btn-load--input");
  let files = selectedFile.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(files);
  reader.onload = () => (img.src = reader.result);
}
// all btn
btnContainer.addEventListener("mousedown", (event) => {
  switch (true) {
    case event.target.classList.contains("btn-reset"):
      btnReset();
      break;
    case event.target.classList.contains("btn-next"):
      nextPicture();
      break;
    default:
      break;
  }
});
