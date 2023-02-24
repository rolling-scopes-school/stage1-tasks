const time = document.querySelector('.time');
const todayDate = document.querySelector('.date');

const date = new Date();


function showTime() {
    const currentTime = date.toLocaleTimeString();
    const options={weekday:'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-En', options);
    time.textContent = currentTime;
todayDate.textContent = currentDate;
setTimeout (showTime, 1000);
  }
  showTime();

  const greeting = document.querySelector('.greeting');
  const partOfDay = getTimeOfDay()
    function getTimeOfDay(){
    let hours = date.getHours();
        if (hours == 1) {
        return "night";
    }
    else if  (hours == 0) {
        return "night";
    }
    else if  (hours == 2) {
        return "night";
    }
    else if  (hours == 3) {
        return "night";
    }
    else if  (hours == 4) {
        return "night";
    }
    else if  (hours == 5) {
        return "night";
    }
    else if  (hours == 6) {
        return "morning";
    }
    else if  (hours == 7) {
        return "morning";
    }
    else if  (hours == 8) {
        return "morning";
    }
    else if  (hours == 9) {
        return "morning";
    }
    else if  (hours == 10) {
        return "morning";
    }
    else if  (hours == 11) {
        return "morning";
    }
    else if  (hours == 12) {
        return "afternoon";
    }
    else if  ( hours == 13) {
        return "afternoon";
    }
    else if  ( hours == 14) {
        return "afternoon";
    }
    else if  ( hours == 15) {
        return "afternoon";
    }
    else if  ( hours == 16) {
        return "afternoon";
    }
    else if  ( hours == 17) {
        return "afternoon";
    }
    else if  ( hours == 18) {
        return "evening";
    }
    else if  ( hours == 19) {
        return "evening";
    }
    else if  ( hours == 20) {
        return "evening";
    }
    else if  ( hours == 21) {
        return "evening";
    }
    else if  ( hours == 23) {
        return "evening";
    }   
        else {
        return "evening";
    }
  }
  greeting.textContent = `Good ${partOfDay}`;

  function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

const randomPictureNum = getRandomNum(0, 20);
console.log(randomPictureNum);

const picNum = randomPictureNum.toString().padStart(2,0);
console.log(picNum);


const body = document.querySelector('.body');
body.style.backgroundImage ="url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/15.jpg')";

function setBg(){
const img = new Image();
img.src =`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${partOfDay}/${picNum}.jpg`;
img.onload = () => { 
 document.body.style.backgroundImage =`url(${img.src})`;
 console.log(img.src.toString());
};
}

 setBg()