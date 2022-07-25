/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Weather.js":
/*!***************************!*\
  !*** ./src/js/Weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
class Weather {

    static langInApp

    constructor(lang) {
        document.querySelector('input.city').addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                Weather.getWeather(document.querySelector('input.city').value, Weather.langInApp)
            }
        });
    }

    static async getWeather(city, lang) {
        Weather.langInApp = 'en'
        Weather.city = document.querySelector('input.city')
        Weather.weatherIcon = document.querySelector('.weather-icon')
        Weather.temperature = document.querySelector('.temperature')
        Weather.weatherDescription = document.querySelector('.weather-description')
        Weather.wind = document.querySelector('.wind')
        Weather.humidity = document.querySelector('.humidity')
        Weather.weatherError = document.querySelector('.weather-error')

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
            Weather.weatherError.textContent = lang == 'en'
                ? `Error! city not found for '${city}'!`
                : `Ошибка! город '${city}' - не найден!`

            Weather.weatherIcon.classList.remove(Weather.weatherIcon.classList[2])
            Weather.temperature.textContent = ''
            Weather.weatherDescription.textContent = ''
            Weather.wind.textContent = ''
            Weather.humidity.textContent = ''
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/js/dataSaver.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ "./src/js/Weather.js");


let isLoaded = false
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)

let langInApp = null

function setLocalStorage() {
    if (isLoaded) {
        window.localStorage.setItem('userName', document.querySelector("input.name").value)
        window.localStorage.setItem('city', document.querySelector("input.city").value)
        window.localStorage.setItem('langInApp', langInApp)
    }
}

function getLocalStorage() {
    if(window.localStorage.getItem('userName') != undefined) {
        document.querySelector("input.name").value = window.localStorage.getItem('userName')
    }

    let city = window.localStorage.getItem('city')
    if (city) {
        document.querySelector("input.city").value = city
    } else {
        document.querySelector("input.city").value = 'Minsk'
    }

    let langRes = window.localStorage.getItem('langInApp')
    if (langRes) {
        langInApp = langRes
    } else {
        langInApp = 'en'
    }
    _Weather__WEBPACK_IMPORTED_MODULE_0__["default"].langInApp = langInApp
    _Weather__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(document.querySelector("input.city").value, langInApp)

    isLoaded = true
}
})();

/******/ })()
;
//# sourceMappingURL=storage.js.map