import getLang from './dataSaver'

export default class Weather {

    constructor() {
        document.querySelector('input.city').addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                Weather.getWeather(document.querySelector('input.city').value)
            }
        });
    }

    static async getWeather(city) {
        Weather.city = document.querySelector('input.city')
        Weather.weatherIcon = document.querySelector('.weather-icon')
        Weather.temperature = document.querySelector('.temperature')
        Weather.weatherDescription = document.querySelector('.weather-description')
        Weather.wind = document.querySelector('.wind')
        Weather.humidity = document.querySelector('.humidity')
        Weather.weatherError = document.querySelector('.weather-error')
        let lang = getLang()

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=4dd926d8428c8f4eba2fa99faf125bf1&units=metric`;
            const res = await fetch(url)
            Weather.data = await res.json()

            if (Weather.weatherIcon.classList[2]) {
                Weather.weatherIcon.classList.remove(Weather.weatherIcon.classList[2])
            }
            Weather.weatherError.textContent = '';
            Weather.weatherIcon.classList.add(`owf-${Weather.data.weather[0].id}`)
            Weather.temperature.textContent = `${Math.trunc(Weather.data.main.temp)}°C`
            Weather.weatherDescription.textContent = Weather.data.weather[0].description
            let windText = lang == 'en' ? "Wind speed: " : "Скорость ветра: "
            let windDim = lang == 'en' ? " m/s" : " м/с"
            Weather.wind.textContent = windText + Math.round(Weather.data.wind.speed) + windDim;
            let humidityText = lang == 'en' ? "Humidity: " : "Влажность: "
            Weather.humidity.textContent = humidityText + Weather.data.main.humidity + "%"
        } catch (e) {
            if (e.message.includes("undefined")) {
                Weather.weatherError.textContent = lang == 'en'
                    ? `Error! city not found for '${city}'!`
                    : `Ошибка! город '${city}' - не найден!`
            } else {
                Weather.weatherError.textContent = lang == 'en'
                    ? `Connection Error'!`
                    : `Ошибка подключения!`
            }
            

            Weather.weatherIcon.classList.remove(Weather.weatherIcon.classList[2])
            Weather.temperature.textContent = ''
            Weather.weatherDescription.textContent = ''
            Weather.wind.textContent = ''
            Weather.humidity.textContent = ''
        }
    }
}