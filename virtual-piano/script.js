const keys = document.querySelectorAll(".piano-key");

let mouseDown = 0;
document.body.onmousedown = function () {
  mouseDown = 1;
};
document.body.onmouseup = function () {
  mouseDown = 0;
};

keys.forEach((key) => {
  key.addEventListener("mouseout", () => {
    key.classList.remove("piano-key-active");
  });
  key.addEventListener("mouseover", () => playNoteHover(key));
  key.addEventListener("click", () => playNote(key));
  key.addEventListener("mousedown", () => playNoteActive(key));
  key.addEventListener("mouseup", () => playNoteActiveUp(key));
});

function playNoteActive(key) {
  key.classList.add("piano-key-active");
}

function playNoteActiveUp(key) {
  key.classList.remove("piano-key-active");
}

function playNoteHover(key) {
  if (mouseDown) {
    key.classList.add("piano-key-active");
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
  }
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}

const btnFullScreen = document
  .getElementById("btnFull")
  .addEventListener("click", fullScreen);

function fullScreen() {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.fullscreenEnabled) {
      document.exitFullscreen();
    }
  }
}

const pianoKey = document.querySelectorAll(".piano-key");

const letters = document.getElementById("btn-letters");
letters.addEventListener("click", letter);

const notes = document.getElementById("btn-notes");
notes.addEventListener("click", note);

function letter() {
  letters.classList.add("btn-active");
  notes.classList.remove("btn-active");

  pianoKey.forEach((element) => {
    element.classList.add("piano-key-letter");
  });
}

function note() {
  notes.classList.add("btn-active");
  letters.classList.remove("btn-active");
  pianoKey.forEach((element) => {
    element.classList.remove("piano-key-letter");
  });
}

function playSoundKeyboard(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const piano__key = document.querySelector(
  `.piano-key[data-key="${e.keyCode}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  piano__key.classList.add("piano-key-active");
  }
  function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("piano-key-active");
  }
  const piano__keys = document.querySelectorAll(".piano-key");
  piano__keys.forEach((piano__key) =>
  piano__key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSoundKeyboard);
