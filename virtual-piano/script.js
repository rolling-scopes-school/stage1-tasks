const KEY_CODES = {
  68: "D",
  70: "F",
  71: "G",
  72: "H",
  74: "J",
  75: "K",
  76: "L",
  82: "R",
  84: "T",
  85: "U",
  73: "I",
  79: "O"
};


window.addEventListener('keydown', function(e) {
  if (!(e.keyCode in KEY_CODES))
    return;
  playSound(KEY_CODES[e.keyCode]);
});


function playSound(keyId) {
  const audio = document.querySelector(`audio[data-letter="${keyId}"]`);
  const key = document.querySelector(`.piano-key[data-letter="${keyId}"]`);

	if (!audio)
		return;
	audio.currentTime = 0;
  audio.play();
  key.classList.add('piano-key-active');
}


function removeTransition(e) {
  this.classList.remove('piano-key-active');
}

function onMouseOver(e) {
  if (e.buttons !== 1)
    return;
  const keyId = this.getAttribute("data-letter");
  playSound(keyId);
}

const keyDivs = document.getElementsByClassName("piano-key");

const playSoundFromClick = function(e) {
  const keyId = this.getAttribute("data-letter");

  playSound(keyId);
};

for (var i = 0; i < keyDivs.length; i++) {
  keyDivs[i].addEventListener('mousedown', playSoundFromClick);
  keyDivs[i].addEventListener('transitionend', removeTransition);
  keyDivs[i].addEventListener('mouseover', onMouseOver);
}

// fullscreen

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

const fullScreenButton = document.querySelector(".fullscreen");
fullScreenButton.addEventListener("mousedown", toggleFullScreen);

//Letters

const letterButton = document.querySelector(".btn-letters");
const notesButton = document.querySelector(".btn-notes");

letterButton.addEventListener( "click", () => {
  for (var i = 0; i < keyDivs.length; i++) {
    if (!keyDivs[i].classList.contains("piano-key-letter")) {
      keyDivs[i].classList.add("piano-key-letter");
    }
  }
});

notesButton.addEventListener( "click", () => {
  for (var i = 0; i < keyDivs.length; i++) {
    if (keyDivs[i].classList.contains("piano-key-letter")) {
      keyDivs[i].classList.remove("piano-key-letter");
    }
  }
});

function switchLetters() {
  letterButton.classList.add('btn-active');
  notesButton.classList.remove('btn-active');
}

function switchNotes() {
  letterButton.classList.remove('btn-active');
  notesButton.classList.add('btn-active');
}

letterButton.addEventListener("mousedown", switchLetters);
notesButton.addEventListener("mousedown", switchNotes);
