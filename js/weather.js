const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector(".city");
const error = document.querySelector(".weather-error");
const defaultCity = "Minsk";

getLocalStorage();
getWeather();

//Перед перезагрузкой страницы сохраняем город
window.addEventListener('beforeunload', setLocalStorage);

//При загрузке страницы извлекаем сохраненное в Localstorage
window.addEventListener('load', getLocalStorage);

//При вводе нового города в input получаем погоду
city.addEventListener("change", getWeather);


function setLocalStorage() {
    city.value ? localStorage.setItem('city', city.value) :  localStorage.setItem('city', defaultCity);
}

function getLocalStorage() {
    city.value = localStorage.getItem('city') ? localStorage.getItem('city') : defaultCity;
}

async function getWeather() { 
    try { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=2e637b43ddb8c25679fa7373b4ca3b2a&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    city.value = data.name;
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%` 
    }
    catch(err) {
        error.textContent = `An error occurred while retrieving data`;
        city.value = "";
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = ``;
        weatherDescription.textContent = "";
        wind.textContent = ``;
        humidity.textContent = ``;
    }

    
}
