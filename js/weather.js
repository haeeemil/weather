const API_KEY = "4d234c35df53d5d8f7c6ae172f4198bf";
const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weatherSelect = document.querySelector("#weather-select");
const info = document.querySelector(".info");

weatherSelect.addEventListener("change", (e) => {
    getWeather(e.target.value);
});

const getWeather = async (city = 'seoul') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(url);

    const { name, main, weather, wind } = response.data;
    locationDisplay.innerText = name;
    temperatureDisplay.innerText = transferTemperature(main.temp);
    weatherDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
    windDisplay.innerText = wind.speed;
    feelLikeDisplay.innerText = transferTemperature(main.feels_like);
}

const transferTemperature = (temp) => {
    return (temp - 273.15).toFixed(1);
}

getWeather();