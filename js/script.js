// 1 part clock and calendar

const time = document.querySelector('.time');

const elem = document.querySelector('.date');
var week =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const greeting = document.querySelector('.greeting');

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sliderNum = getRandomNum(1, 20);

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-GB', {hours24: false});
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    getTimeOfDay();
    
}
showTime();

function showDate() {
    const date = new Date();
    const currentDate = date.toLocaleDateString('en-GB');
    const dayWeek = week[date.getDay()];
    elem.textContent = dayWeek + ' ' + currentDate;
}
showDate();

/*
function showDayWeek() {
    const day = new Date();
    return week[day.getDay()];
}
console.log(showDayWeek());
*/
//const greeting = document.querySelector('.greeting');
//console.log(hours);
//greeting.textContent = hours;

//const dayTime = ['night', 'morning', 'afternoon', 'evening'];


// 2 part greeting
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let period = '';

    if(hours >= 0 && hours < 6) {
        period = 'night';
    } else if (hours > 6 && hours < 12) {
        period = 'morning';      
    } else if(hours >= 12 && hours < 18) {
        period = 'afternoon';
    } else {
        period = 'evening'
    }
    return period;
}
//console.log(getTimeOfDay());
greeting.textContent = `Good ${getTimeOfDay()},`;

const nameForm = document.querySelector('.form');

nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('.name');
    const nameValue = nameInput.value;
    setLocalStorage(nameValue);
})

const city = document.querySelector('.city');
const cityValue = city.value;
city.addEventListener('change', getWeather);

city.addEventListener('input', function(e) {
    const cityValue = city.value;
    setLocalStorageCity(cityValue);
});



function setLocalStorageCity(cityValue) {
    localStorage.setItem('city', cityValue);
}

//window.addEventListener('beforeunload', setLocalStorageCity);

function getLocalStorageCity() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}

function setLocalStorage(nameValue) {
    localStorage.setItem('name', nameValue);
}
//window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        const nameValue = localStorage.getItem('name');
        const nameElement = document.querySelector('.name');
        nameElement.value = nameValue;
    }
}

function loadHandler() {
    getLocalStorage();
    getLocalStorageCity();
}

window.addEventListener('load', loadHandler);

// 3 part Slider images
const body = document.querySelector('body');

/*
function setBg() {
    body.style.backgroundImage = `url(${getBgUrl()})`;
}*/

/*"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";*/

//console.log(typeof sliderNum);

function getBgUrl() {
    const timeOfDay = getTimeOfDay();
    const bgNum = String(sliderNum).padStart(2, '0');
    return `https://raw.githubusercontent.com/LeilaS-88/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
}

function setBg() {
    const img = new Image();
    img.src = getBgUrl();
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }
}
setBg();

function getSlideNext() {
    if(sliderNum < 20) {
        sliderNum += 1;
    } else {
        sliderNum = 1;
    }
    
    setBg();
}

function getSlidePrev() {
    if(sliderNum > 1) {
        sliderNum -= 1;
    } else {
        sliderNum = 20;
    }

    setBg();
}

const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev);

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext);

// 4 part weather widget
/*
https://api.openweathermap.org/data/2.5/weather?q=Antalya&lang=en&appid=935f610dda72b5d27817a05c3c09f853&units=metric
*/

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=935f610dda72b5d27817a05c3c09f853&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if(city.value == '' || city.value == undefined) {
        alert("Incorrectly entered data");
    } else {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
}

/*
function setLocalStorageWeather(temperature) {
    localStorage.setItem('temperature', temperature.value);
}

function getLocalStorageWeather() {
    if(localStorage.getItem('temperature')) {
        temperature.value = localStorage.getItem('temperature');
    }
}
*/



// 5 part widget quotes of day
async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    //console.log(data);

    let quoteNum = getRandomNum(0, data.length - 1);
    quote.textContent = data[quoteNum].text;
    console.log(quote.textContent);
    author.textContent = data[quoteNum].author;
}
getQuotes();

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
changeQuote.addEventListener('click', getQuotes);

// 6 part audioplayer
/*
const audio = document.querySelector('audio');
let isPlay = false;
const play = document.querySelector('.play');



function playAudio() {
    if(isPlay) {
        //play.classList.add('play');
        //play.classList.remove('pause');
        audio.currentTime = 0;
        audio.play();         
    }
}

function pauseAudio() {
    if(isPlay) {
        audio.pause();
    }
}


function toggleBtn() {
    play.classList.toggle('pause');
}


function toggleBtnBack() {
    pause.classList.toggle('play');
}

function playAction() {
    playAudio();
    isPlay = true;
    toggleBtn();
}
play.addEventListener('click', playAction);


const pause = document.querySelector('.pause');

function pauseAction() {
    pauseAudio();
    isPlay = false;
    toggleBtnBack();
}

pause.addEventListener('click', pauseAction);

*/


// 6
const audio = document.querySelector('audio');
let isPlay = false;
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

function playAudio() {
    if(isPlay == false) {
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
}
/*
function pauseAudio() {
    audio.pause();
}
function playAction() {
    playAudio();
    isPlay = true;
}*/
isPlay = true;
play.addEventListener('click', playAudio);
console.log(isPlay);

isPlay = false;
pause.addEventListener('click', playAudio);
console.log(isPlay);



/*
function init() {
    setBg();
}
init();
*/




