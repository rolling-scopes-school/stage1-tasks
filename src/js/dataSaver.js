import Weather from './Weather'

let isLoaded = false
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

let langInApp = null

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
    Weather.langInApp = langInApp
    Weather.getWeather(document.querySelector("input.city").value, langInApp)

    isLoaded = true
}