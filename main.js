import './style.css'
import { getWeatherData } from './weather.js'
import { showWeatherData } from './view.js'

const searchButton = document.querySelector('#searchButton')
const searchInput = document.querySelector('#searchInput')

searchButton.addEventListener('click', async () => {
  const weatherData = await getWeatherData(searchInput.value)
  showWeatherData(weatherData)
});

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchButton.click()
  }
});

searchInput.value = 'Austin'
searchButton.click();
