setInterval(function() {
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
if (hours < 10) {
    hours = '0' + hours
}
if (minutes < 10) {
    minutes = '0' + minutes
}
let seconds = date.getSeconds()
if (seconds < 10) {
    seconds = '0' + seconds
}
 let time = document.querySelector('.time')
   time.innerHTML = hours + ':' + minutes + ':' + seconds
})

let curDate = new Date()
let month = curDate.getMonth()
let day = curDate.getDate()
let months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Seb', 'Oct', 'Nov', 'Dec']
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dayNum = curDate.getDay()
let date = document.querySelector('.date')
date.innerHTML = `${days[dayNum]}, ${months[month]} ${day}`



let weather = document.querySelector('.weather')
let temp = document.querySelector('.temperature')
let wIcon = document.querySelector('.weather-icon')
let wDesc = document.querySelector('.weather-description')
let icon
let city = document.querySelector('.city')
let curCity
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let hours = curDate.getHours()

// function weatherPic(desc, hours) {
//     let icon
//     if (desc == 'clear sky' && hours < 20) {
//         icon = '01d.png'
//     }
//     if (desc == 'clear sky' && hours >= 20) {
//         icon = '01n.png'
//     }
//     if (desc == 'few clouds' && hours < 20) {
//         icon = '02d.png'
//     }
//     if (desc == 'few clouds' && hours >= 20) {
//         icon = '02n.png'
//     }
//     if (desc == 'scattered clouds'  && hours < 20) {
//         icon = '03d.png'
//     }
//     if (desc == 'scattered clouds' && hours >= 20) {
//         icon = '03n.png'
//     }
//     if (desc == 'broken clouds' && hours < 20) {
//         icon = '04d.png'
//     }
//     if (desc == 'broken clouds' && hours >= 20) {
//         icon = '04n.png'
//     }
//     if (desc == 'shower rain' && hours < 20) {
//         icon = '09d.png'
//     }
//     if (desc == 'shower rain' && hours >= 20) {
//         icon = '09n.png'
//     }
//     if (desc == 'rain' && hours < 20) {
//         icon = '10d.png'
//     }
//     if (desc == 'rain' && hours >= 20) {
//         icon = '10n.png'
//     }
//     if (desc == 'thunderstorm' && hours < 20) {
//         icon = '11d.png'
//     }
//     if (desc == 'thunderstorm' && hours >= 20) {
//         icon = '11n.png'
//     }
//     if (desc == 'snow' && hours < 20) {
//         icon = '13d.png'
//     }
//     if (desc == 'snow' && hours >= 20) {
//         icon = '13n.png'
//     }
//     if (desc == 'mist' && hours < 20) {
//         icon = '50d.png'
//     }
//     if (desc == 'mist' && hours >= 20) {
//         icon = '50n.png'
//     }
//     if (desc.includes('clouds') && hours < 20) {
//         icon = '02d.png'
//     }
//     if (desc.includes('clouds') && hours > 20) {
//         icon = '02n.png'
//     }
//     if (desc.includes('drizzle') && hours < 20) {
//         icon = '10d.png'
//     }
//     if (desc.includes('drizzle') && hours > 20) {
//         icon = '10n.png'
//     }
//     // if (desc.includes('rain') && hours < 20) {
//     //     icon = '10d.png'
//     // }
//     if (desc.includes('rain') && hours >= 0) {
//         icon = '10n.png'
//     }
//     return icon
// }

city = localStorage.getItem('city') == 'Minsk' ?  '' : localStorage.getItem('city')
console.log(city)

async function getWeather(city) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=0854c30f1d1333de1d391b6482784866&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    let temp = document.querySelector('.temperature')
    temp.innerHTML = Math.round(data.main.temp) + ' &deg' + 'C' 
    let desc = data.weather[0].description
    wind.innerHTML = 'Wind speed: ' + data.wind.speed + ' m/s'
    humidity.innerHTML = `Humidity: ${data.main.humidity} %`
    wDesc.innerHTML = desc
    // let icon = weatherPic(desc, hours)
    console.log(icon)
    //wIcon.innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}' alt='weather pic'/>`
    wIcon.classList.add(`owf-${data.weather[0].id}`)
    document.querySelector('.weather-error').innerHTML = ''
}
getWeather(city)

city.addEventListener('input', () => {
           //curCity = city.value
           city = city.value
           console.log(city)
            localStorage.setItem('city', city.value)
        async function getWeather() { 
            try {
            getWeather(city)
        }
        catch(e) {
            document.querySelector('.weather-error').innerHTML = `There isn't such city or data cannot be downloaded at the moment`
            if ( document.querySelector('.weather-error').innerHTML != '') {
                wDesc.innerHTML= ''
                temp.innerHTML = ''
                humidity.innerHTML = ''
                wind.innerHTML = ''
                wIcon.classList.remove(wIcon.classList[wIcon.classList.length - 1])
            }
        }
          }
          getWeather()
    
})
let datee = new Date();
console.log(datee.toLocaleTimeString())
let greeting = document.querySelector('.greeting')
if (hours >= 0 && hours < 6) {
    greeting.innerHTML = 'Good night,'   
}
// if (hours >= 6 && hours < 12) {
//     greeting.innerHTML = 'Good morning,'
// }
// if (hours >= 12 && hours < 18) {
//     greeting.innerHTML = 'Good afternoon,'   
// }
// if (hours >= 18 && hours < 24) {
//     greeting.innerHTML = 'Good evening,'   
// }


let nam = document.querySelector('.name')
nam.value = localStorage.getItem('name')
nam.addEventListener('input', () => {
        localStorage.setItem('name', nam.value) 
    })

    let body = document.querySelector('body')


    // function getLinkToImage() {
    //     const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=pKoi4IxCJey7dbHtk4CcOcM5MrsAa23U_8mQ84Rd5hg';
    //     fetch(url)
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data.urls.regular)
    //         body.style.backgroundImage = `url(${data.urls.regular})`
    //       });
    //     }

    //     getLinkToImage()

    async function getLinkToImage() {
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
        console.log(dayTime)
        const url = `https://api.unsplash.com/photos/random?query=${dayTime}&client_id=pKoi4IxCJey7dbHtk4CcOcM5MrsAa23U_8mQ84Rd5hg`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.urls.regular)
        body.style.backgroundImage = `url(${data.urls.regular})`
    }
    
    getLinkToImage()

    let r
    let quote = document.querySelector('.quote')
    let author = document.querySelector('.author')
    function random() {
        return Math.round(0 + Math.random() * (2 - 0))
    }

    async function getQuotes() {  
        // function random() {
        //     let rand = Math.round(0 + Math.random() * (2 - 0))
        //     if (r !== rand) {
        //             r = rand
        //             return rand
        //         }
        //     else {
        //         console.log('ЗАШЛООО')
        //         return random()
        //     }
        // }
        
        let rand = random()

        while (rand == r) {
            rand = random()
        }

        r = rand
        
       console.log(r, rand)
        const quotes = 'data.json'
        const res = await fetch(quotes)
        const data = await res.json()
        console.log(data[rand])
        quote.innerHTML = data[rand].text;
        author.innerHTML = data[rand].author;
      }
      getQuotes()
    

        document.querySelector('.change-quote').addEventListener('click', () => {
            getQuotes()
        })
    

        const audio = document.querySelector('audio');
        const playBtn = document.querySelector('.play');
        
        function playAudio() {
          audio.play();
        }
        
        function pauseAudio() {
          audio.pause();
        }

        let times = 1
        
        playBtn.addEventListener('click', () => {
            if (times % 2 != 0) {
                playAudio()
                times++
            }
            else {pauseAudio()
                times++
            }
        });
    
        
    

    




    



