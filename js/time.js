export {showTime}

let time = document.querySelector('.time')
let dateC = document.querySelector('.date')
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime
    setTimeout(showTime, 1000);
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
const currentDate = date.toLocaleDateString('en-En', options);
dateC.innerHTML = currentDate
  }
showTime();

