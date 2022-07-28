import files from '../assets/sounds.json'

export default class AudioPlayer {

    constructor(){
        this.audio = document.querySelector('audio');
        this.isPlay = false;
        this.currentFileNum = 0;

        this.playBtn = document.querySelector('button.play')
        this.playPrevBtn = document.querySelector('button.play-prev')
        this.playNextBtn = document.querySelector('button.play-next')

        this.playBtn.onclick = () => {
            if(this.isPlay) { 
                this.pauseAudio() 
            } else {
                this.playAudio(this.currentFileNum);
            }
        }

        this.playNextBtn.onclick = () => { 
            this.playNext()
        }
        this.playPrevBtn.onclick = () => { 
            if (this.currentFileNum > 0) { 
                this.currentFileNum-- 
            } else { 
                this.currentFileNum = files.length - 1
            }
            if (this.isPlay) { this.playAudio(this.currentFileNum) }
        }
        //TODO: 
        this.audio.onended = () => { this.playNext() }

        //playlist
        this.playList = document.querySelector(".play-list")
        let liList = []
        for(let file of files) {
            let li = document.createElement('li');
            li.classList.add('play-item')
            li.textContent = file.name
            let num = files.indexOf(file)
            li.onclick = () => {
                this.playAudio(num)
            }
            this.playList.append(li)
        }
    }

    playNext() {
        if (this.currentFileNum < files.length - 1) { 
            this.currentFileNum++
        } else { 
            this.currentFileNum = 0
        }
        if (this.isPlay) { this.playAudio(this.currentFileNum) }
    }

    playAudio(n) {
        n = n ? n : 0
        this.audio.src = `assets/sounds/src/assets/sounds/${files[n].filename}`
        this.audio.currentTime = 0
        this.audio.play()
        this.isPlay = true
        this.playBtn.classList.add('pause');
        for(let file of this.playList.childNodes) { file.classList.remove('item-active') }
        this.playList.childNodes[n].classList.add('item-active')
        this.currentFileNum = n
    }
    pauseAudio() {
        this.audio.pause()
        this.isPlay = false
        this.playBtn.classList.remove('pause');
    }
}