import { language } from "./switchLang.js";
export {greeting}
let lan = language()
console.log(lan)
let date = new Date()
let hours = date.getHours()
let greet = document.querySelector('.greeting')
let nam = document.querySelector('.name')

function greeting() {
    if (hours >= 0 && hours < 6) {
        if (lan == 'ru') {
            greet.innerHTML = "Спокойной ночи,"
           }   
           if (lan == 'en') {
               console.log(lan)
               greet.innerHTML = "Good night,"
              }    
              if (lan == 'be') {
                console.log(lan)
                greet.innerHTML = "Добра нач,"
               } 
    }
    if (hours >= 6 && hours < 12) {
        if (lan == 'ru') {
            greet.innerHTML = "Добрый утро,"
           }   
           if (lan == 'en') {
               console.log(lan)
               greet.innerHTML = "Good morning,"
              }  
              if (lan == 'be') {
                console.log(lan)
                greet.innerHTML = "Добрай раніцы,"
               }
    }
    if (hours >= 12 && hours < 18) {
        if (lan == 'ru') {
            greet.innerHTML = "Добрый день,"
           }   
           if (lan == 'en') {
               console.log(lan)
               greet.innerHTML = "Good afternoon,"
              } 
              if (lan == 'be') {
                console.log(lan)
                greet.innerHTML = "Добры дзень,"
               }     
    }
    if (hours >= 18 && hours < 24) {
        if (lan == 'ru') {
         greet.innerHTML = "Добрый вечер,"
        }   
        if (lan == 'en') {
            console.log(lan)
            greet.innerHTML = "Good evening,"
           }  
           if (lan == 'be') {
            console.log(lan)
            greet.innerHTML = "Добры вечар,"
           }  
    }
    nam.value = localStorage.getItem('name')
    nam.addEventListener('input', () => {
        localStorage.setItem('name', nam.value)
    })
}
greeting()
