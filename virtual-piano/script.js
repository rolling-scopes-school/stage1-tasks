function playAudio(src) {
    let audio = new Audio()
    audio.src = src
    audio.currentTime = 0
    audio.play()
}
const piano = document.querySelectorAll('.piano-key')
const notes = ["c", "d", 'e', 'f', 'g', 'a', 'b', 'c♯', 'd♯', '', 'f♯', 'g♯', 'a♯']
const keys = ['d', 'f', 'g', 'h', 'j', 'k', 'l', 'r', 't', 'y', 'u', 'i', 'o']



console.log(piano)
piano.forEach(el => {
    el.addEventListener(('mousedown'), () => {
        playAudio(`assets/audio/${el.dataset.note}.mp3`)
        console.log(el)
        el.classList.add('piano-key-active', 'piano-key-active-pseudo');
    })
})

piano.forEach(el => {
    el.addEventListener(('mouseup'), () => {
        el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    })
    
    el.addEventListener(('mouseout'), () => {
        el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    })
})


window.addEventListener("keydown", (el) => {
    let keyIndex = keys.indexOf(el.key)
    if (keyIndex != -1 && notes[keyIndex] != '') {
        playAudio(`assets/audio/${notes[keyIndex]}.mp3`)
        piano.item(keyIndex).classList.add('piano-key-active', 'piano-key-active-pseudo');
    }
})

window.addEventListener("keyup", (el) => {
    let keyIndex = keys.indexOf(el.key)
    if (keyIndex != -1 && notes[keyIndex] != '') {
        piano.item(keyIndex).classList.remove('piano-key-active', 'piano-key-active-pseudo');
    }
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
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen() 
    } 
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.querySelector('.fullscreen').addEventListener("click", () => fullScreenMod())

