import Weather from './Weather'
import QOfDay from './QOfDay'


let isLoaded = false
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

function setLocalStorage() {
    if (isLoaded) {
        window.localStorage.setItem('userName', document.querySelector("input.name").value)
        window.localStorage.setItem('city', document.querySelector("input.city").value)
        window.localStorage.setItem('langInApp', SettingsData.langInApp)
        window.localStorage.setItem('vol', document.querySelector('audio').volume)
    }
}

export default function getLang() {
    let langRes = window.localStorage.getItem('langInApp')
    SettingsData.langInApp = langRes ? langRes : 'en'
    return SettingsData.langInApp
}

function getLocalStorage() {
    let nameIn = document.querySelector("input.name")
    if(window.localStorage.getItem('userName') != undefined) {
        nameIn.value = window.localStorage.getItem('userName')
    }
    nameIn.placeholder="[Enter name]"

    let city = window.localStorage.getItem('city')
    if (city) {
        document.querySelector("input.city").value = city
    } else {
        document.querySelector("input.city").value = 'Minsk'
    }

    let langRes = window.localStorage.getItem('langInApp')
    SettingsData.langInApp = langRes ? langRes : 'en'
    
    Weather.langInApp = SettingsData.langInApp
    Weather.getWeather(document.querySelector("input.city").value, SettingsData.langInApp)

    QOfDay.lang = SettingsData.langInApp

    //Volume
    let vol = window.localStorage.getItem('vol')
    vol = vol ? vol : 1
    let audio = document.querySelector('audio')
    audio.volume = vol
    let pos = Math.trunc(vol * 100)
    document.querySelector('.vol-line').style.setProperty('width', pos + '%');
    console.log (vol)
    console.log(audio.volume)
    if(audio.volume == 0) { 
        document.querySelector('.vol-mute').classList.add('mute-icon')
    }

    isLoaded = true
}

export class SettingsData {
    static langInApp = 'qw'
}