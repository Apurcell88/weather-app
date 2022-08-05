import displayWeather from './indexDOM';

const form = document.querySelector('form');
const searchBar = document.querySelector('input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await displayWeather();
  searchBar.value = '';
});
