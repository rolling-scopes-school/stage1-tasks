export {pics}
let body = document.querySelector('body')
let date = new Date()
let hours = date.getHours()
let prev = document.querySelector('.slide-prev')
let next = document.querySelector('.slide-next')
let u = []


let picApi = document.querySelector('.api')
let picGit = document.querySelector('.git')
let picFl = document.querySelector('.flic')

let obj = {
    'api': api,
    'git': git,
    'flic': api
}

picApi.onclick = () => {
    localStorage.setItem('pics', 'api')
    location.reload()
    }
    picGit.onclick = () => {
    localStorage.setItem('pics', 'git')
    location.reload()
    }
    picFl.onclick = () => {
        localStorage.setItem('pics', 'api')
        location.reload()
        }

let s = localStorage.getItem('pics')
let pics = obj[s]

let whatPic = document.querySelector('.what-pic')
console.log(whatPic[0])
let picSelect


function selected() {
    for (let i = 0; i < whatPic.length; i++) {
        if (whatPic[i].innerHTML == localStorage.getItem('picType')) {
            whatPic[i].selected = true
        }
    }
}

selected()

if (s == 'api') {
    console.log(3333)
    whatPic.style.display = 'inline'
    console.log(whatPic.value)
    whatPic.onchange = () => {
        localStorage.setItem('picType', whatPic.value)
        console.log(whatPic.value)
        location.reload()
    }
}
if (localStorage.getItem('picType') !== null) {
    picSelect = localStorage.getItem('picType')
    if (picSelect == 'daytime') {
        picSelect = time()
    }
}
function time() {
    let dayTime
    if (hours >= 6 && hours < 12) {
        dayTime = 'morning'
    }
    if (hours >= 12 && hours < 18) {
        dayTime = 'afternoon'   
    }
    if (hours >= 18 && hours < 24) {
        dayTime = 'evening'   
    }
    if (hours >= 0 && hours < 6) {
        dayTime = 'night'   
    }
    return dayTime;
}


pics()

function git() {
    
    let num = 1
    function time() {
        let dayTime
        if (hours >= 6 && hours < 12) {
            dayTime = 'morning'
        }
        if (hours >= 12 && hours < 18) {
            dayTime = 'afternoon'   
        }
        if (hours >= 18 && hours < 24) {
            dayTime = 'evening'   
        }
        if (hours >= 0 && hours < 6) {
            dayTime = 'night'   
        }
        return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${num}.jpg`;
    }
    let images = []
    
    function getLinkToImage() {
        let url = time()
     async function image() {
        const res = await fetch(url);
        const data = await res.url;
        console.log(data)
        body.style.backgroundImage = `url(${data})`
     }
     image()
            console.log(num)
        }
        num = '0' + num
        getLinkToImage()
        num = 1
    
    function backImage() {
    
            next.addEventListener('click', () => {
                num++
                if (num == 21) {
                    num = 1
                }
                let n = num
                if (num.toString().length < 2) {
                    num = '0' + num
                    getLinkToImage()
                    num = n
                }
                else {
                    getLinkToImage()
                }
             })
            
             prev.addEventListener('click', () => {
                if (num == 0) {
                    num = 20
                }
                num--
                console.log(num)
                let n = num
                if (num.toString().length < 2) {
                    num = '0' + num
                    getLinkToImage()
                    num = n
                }
                else {
                    getLinkToImage()
                }
             })
        }
    
    backImage()
}


function api() {
    function getLinkToImage() {
        const url = `https://api.unsplash.com/photos/random?query=${picSelect}&client_id=mWnJPWbGtVDvJ4gMlUhG6LaMGz_X0LMwKqJF3pe_NdM`
        fetch(url)
          .then(res => res.json())
          .then(data => {
            body.style.backgroundImage = `url(${data.urls.regular})`
          });
        }
    
    
    function backImage() {
        getLinkToImage()
        let n = 0
        next.addEventListener('click', () => {
    
            if (u.length <= 20) {
                getLinkToImage()
                u.push(body.style.backgroundImage)
                console.log(u)
                n++
                console.log(n)
            }
            else {
                body.style.backgroundImage = u[n]
                n += 1
                if (n > 20) {
                    n = 0
                }
                console.log(n)
            }
        })
        prev.addEventListener('click', () => {
            console.log(n)
            n--
            if (n <= 0) {
                n = u.length
            }
            body.style.backgroundImage = u[n]
        }
        )
        }
    
        
    
    backImage()
    }
    
    
    
    
    
    

