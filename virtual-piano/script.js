function playAudio(key) {
  //const key = e.target;
  const note = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  note.play();
}

window.addEventListener("keydown", (event) => {
  const pianoKey = document.querySelector(
    `.piano-key[data-letter="${event.code[event.code.length - 1]}"]`
  );
  if (!pianoKey) return;
  pianoKey.classList.add("piano-key-active");
  playAudio(pianoKey);
});

window.addEventListener("keyup", (event) => {
  const pianoKey = document.querySelector(
    `.piano-key[data-letter="${event.code[event.code.length - 1]}"]`
  );
  if (!pianoKey) return;
  pianoKey.classList.remove("piano-key-active");
});

const piano = document.querySelector(".piano");

piano.addEventListener("click", (e) => {
  if (e.target.classList.contains("piano-key")) {
    e.target.classList.add("piano-key-active");
    playAudio(e.target);
    setTimeout(() => {
      e.target.classList.remove("piano-key-active");
    }, 500);
  }
});

let playPiano = false;

piano.addEventListener("mousedown", (e) => {
  if (e.which == 1) playPiano = true;
});

piano.addEventListener("mouseup", (e) => {
  if (e.which == 1) playPiano = false;
});

piano.addEventListener("mousemove", (e) => {
  if (e.target.classList.contains("piano-key") && playPiano) {
    e.target.classList.add("piano-key-active");
    playAudio(e.target);
    setTimeout(() => {
      e.target.classList.remove("piano-key-active");
    }, 500);
  }
});

const btns = document.querySelectorAll(".btn");
const pianoKeys = document.querySelectorAll(".piano-key");

function clickBtn(e) {
  btns.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
  if (e.target.classList.contains("btn-notes")) {
    pianoKeys.forEach((pk) => {
      if (pk.classList.contains("piano-key-letter"))
        pk.classList.remove("piano-key-letter");
    });
  } else if (e.target.classList.contains("btn-letters")) {
    pianoKeys.forEach((pk) => {
      pk.classList.add("piano-key-letter");
    });
  }
  e.target.classList.add("btn-active");
}

const btnContainer = document.querySelector(".btn-container");
btnContainer.addEventListener("click", clickBtn);

function activateFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen(); // W3C spec
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(); // Firefox
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(); // Safari
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(); // IE/Edge
  }
}

function deactivateFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function fullscreenClick(e) {
  if (e.target.classList.contains("openfullscreen")) {
    activateFullscreen(document.documentElement);
    e.target.classList.remove("openfullscreen");
  } else {
    deactivateFullscreen();
    e.target.classList.add("openfullscreen");
  }
}

const fullscreenBtn = document.querySelector(".fullscreen");
fullscreenBtn.addEventListener("click", fullscreenClick);

