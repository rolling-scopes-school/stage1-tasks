// const audio = document.querySelector('audio');
const full = document.querySelector(".fullscreen");
const btnNotes = document.querySelector(".btn-notes")
const btnLetters = document.querySelector(".btn-letters")
const buttonContainer = document.querySelector('.btn-container');
const piano = document.querySelector('.piano');
let pianoKeys = document.querySelectorAll('.piano-key');

window.addEventListener("keydown", function(e) {
    if (e.repeat) return;
    const audio = document.querySelector(
        'audio[data-letter="' + e.code.slice(3, 4) + '"]'
    );
    const key = document.querySelector(
        '.piano-key[data-letter="' + e.code.slice(3, 4) + '"]'
    );
    if (!audio || !key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("piano-key-active");
});


window.addEventListener("keyup", function(e) {
    if (!/^Key[A-Z]$/.test(e.code)) return;
    const key = document.querySelector(
        '.piano-key[data-letter="' + e.code.slice(3, 4) + '"]'
    );
    if (!key) return;
    key.classList.remove("piano-key-active");
});



piano.addEventListener('mousedown', (event) => {
    const note = event.target.dataset.note;
    var src = `assets/audio/${note}.mp3`;

    playAudio(src);

    if (event.target.classList.contains('piano-key')) {
        pianoKeys.forEach((el) => {
            if (el.classList.contains('piano-key-active')) {
                el.classList.remove('piano-key-active');
            }

        });
        event.target.classList.add('piano-key-active');

    }


});



piano.onmouseup = function(e) {
    e.target.classList.remove('piano-key-active');
};
piano.onmouseout = function(e) {
    e.target.classList.remove('piano-key-active');
};

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}






buttonContainer.addEventListener('click', (e) => {

    if (e.target.classList.contains('btn-notes')) {
        btnLetters.classList.remove('btn-active');
        e.target.classList.add('btn-active');
        pianoKeys.forEach((el) => {
            el.classList.remove('letter');
            el.classList.add('note');

        })

    } else {
        btnNotes.classList.remove('btn-active');
        pianoKeys.forEach((el) => {
            el.classList.remove('note');
            el.classList.add('letter');

        })
        e.target.classList.add('btn-active');

    }
});




//toggle fullscreen implementation

full.addEventListener('click', (e) => {
    toggleFullScreen();
})

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};