function playAudio(src) {
    let audio = new Audio()
    audio.src = src
    audio.currentTime = 0
    audio.play()
}
const button = document.querySelectorAll('button')
console.log(button)
button.forEach(el => {
    switch (el.innerHTML) {
        case "Play DO":
            el.addEventListener('click', () => playAudio('media/c.mp3'))
            break
        case "Play RE":
            el.addEventListener('click', () => playAudio('media/d.mp3'))
            break
        case "Play MI":
            el.addEventListener('click', () => playAudio('media/e.mp3'))
            break
        case "Play FA":
            el.addEventListener('click', () => playAudio('media/f.mp3'))
            break
        case "Play SOL":
            el.addEventListener('click', () => playAudio('media/g.mp3'))
            break
        case "Play LA":
            el.addEventListener('click', () => playAudio('media/a.mp3'))
            break
        case "Play SI":
            el.addEventListener('click', () => playAudio('media/b.mp3'))
            break
        case "Play DO#":
            el.addEventListener('click', () => playAudio('media/c-sh.mp3'))
            break
        case "Play RE#":
            el.addEventListener('click', () => playAudio('media/d-sh.mp3'))
            break
        case "Play FA#":
            el.addEventListener('click', () => playAudio('media/f-sh.mp3'))
            break
        case "Play SOL#":
            el.addEventListener('click', () => playAudio('media/g-sh.mp3'))
            break
        case "Play LA#":
            el.addEventListener('click', () => playAudio('media/a-sh.mp3'))
            break
        default:
            break
    }
})
