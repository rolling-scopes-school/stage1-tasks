async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=1e0a36a68ff0401ff193cd42e0449268&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  }
  getWeather()

  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  weatherIcon.className = 'weather-icon owf';

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
  
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }



  var inputval = document.querySelector('#cityinput')
  var btn = document.querySelector('#add');
  var city = document.querySelector('#cityoutput')
  var descrip = document.querySelector('#description')
  var temp = document.querySelector('#temp')
  var wind = document.querySelector('#wind')
  
  
  apik = "3045dd712ffe6e702e3245525ac7fa38"
  
  
  function convertion(val){
      return (val - 273).toFixed(2)
  }
  
      btn.addEventListener('click', function(){
  
  
          fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
          .then(res => res.json())
  
  
          .then(data => {
  
              var nameval = data['name'];
              var descrip = data['weather']['0']['description'];
              var tempature = data['main']['temp'];
              var wndspd = data['wind']['speed'];


              city.innerHTML=`Weather of <span>${nameval}<span>`
              temp.innerHTML = `Temperature: <span>${ convertion(tempature)} °C</span>`
              description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
              wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  
          })
          .catch(err => alert('You entered Wrong city name'))
      })