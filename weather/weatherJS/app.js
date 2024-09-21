const API_KEY = "7d710ab2dc4174df3825527c60690308";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${choiceCity},fr&limit=5&appid=${API_KEY}`;
const ICON_URL = "http://openweathermap.org/img/w/";

let city = document.getElementById("city");
let sky = document.getElementById("sky");
let humidity = document.getElementById("humidity");
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let country = "";
  

let submitCity = document.getElementById("submit");
submitCity.addEventListener("click", (  ) => {
  let choiceCity = document.getElementById("choiceCity").value;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${choiceCity},${country}&limit=5&appid=${API_KEY}`;
    checkWeather();
    fetch(apiUrl, {method: 'GET'})
    .then(async (responseHTTP) =>
    {
      let resultJSON = await responseHTTP.json();
      sky.innerHTML = `<img src="${ICON_URL}${resultJSON.weather[0].icon}.png"/>`;

      city.innerHTML = resultJSON.name;
      wind.innerHTML = (resultJSON.wind.speed * 3.6).toFixed(0) + ' km/h';
      humidity.innerHTML = resultJSON.main.humidity + ' %';
      let tempCelcius = Number(resultJSON.main.temp - 273.15).toFixed(1);
      temp.innerHTML = tempCelcius + ' °C';
      // console.log(resultJSON)

    })
    .catch((error) => console.error(error));
})

async function checkWeather() {
  const response = await fetch (apiUrl, {method: 'GET'});
  let data = await response.json();

  if ((choiceCity.value).toLowerCase() = resultJSON.name.toLowerCase()) {
    country = resultJSON.sys.country; 
  }

}