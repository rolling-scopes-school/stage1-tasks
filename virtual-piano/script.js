function playAudio(src) {
    let audio = new Audio()
    audio.src = src
    audio.currentTime = 0
    audio.play()
}
const piano = document.querySelectorAll('.piano-key')


piano.forEach(el => {
    el.addEventListener('click', () => playAudio(`assets/audio/${el.dataset.note}.mp3`))
})


function turnLabels() {
    if (!event.target.classList.contains('btn-active')) {
        document.querySelectorAll('.btn').forEach(e => e.classList.toggle("btn-active"))
        piano.forEach(el => el.classList.toggle("piano-key-letter"))
    }
}
document.querySelectorAll(".btn-container").forEach(button => button.addEventListener("click", function () {
    turnLabels(this);
}));


function fullScreenMod() {
    let element = document.documentElement;
    element.requestFullscreen =
        element.requestFullscreen ||
        element.mozRequestFullscreen ||
        element.msRequestFullscreen ||
        element.webkitRequestFullscreen;

    if (!document.fullscreenElement) {
        element.requestFullscreen()

    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.querySelector('.fullscreen').addEventListener("click", () => fullScreenMod())


