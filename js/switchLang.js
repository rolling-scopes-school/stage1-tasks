export {language}

let en = document.querySelector('.en')
let ru = document.querySelector('.ru')
let be = document.querySelector('.bl')

function language() {
    let obj = {
        language: localStorage.getItem('lang')
      }
      
      
      
           en.onclick = () => {
             localStorage.setItem('lang', 'en')
             location.reload()
           }
           ru.onclick = () => {
            localStorage.setItem('lang', 'ru')
            location.reload()
          }
          be.onclick = () => {
            localStorage.setItem('lang', 'be')
            location.reload()
          }

          return obj.language
}


