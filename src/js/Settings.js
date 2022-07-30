import getLang, { getSettingsParams, setSettingsParams } from './dataSaver'
import i18next from './i18nextRes';

export default class Settings {

    constructor() {
        document.querySelector('.settings').onclick = () => {
            document.querySelector('.pop-up').classList.remove('display-none')
        }
        document.querySelector('.pop-up-back').onclick = () => {
            document.querySelector('.pop-up').classList.add('display-none')
        }

        this.sTittle = document.querySelector('.settings-title-up')
        this.sTittleVisBlocks = document.querySelector('.visible-blocks')
        this.sLangTitle = document.querySelector('.lang-tittle')
        this.sLangSetted = document.querySelector('.lang-seted')
        this.sImgTittle = document.querySelector('.img-tittle')
        this.sImgSetted = document.querySelector('.img-seted')
        this.sTagTitle = document.querySelector('.tag-tittle')
        this.sTagSettd = document.querySelector('.tag-seted')
        this.sTimeTitle = document.querySelector('.b-time-tittle')
        this.sTimeSettd = document.querySelector('.b-time-seted')
        this.sDateTitle = document.querySelector('.b-date-tittle')
        this.sDateSettd = document.querySelector('.b-date-seted')
        this.sHelloTitle = document.querySelector('.b-hello-tittle')
        this.sHelloSettd = document.querySelector('.b-hello-seted')
        this.sQuoteTitle = document.querySelector('.b-quote-tittle')
        this.sQuoteSettd = document.querySelector('.b-quote-seted')
        this.sWeatherTitle = document.querySelector('.b-weather-tittle')
        this.sWeatherSettd = document.querySelector('.b-weather-seted')
        this.sPlayerTitle = document.querySelector('.b-player-tittle')
        this.sPlayerSettd = document.querySelector('.b-player-seted')
        this.sTodoTitle = document.querySelector('.b-todo-tittle')
        this.sTodoSettd = document.querySelector('.b-todo-seted')
        this.sLinkTitle = document.querySelector('.b-link-tittle')
        this.sLinkSettd = document.querySelector('.b-link-seted')
        this.sContactTitle = document.querySelector('.b-contact-tittle')
        this.sContactSettd = document.querySelector('.b-contact-seted')

        this.setFieldsByLang()
        this.setOnClicks()
        this.updateVisuability()
    }

    setFieldsByLang() {
        this.params = getSettingsParams()

        this.sTittle.textContent = i18next[getLang()].settingsTitle
        this.sTittleVisBlocks.textContent = i18next[getLang()].visibleBlocks

        this.sLangTitle.textContent = i18next[getLang()].langTitle
        this.sImgTittle.textContent = i18next[getLang()].imgSourceTitle
        this.sTagSettd.placeholder = i18next[getLang()].tagPlaceholder
        this.sTimeTitle.textContent = i18next[getLang()].showTime
        this.sDateTitle.textContent = i18next[getLang()].showDate
        this.sHelloTitle.textContent = i18next[getLang()].showGreetings
        this.sQuoteTitle.textContent = i18next[getLang()].showQuote
        this.sWeatherTitle.textContent = i18next[getLang()].showWeather
        this.sPlayerTitle.textContent = i18next[getLang()].showPlayer
        this.sTodoTitle.textContent = i18next[getLang()].showTodo
        this.sLinkTitle.textContent = i18next[getLang()].showLink
        this.sContactTitle.textContent = i18next[getLang()].showContact

        this.sLangSetted.textContent = i18next[getLang()].lang[this.params.lang]
        this.sImgSetted.textContent = i18next[getLang()].imgSource[this.params.imgSource]
        if (this.params.imgSource == 0) {
            this.sTagSettd.classList.add('display-none')
        } else {
            this.sTagSettd.classList.remove('display-none') 
        }
        this.sTagSettd.value = this.params.tag

        this.setVisability(this.sTimeSettd, this.params.isShow.time)
        this.setVisability(this.sDateSettd, this.params.isShow.date)
        this.setVisability(this.sHelloSettd, this.params.isShow.greetings)
        this.setVisability(this.sQuoteSettd, this.params.isShow.quote)
        this.setVisability(this.sWeatherSettd, this.params.isShow.weather)
        this.setVisability(this.sPlayerSettd, this.params.isShow.player)
        this.setVisability(this.sTodoSettd, this.params.isShow.todo)
        this.setVisability(this.sLinkSettd, this.params.isShow.link)
        this.setVisability(this.sContactSettd, this.params.isShow.contact)
    }

    setVisability(node, isVisible) {
        node.textContent = isVisible == true ? i18next[getLang()].isShow : i18next[getLang()].isHide
        isVisible == true ? node.classList.remove('is-hide') : node.classList.add('is-hide')
    }

    setOnClicks() {
        //save lang
        this.sLangSetted.onclick = () => {
            if(this.params.lang == 'en') {
                this.params.lang = 'ru'
            } else {
                this.params.lang = 'en'
            }
            setSettingsParams(this.params)
            window.location.reload()
        }
        //save img source
        this.sImgSetted.onclick = () => {
            this.params.imgSource < 2 ? this.params.imgSource++ : this.params.imgSource = 0
            if (this.params.imgSource == 0) {
                this.sTagSettd.classList.add('display-none')
            } else {
                this.sTagSettd.classList.remove('display-none') 
            }
            setSettingsParams(this.params)
            this.sImgSetted.textContent = i18next[getLang()].imgSource[this.params.imgSource]
        }
        //save tag
        this.sTagSettd.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.params.tag = this.sTagSettd.value
                setSettingsParams(this.params)
            }
        });
        //visability
        this.sTimeSettd.onclick = () => {
            this.params.isShow.time = !this.params.isShow.time
            this.setVisability(this.sTimeSettd, this.params.isShow.time)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sDateSettd.onclick = () => {
            this.params.isShow.date = !this.params.isShow.date
            this.setVisability(this.sDateSettd, this.params.isShow.date)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sHelloSettd.onclick = () => {
            this.params.isShow.greetings = !this.params.isShow.greetings
            this.setVisability(this.sHelloSettd, this.params.isShow.greetings)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sQuoteSettd.onclick = () => {
            this.params.isShow.quote = !this.params.isShow.quote
            this.setVisability(this.sQuoteSettd, this.params.isShow.quote)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sWeatherSettd.onclick = () => {
            this.params.isShow.weather = !this.params.isShow.weather
            this.setVisability(this.sWeatherSettd, this.params.isShow.weather)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sPlayerSettd.onclick = () => {
            this.params.isShow.player = !this.params.isShow.player
            this.setVisability(this.sPlayerSettd, this.params.isShow.player)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sTodoSettd.onclick = () => {
            this.params.isShow.todo = !this.params.isShow.todo
            this.setVisability(this.sTodoSettd, this.params.isShow.todo)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sLinkSettd.onclick = () => {
            this.params.isShow.link = !this.params.isShow.link
            this.setVisability(this.sLinkSettd, this.params.isShow.link)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
        this.sContactSettd.onclick = () => {
            this.params.isShow.contact = !this.params.isShow.contact
            this.setVisability(this.sContactSettd, this.params.isShow.contact)
            setSettingsParams(this.params)
            this.updateVisuability()
        }
    }

    updateVisuability() {
        if(this.params.isShow.time) {
            document.querySelector('.time').classList.remove('transperent-block') 
        } else {
            document.querySelector('.time').classList.add('transperent-block') 
        }

        if(this.params.isShow.date) {
            document.querySelector('.date').classList.remove('transperent-block') 
        } else {
            document.querySelector('.date').classList.add('transperent-block') 
        }

        if(this.params.isShow.greetings) {
            document.querySelector('.greeting-container').classList.remove('transperent-block') 
        } else {
            document.querySelector('.greeting-container').classList.add('transperent-block') 
        }

        if(this.params.isShow.quote) {
            document.querySelector('.change-quote').classList.remove('transperent-block')
            document.querySelector('.quote').classList.remove('transperent-block')
            document.querySelector('.author').classList.remove('transperent-block')
        } else {
            document.querySelector('.change-quote').classList.add('transperent-block')
            document.querySelector('.quote').classList.add('transperent-block')
            document.querySelector('.author').classList.add('transperent-block')
        }

        if(this.params.isShow.weather) {
            document.querySelector('.weather').classList.remove('transperent-block') 
        } else {
            document.querySelector('.weather').classList.add('transperent-block') 
        }

        if(this.params.isShow.player) {
            document.querySelector('.player').classList.remove('transperent-block') 
        } else {
            document.querySelector('.player').classList.add('transperent-block') 
        }
    }
}