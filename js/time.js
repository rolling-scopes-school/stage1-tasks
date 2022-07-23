const localStorage = window.localStorage;

function showTime() {
    const timeNode = document.querySelector('.time');
    const dateNode = document.querySelector('.date');
    const date = new Date();
    timeNode.textContent = date.toLocaleTimeString();
    dateNode.textContent = date.toLocaleDateString(
        'en-En', 
        {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'}
    );
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime();

function saveName() {
    
}

function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6) return "night"
    if (hour >= 6 && hour < 12) return "morning"
    if (hour >= 12 && hour < 18) return "day"
    return "evening"
}

function showGreeting() {
    document.querySelector(".greeting").textContent = `Good ${getTimeOfDay()}`
}

function setLocalStorage() {
    localStorage.setItem('userName', document.querySelector("input.name").value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('userName') != undefined) {
        document.querySelector("input.name").value = localStorage.getItem('userName');;
    }
  }
  window.addEventListener('load', getLocalStorage)