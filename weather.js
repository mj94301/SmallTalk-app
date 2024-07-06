// Define your API key and the city name
const apiKey = '080b6d3153f1b638ac3228c8be60bd31';
const cityName = 'Portland, Oregon';

// API endpoint with city name and API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

// Function to display weather data
function displayWeather(data) {
    console.log('Weather Data:', data);
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Call the function to fetch and display weather data
fetchWeather();
