import Weather from './Weather'
import i18next from './i18nextRes';

let isLoaded = false
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

function setLocalStorage() {
    if (isLoaded) {
        window.localStorage.setItem('userName', document.querySelector("input.name").value)
        if (document.querySelector("input.city").value != i18next['ru']['defCity'] &&
            document.querySelector("input.city").value != i18next['en']['defCity']) {
                window.localStorage.setItem('city', document.querySelector("input.city").value)
        }
        window.localStorage.setItem('vol', document.querySelector('audio').volume)
    }
}

function getLocalStorage() {
    let nameIn = document.querySelector("input.name")
    if(window.localStorage.getItem('userName')) {
        nameIn.value = window.localStorage.getItem('userName')
    }
    nameIn.placeholder=i18next[getLang()]["placeholder"]

    let city = window.localStorage.getItem('city')
    if (city) {
        document.querySelector("input.city").value = city
    } else {
        document.querySelector("input.city").value = i18next[getLang()]['defCity']
    }
    Weather.getWeather(document.querySelector('input.city').value)
    
    //Volume
    let vol = window.localStorage.getItem('vol')
    vol = vol ? vol : 1
    let audio = document.querySelector('audio')
    audio.volume = vol
    let pos = Math.trunc(vol * 100)
    document.querySelector('.vol-line').style.setProperty('width', pos + '%');
    if(audio.volume == 0) { 
        document.querySelector('.vol-mute').classList.add('mute-icon')
    }

    isLoaded = true
}

export function getSettingsParams() {
    return {
        lang: getLang(),
        imgSource: getImageSource(),
        tag: getTag(),
        isShow: {
            time: getTimeVis(),
            date: getDateVis(),
            greetings: getGreetingsVis(),
            quote: getQuoteVis(),
            weather: getWeatherVis(),
            player: getPlayerVis(),
            todo: getTodoVis(),
            link: getLinkVis(),
            contact: getContactVis()
        }
    }
}

export function setSettingsParams(params) {
    setLang(params.lang),
    setImageSource(params.imgSource),
    setTag(params.tag),
    setTimeVis(params.isShow.time),
    setDateVis(params.isShow.date),
    setGreetingsVis(params.isShow.greetings),
    setQuoteVis(params.isShow.quote),
    setWeatherVis(params.isShow.weather),
    setPlayerVis(params.isShow.player),
    setTodoVis(params.isShow.todo),
    setLinkVis(params.isShow.link),
    setContactVis(params.isShow.contact)
}

export default function getLang() {
    let langRes = window.localStorage.getItem('langInApp')
    return langRes ? langRes : navigator.language.substring(0, 2)
}
export function setLang(newLang) {
    window.localStorage.setItem('langInApp', newLang.toString())
}

function getImageSource() {
    return getByKey('img-source') ? getByKey('img-source') : 0
}
function setImageSource(value) {
    setByKey('img-source', value)
}

function getTag() {
    return getByKey('tag') ? getByKey('tag') : ''
}
function setTag(value) {
    setByKey('tag', value)
}

function getTimeVis() {
    let res = getByKey('vis-time')
    return res ? res == "true" : true
}
function setTimeVis(value) {
    setByKey('vis-time', value)
}

function getDateVis() {
    let res = getByKey('vis-date')
    return res ? res == "true" : true
}
function setDateVis(value) {
    setByKey('vis-date', value)
}

function getGreetingsVis() {
    return getByKey('vis-key') ? getByKey('vis-key') == "true" : true
}
function setGreetingsVis(value) {
    setByKey('vis-key', value)
}


function getQuoteVis() {
    return getByKey('vis-quote') ? getByKey('vis-quote') == "true" : true
}
function setQuoteVis(value) {
    setByKey('vis-quote', value)
}

function getWeatherVis() {
    return getByKey('vis-weather') ? getByKey('vis-weather') == "true" : true
}
function setWeatherVis(value) {
    setByKey('vis-weather', value)
}

function getPlayerVis() {
    return getByKey('vis-player') ? getByKey('vis-player') == "true" : true
}
function setPlayerVis(value) {
    setByKey('vis-player', value)
}

function getTodoVis() {
    return getByKey('vis-todo') ? getByKey('vis-todo') == "true" : false
}
function setTodoVis(value) {
    setByKey('vis-todo', value)
}

function getLinkVis() {
    return getByKey('vis-link') ? getByKey('vis-link') == "true" : false
}
function setLinkVis(value) {
    setByKey('vis-link', value)
}

function getContactVis() {
    return getByKey('vis-contact') ? getByKey('vis-contact') == "true" : false
}
function setContactVis(value) {
    setByKey('vis-contact', value)
}


function setByKey(key, val) {
    window.localStorage.setItem(key, val + '')
}
function getByKey(key) {
    return  window.localStorage.getItem(key)
}