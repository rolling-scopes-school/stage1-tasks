export {setApp}




let setButton = document.querySelector('.settings__button')
let settings = document.querySelector('.settings')
let close = document.querySelector('.close')

// let deleteBlock = document.querySelectorAll('.delete')
// let selectDel = document.querySelector('.select-del')
// let time = document.querySelector('.time')
// let date = document.querySelector('.date')
// let greeting = document.querySelector('.greeting-container')
// let weather = document.querySelector('.weather')
// let player = document.querySelector('.player')
// let quotes = document.querySelector('footer')
// let blocks = [time, date, greeting, weather, player, quotes, ]

// function delBlock() {
//  selectDel.onchange = () => {
//     for (let i = 0; i < deleteBlock.length; i++) {
//         console.log(selectDel.value)
//     }
//  }
// }
// delBlock()
function setApp() {
    settings.style.visibility = localStorage.getItem('set')
    setButton.onclick = () => {
        settings.style.visibility = 'visible'
        localStorage.setItem('set', 'visible')
     }
    close.onclick = () => {
        settings.style.visibility = 'hidden'
        localStorage.setItem('set', 'hidden')
    }
}

setApp()
