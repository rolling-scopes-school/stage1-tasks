const timeContainer = document.querySelector(".time");
const dateContainer = document.querySelector(".date");

showTime();

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'};
    let currentDate = date.toLocaleDateString('ru-Ru', options);
    if (!currentDate) return currentDate;      
    currentDate = currentDate[0].toUpperCase() + currentDate.slice(1);      
    dateContainer.textContent = currentDate;
}

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('ru-RU');
    timeContainer.textContent = currentTime;
    showDate();
    setTimeout(showTime,1000);
}