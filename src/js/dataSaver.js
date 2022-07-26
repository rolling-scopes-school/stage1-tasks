import Weather from './Weather'

var langInApp = null

let isLoaded = false
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

function setLocalStorage() {
    if (isLoaded) {
        window.localStorage.setItem('userName', document.querySelector("input.name").value)
        window.localStorage.setItem('city', document.querySelector("input.city").value)
        window.localStorage.setItem('langInApp', langInApp)
    }
}

function getLocalStorage() {
    if(window.localStorage.getItem('userName') != undefined) {
        document.querySelector("input.name").value = window.localStorage.getItem('userName')
    }

    let city = window.localStorage.getItem('city')
    if (city) {
        document.querySelector("input.city").value = city
    } else {
        document.querySelector("input.city").value = 'Minsk'
    }

    let langRes = window.localStorage.getItem('langInApp')
    if (langRes) {
        langInApp = langRes
    } else {
        langInApp = 'en'
    }
    console.log("getLocalStorage langInApp = ", langInApp)
    Weather.langInApp = langInApp
    console.log("getLocalStorage Weather.langInApp = ", Weather.langInApp)
    Weather.getWeather(document.querySelector("input.city").value, langInApp)

    isLoaded = true
}