const KEY = document.querySelectorAll(".piano-key")
const PIANO = document.getElementById("piano")
const FULL = document.querySelector(".fullscreen")
const LETTERS = document.querySelector(".btn-container")
function playAudio(src) {
    const sound = new Audio();
    sound.src = src;
    sound.currentTime = 0;
    sound.play();
}
const startSound = (event) => {
    event.target.classList.add("piano-key-active")
    const note = event.target.dataset.note;
    const src = `./assets/audio/${note}.mp3`;
    playAudio(src);
}
const stopSound = (event) => {
    event.target.classList.remove("piano-key-active")
}

const startCorrespondOver = (event) =>{
    const note = event.target.dataset.note;
    const src = `./assets/audio/${note}.mp3`;
    playAudio(src);
    event.target.classList.add("piano-key-active")
    KEY.forEach((elem) => {
        elem.addEventListener("mouseover",startSound)
        elem.addEventListener("mouseout",stopSound)
    })
}
const stopCorrespondOver = (event) =>{
    KEY.forEach((elem) => {
        elem.classList.remove("piano-key-active")
        elem.removeEventListener("mouseover",startSound)
        elem.removeEventListener("mouseout",stopSound)
    })

}
PIANO.addEventListener("mousedown", startCorrespondOver)
PIANO.addEventListener("mouseup", stopCorrespondOver)


window.addEventListener('keydown', (event) => {
    const code = event.code[3];
    const sound = document.querySelector('div.piano-key[data-letter="' + code + '"]');
    if (!sound) return;
    if (event.repeat == false) {
        sound.classList.add('piano-key-active');
        const note = sound.dataset.note;
        console.log(note)
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
    }
});
window.addEventListener('keyup', (event) => {
    const code = event.code[3];
    const audio = document.querySelector('div.piano-key[data-letter="' + code + '"]');
    if (!audio) return;
    if (event.repeat == false) {
        audio.classList.remove('piano-key-active');
        const note = audio.dataset.note;
        console.log(note)
        const src = `./assets/audio/${note}.mp3`;
    }
});


FULL.addEventListener('click', (event) => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
LETTERS.addEventListener("click", (event) => {
    if(!event.target.classList.contains("btn-active")){
        if(!event.target.classList.contains("btn")){
            return 0;
        }
        LETTERS.querySelector(".btn-active").classList.remove("btn-active")
        event.target.classList.add("btn-active")
        if(event.target.classList.contains("btn-letters"))
        {
            KEY.forEach((elem)=>{elem.classList.add("piano-key-letter")})
        }
        else
        {
            KEY.forEach((elem)=>{elem.classList.remove("piano-key-letter")})
        }
    }
})