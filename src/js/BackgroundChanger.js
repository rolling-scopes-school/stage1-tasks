import TimeDateAndHello from './TimeDateAndHello'

export default class BackgroundChanger {

    static currentNum = 0
    static firstIn = true
    static isChangingNow = false
    static timeout = null

    constructor() {
        document.querySelector('.slide-next').onclick = BackgroundChanger.getSlideNext
        document.querySelector('.slide-prev').onclick = BackgroundChanger.getSlidePrev
    }

    static getSlideNext() {
        if (BackgroundChanger.isChangingNow) return
        BackgroundChanger.isChangingNow = true
        if(BackgroundChanger.timeout) clearTimeout(BackgroundChanger.timeout)
        
        if (BackgroundChanger.firstIn) {
            BackgroundChanger.currentNum = Math.trunc( Math.random() * 19 + 1 )
            BackgroundChanger.firstIn = false
        } else {
            if (BackgroundChanger.currentNum > 19) { 
                BackgroundChanger.currentNum = 1 
            } else { 
                BackgroundChanger.currentNum++ 
            }
        }
        BackgroundChanger.setBg(BackgroundChanger.currentNum)
    }

    static getSlidePrev() {
        if (BackgroundChanger.isChangingNow) return
        BackgroundChanger.isChangingNow = true
        if(BackgroundChanger.timeout) clearTimeout(BackgroundChanger.timeout)

        if (BackgroundChanger.firstIn) {
            BackgroundChanger.currentNum = Math.trunc( Math.random() * 19 + 1 )
            BackgroundChanger.firstIn = false
        } else {
            if (BackgroundChanger.currentNum <= 1) { 
                BackgroundChanger.currentNum = 20 
            }
            else { 
                BackgroundChanger.currentNum-- 
            }
        }
        BackgroundChanger.setBg(BackgroundChanger.currentNum)
    }

    static setBg(num) {  
        let picNum = BackgroundChanger.getFileName( num )
        const img = new Image()
        img.src = "https://raw.githubusercontent.com/jerubrin/stage1-tasks/assets/images/"+
                  TimeDateAndHello.getTimeOfDay() +
                  "/" +
                  picNum +
                  ".jpg"
        img.onload = () => {
            document.body.style.backgroundImage = "url(" + img.src + ")"
            setTimeout(() => {
                BackgroundChanger.isChangingNow = false
            }, 1050 )
        }
        BackgroundChanger.timeout = setTimeout(() => {
            BackgroundChanger.isChangingNow = false
        }, 5000)
    }

    static getFileName(num) {
        return num > 9 ? "" + num : "0" + num
    }
}