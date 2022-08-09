import Weather from './index';

const clouds = document.querySelector('[data-clouds]');
const city = document.querySelector('[data-city]');
const date = document.querySelector('[data-date]');
const time = document.querySelector('[data-time]');
const temp = document.querySelector('[data-temp]');
const feelsLike = document.querySelector('[data-feels-like]');
const humidity = document.querySelector('[data-humidity]');
const wind = document.querySelector('[data-wind]');

async function displayWeather() {
  const weatherInfo = await Weather();

  clouds.textContent = weatherInfo.createWeather().sky;
  city.textContent = weatherInfo.createWeather().location;
  date.textContent = weatherInfo.createWeather().date;
  time.textContent = weatherInfo.createWeather().time;
  temp.textContent = `${weatherInfo.createWeather().temp} F`;
  feelsLike.textContent = `${weatherInfo.createWeather().feelsLike} F`;
  humidity.textContent = weatherInfo.createWeather().humidity;
  wind.textContent = weatherInfo.createWeather().wind;
}

export default displayWeather;
