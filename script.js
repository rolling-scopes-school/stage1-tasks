const FULLSCREEN = document.getElementById("fullscreen");
FULLSCREEN.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

const PIANO = document.querySelector(".piano");
PIANO.addEventListener("click", (event) => {
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
}});