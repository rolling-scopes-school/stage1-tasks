// 1 part

const time = document.querySelector('.time');
/*console.log(time);
console.log('Hello');
time.textContent = 'Text';
const date = new Date();
console.log(date);
*/
//const currentTime = date.toLocaleTimeString();
//console.log(currentTime);

const elem = document.querySelector('.date');
/*const options = {
    month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC',
};*/
const greeting = document.querySelector('.greeting');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-GB', {hours24: false});
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    getTimeOfDay();
}
showTime();

/*const elem = document.querySelector('.date');
console.log(elem);
const date = new Date();
const options = {
    month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC+3:00',
};
const currentDate = date.toLocaleDateString('en-US', options);
console.log(currentDate);
elem.textContent = currentDate;
*/
function showDate() {
    const date = new Date();
    const currentDate = date.toLocaleDateString('en-GB');
    elem.textContent = currentDate;
}
showDate();

// 2 part

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

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if(hours > 0 && hours <= 6) {
        greeting.textContent = 'Good night,';
    } else if (hours > 6 && hours <= 12) {
        greeting.textContent = 'Good morning,';      
    } else if(hours > 12 && hours <= 18) {
        greeting.textContent = 'Good afternoon,';
    } else {
        greeting.textContent = 'Good evening,'
    }
}

// 3part

const nameForm = document.querySelector('.form');
nameForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('.name');
    const nameValue = nameInput.value;
    setLocalStorage(nameValue);
})

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
window.addEventListener('load', getLocalStorage);

function getBgUrl() {
    const timeOfDay = getTimeOfDay();
    const bgNum = String(getRandomNum(1, 20)).padStart(2, '0');
    return `https://raw.githubusercontent.com/LeilaS-88/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
}

