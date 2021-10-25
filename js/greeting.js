export {greeting}

let date = new Date()
let hours = date.getHours()
let greet = document.querySelector('.greeting')
let nam = document.querySelector('.name')

function greeting() {
    if (hours >= 0 && hours < 6) {
        greet.innerHTML = 'Good night,'   
    }
    if (hours >= 6 && hours < 12) {
        greet.innerHTML = 'Good morning,'
    }
    if (hours >= 12 && hours < 18) {
        greet.innerHTML = 'Good afternoon,'   
    }
    if (hours >= 18 && hours < 24) {
        greet.innerHTML = 'Good evening,'   
    }
    nam.value = localStorage.getItem('name')
    nam.addEventListener('input', () => {
        localStorage.setItem('name', nam.value)
    })
}
greeting()
