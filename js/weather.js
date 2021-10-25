import { language } from "./switchLang.js";
export {getWeather}
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
let city = document.querySelector('.city')
let l = language()
let noCity
let enterCity
window.onload = function() {
  getWeather()
};
if (localStorage.getItem('city') == '') {
    if (l == 'ru') {
      city.value = 'Минск'
      noCity = 'Похоже, такого места нет'
      enterCity = 'Введите город выше'
    }
    if (l == 'be') {
      city.value = 'Минск'
      noCity = 'Падобна на тое, такога месца няма'
      enterCity = 'Увядзіце горад вышэй'
    }
    if (l == 'en') {
      city.value = 'Minsk'
      noCity = `It seems like this city doesn't exist`
      enterCity = 'Enter the city above'
    }
}
else {
    city.value = localStorage.getItem('city')
}


  // let lang = language()
  // console.log(lang)

//   let en = document.querySelector('.en')
// let ru = document.querySelector('.ru')
// let be = document.querySelector('.bl')




// let obj = {
//   language: localStorage.getItem('lang')
// }

// localStorage.setItem('lang', 'en')

//      en.onclick = () => {
//        localStorage.setItem('lang', 'en')
//        location.reload()
//      }
//      ru.onclick = () => {
//       localStorage.setItem('lang', 'ru')
//       location.reload()
//     }
//     be.onclick = () => {
//       localStorage.setItem('lang', 'be')
//       location.reload()
//     }

console.log(111111111, localStorage.getItem('lang'))

let lang
if (localStorage.getItem('lang') == null) {
    lang = 'en'
}
else {
  lang = language()
}

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=0854c30f1d1333de1d391b6482784866&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(res.status)
    if (res.status == 200) {
      weatherIcon.style.display = 'block'
      temperature.style.display = 'block'
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.innerHTML = `${data.main.temp}°C`;
      weatherDescription.innerHTML = data.weather[0].description;
    }
    // if (city.value == '') {
    //   weatherIcon.style.display = 'none'
    //   temperature.style.display = 'none'
    //   weatherDescription.innerHTML = `Enter any city above`;
    // }
    else {
      weatherIcon.style.display = 'none'
      temperature.style.display = 'none'
      weatherDescription.innerHTML = noCity;
    if (city.value == '') {
      weatherDescription.innerHTML = enterCity;
    }
    }


        
    //  else {
    //     city.addEventListener('change', () => {
    //         console.log(1)
    //         weatherIcon.classList.remove(`owf-${data.weather[0].id}`);
    //         temperature.textContent = ``;
    //         weatherDescription.textContent = '';   
    //         document.querySelector('.weather-error').innerHTML = `City not found`
    //         console.log(temperature.textContent)
    //     })
    // } 
    
  }
city.addEventListener('input', () => {
    localStorage.setItem('city', city.value)
    console.log(localStorage.getItem('city'))
      getWeather()
})