import files from '../assets/sounds.json'

export default class AudioPlayer {

    constructor(){
        this.audio = document.querySelector('audio');
        this.isPlay = false;
        this.currentFileNum = -1;

        this.playBtn = document.querySelector('button.play')
        this.playPrevBtn = document.querySelector('button.play-prev')
        this.playNextBtn = document.querySelector('button.play-next')
        this.timeline = document.querySelector('.all-time-line')

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
            this.playPrev()
        }

        //timeline
        this.timesetter = document.querySelector('.time-line')
        this.timesetter.addEventListener("click", e => {
            const timelineWidth = window.getComputedStyle(this.timesetter).width;
            const timeToSeek = e.offsetX / parseInt(timelineWidth) * this.audio.duration;
            this.audio.currentTime = timeToSeek;
            this.renewTimeline()
          }, false);
        
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
                this.currentFileNum = num
                this.resetPosition()
                this.playAudio(num)
            }
            this.playList.append(li)
        }
        this.renewVol()

        //vol
        this.wasVol = 1.0

        this.volControl = document.querySelector('.vol-line-block')
        this.volControl.addEventListener("click", e => {
            const volWidth = window.getComputedStyle(this.volControl).width;
            const newVol = (e.offsetX) / parseInt(volWidth) * 1;
            this.setVol(newVol <= 0.1 ? 0 : newVol >= 0.9 ? 1 : newVol)
        }, false);

        this.volButton = document.querySelector('.vol-mute')
        this.volButton.onclick = () => {
            if(this.audio.volume != 0) {
                this.wasVol = this.audio.volume
                this.setVol(0.0)
                console.log(this.wasVol, ' -> ', this.audio.volume)
            } else {
                console.log(this.audio.volume, ' -> ', this.wasVol)
                this.setVol(this.wasVol)
            }
        }
    }

    resetPosition() {
        this.audio.src = `assets/sounds/src/assets/sounds/${files[this.currentFileNum].filename}`
        this.audio.currentTime = 0
        this.renewTimeline()
        for(let file of this.playList.childNodes) { file.classList.remove('item-active') }
        this.playList.childNodes[this.currentFileNum].classList.add('item-active')
        if (this.isPlay) { this.playAudio(this.currentFileNum) }
    }

    playNext() {
        if (this.currentFileNum < files.length - 1) { 
            this.currentFileNum++
        } else { 
            this.currentFileNum = 0
        }
        this.resetPosition()
    }

    playPrev() {
        if (this.currentFileNum > 0) {
            this.currentFileNum-- 
        } else { 
            this.currentFileNum = files.length - 1
        }
        this.resetPosition()
    }

    playAudio(n) {
        let currentTime = this.audio.currentTime
        if (n == -1) this.audio.src = `assets/sounds/src/assets/sounds/${files[0].filename}`
        n = n != -1 ? n : 0
        this.audio.currentTime = currentTime
        this.audio.play()
        this.isPlay = true
        this.playBtn.classList.add('pause');
        for(let file of this.playList.childNodes) { file.classList.remove('item-active') }
        this.playList.childNodes[n].classList.add('item-active')
        this.currentFileNum = n
        this.renewTimeline()
        console.log(this.audio.volume)
    }
    pauseAudio() {
        this.audio.pause()
        this.isPlay = false
        this.playBtn.classList.remove('pause');
    }

    async renewTimeline() {
        setTimeout(()=>{
            let pos = Math.trunc(this.audio.currentTime / this.audio.duration * 100)
            document.querySelector('.all-time-line').style.setProperty('width', pos + '%');
            if (this.isPlay) { this.renewTimeline() }
        } ,500)
    }


    //vol
    setVol(vol) {
        this.audio.volume = vol
        if(vol == 0.0) {
            this.volButton.classList.add('mute-icon')
        } else {
            this.volButton.classList.remove('mute-icon')
        }
        this.renewVol()
    }


    renewVol() {
        let pos = Math.trunc(this.audio.volume * 100)
        document.querySelector('.vol-line').style.setProperty('width', pos + '%');
    }
}