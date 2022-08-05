import './styles.css';
import { format } from 'date-fns';
// import displayWeather from './indexDOM';

const location = document.querySelector('[data-location]');
// const form = document.querySelector('form');
// const searchBar = document.querySelector('input');

async function tapWeatherAPI() {
  try {
    // get API weather data
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.value}&APPID=946e4ca203356162b844d60b408b3dd4`, {
      mode: 'cors',
    });
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function convertKelvinToFahren(K) {
  return Math.round(1.8 * (K - 273) + 32);
}

function convertMeterToMile(m) {
  return `${Math.round(m * 2.237)} mph`;
}

async function Weather() {
  // Factory function
  const weatherData = await tapWeatherAPI();
  return {
    createWeather() {
      return {
        sky: weatherData.weather[0].description,
        location: weatherData.name,
        date: format(new Date(), 'EEEE, MMM do yy'),
        time: format(new Date(), 'h:m aaa'),
        temp: convertKelvinToFahren(weatherData.main.temp),
        feelsLike: convertKelvinToFahren(weatherData.main.feels_like),
        humidity: `${weatherData.main.humidity}%`,
        wind: convertMeterToMile(weatherData.wind.speed),
      };
    },
  };
}

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   await displayWeather();
//   searchBar.value = '';
// });

export default Weather;
