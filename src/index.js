import './styles.css';

const location = document.querySelector('[data-location]');
const form = document.querySelector('form');

// function convertKelvinToFahren(kelvinTemp) {
//   formula - 1.8*(K-273) + 32
// }

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

async function Weather() {
  // Factory function
  const weatherData = await tapWeatherAPI();
  console.log(weatherData);
  return {
    createWeather() {
      return {
        sky: weatherData.weather[0].description,
        location: weatherData.name,
        // date: ,
        // time: ,
      };
    },
  };
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const weatherInfo = await Weather();
  // weatherInfo.createWeather();
  console.log(weatherInfo.createWeather());
});
