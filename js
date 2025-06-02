const apiKey = '77c2c7cf3fddaae4c4339a54f34c8ea8'; // Replace with your OpenWeatherMap API key
const fetchWeatherButton = document.getElementById('fetch-weather');
const weatherInfo = document.getElementById('weather-info');

fetchWeatherButton.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;
            weatherInfo.innerHTML = `
                <p><strong>City:</strong> ${name}</p>
                <p><strong>Temperature:</strong> ${main.temp}°C</p>
                <p><strong>Weather:</strong> ${weather[0].description}</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
});
