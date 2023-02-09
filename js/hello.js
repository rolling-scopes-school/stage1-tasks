const greetingContainer = document.querySelector(".greeting");
const nameInput = document.querySelector(".name");

//Перед перезагрузкой страницы сохраняем имя
window.addEventListener('beforeunload', setLocalStorage);

//При загрузке страницы извлекаем сохраненное в Localstorage
window.addEventListener('load', getLocalStorage);

getGreeting();

function setLocalStorage() {
    localStorage.setItem('name', nameInput.value);
}

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameInput.value = localStorage.getItem('name');
    }
}

function getGreeting() {
    const greetingText = `Good ${getTimeOfDay()}`
    greetingContainer.textContent = greetingText;
    setInterval(getGreeting,1000);
}

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