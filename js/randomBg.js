const body = document.querySelector("body");
let timeOfDay="";
//При загрузке страницы проверяется время дня и формируется путь к файлу
const currentDate = new Date();
const currentHour = currentDate.getHours();
const basePath = "https://raw.githubusercontent.com/ekatrif/momentum/assets/images/";
const minNumber = 1;
const maxNumber = 20;
let randomNumber = random(minNumber,maxNumber);
const next = document.querySelector(".slide-next");
const prev = document.querySelector(".slide-prev");

if (currentHour < 6) {
    timeOfDay="night";
} else if (currentHour < 12) {
    timeOfDay="morning";
} else if (currentHour<24) {
    timeOfDay="afternoon";
}
else {timeOfDay="evening"};

setNewPath(randomNumber);

function random(min,max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}
function setNewPath(random) {
    let pathToImage = basePath + timeOfDay + "/" + numToStr(random) + ".jpg";
    body.setAttribute("style", `background-image:url("${pathToImage}")`)
}


function numToStr(number) {
    return number < 10 ? `0${String(number)}` : String(number);
}

next.addEventListener("click", function() {
    randomNumber = randomNumber===20 ? 1 : randomNumber+1;
    setNewPath(randomNumber);
})