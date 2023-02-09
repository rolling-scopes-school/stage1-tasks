const body = document.querySelector("body");
const next = document.querySelector(".slide-next");
const prev = document.querySelector(".slide-prev");
const basePath = "https://raw.githubusercontent.com/ekatrif/momentum/assets/images/";
const minNumber = 1;
const maxNumber = 20;

const timeOfDay = getTimeOfDay();

const randomNumber = random(minNumber,maxNumber);
let currentNumber = randomNumber;

const path = setNewPath(randomNumber);

changeBg(path);

next.addEventListener("click", nextImage);

prev.addEventListener("click", prevImage);

function getTimeOfDay() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour < 6) {
        return "night";
    } else if (currentHour < 12) {
        return "morning";
    } else if (currentHour < 18) {
        return "afternoon";
    }
    else {return "evening"};
}

function random(min,max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

function setNewPath(random) {
    return basePath + timeOfDay + "/" + numToStr(random) + ".jpg";
}

function changeBg(path) {
    const img = new Image();
    img.src = path; 
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url("${path}")`;
    })        
}

function numToStr(number) {
    return number < 10 ? `0${String(number)}` : String(number);
}

function nextImage() {
    currentNumber = currentNumber===20 ? 1 : currentNumber+1;    
    //Когда загружена, сменить фон
    let nextPath = setNewPath(currentNumber);
    changeBg(nextPath);
    
}

function prevImage() {
    currentNumber = currentNumber===1 ? 20 : currentNumber-1;
    //Когда загружена, сменить фон
    let prevPath = setNewPath(currentNumber);
    changeBg(prevPath);
}