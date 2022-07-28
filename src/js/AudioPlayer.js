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
            this.playBtn.classList.toggle('pause');
            if(this.isPlay) {
                this.pauseAudio()
                this.isPlay = false;
            } else {
                this.playAudio(this.currentFileNum);
                this.isPlay = true;
            }   
        }

        this.playNextBtn.onclick = () => { 
            if (this.currentFileNum < files.length - 1) { 
                this.currentFileNum++ 
            } else { 
                this.currentFileNum = 0
            }
            if (this.isPlay) { this.playAudio(this.currentFileNum) }
        }
        this.playPrevBtn.onclick = () => { 
            if (this.currentFileNum > 0) { 
                this.currentFileNum-- 
            } else { 
                this.currentFileNum = files.length - 1
            }
            if (this.isPlay) { this.playAudio(this.currentFileNum) }
         }
    }

    playAudio(n) {
        n = n ? n : 0
        this.audio.src = `assets/sounds/src/assets/sounds/${files[n].filename}`
        this.audio.currentTime = 0;
        this.audio.play();
    }
    pauseAudio() {
        this.audio.pause();
    }
}