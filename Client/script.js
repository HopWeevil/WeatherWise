function fetchWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`http://localhost/WeatherWise/weatherforecast.php?cityName=${cityName}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const forecastContainer = document.getElementById('forecastContainer');
    const dailyForecasts = {};

    data.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });

        if (!dailyForecasts[day]) {
            dailyForecasts[day] = [];
        }

        dailyForecasts[day].push({
            time: date.toLocaleTimeString('en-US'),
            temperature: Math.round(forecast.main.temp),
            description: forecast.weather[0].description,
        });
    });

    for (const day in dailyForecasts) {
        const forecastData = dailyForecasts[day];

        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');

        const dayOfWeek = document.createElement('h3');
        dayOfWeek.textContent = day;

        forecastCard.appendChild(dayOfWeek);

        forecastData.forEach((data) => {
            const time = document.createElement('p');
            time.textContent = data.time;

            const temperature = document.createElement('p');
            temperature.textContent = `${data.temperature}°C`;

            const description = document.createElement('p');
            description.textContent = data.description;

            forecastCard.appendChild(time);
            forecastCard.appendChild(temperature);
           
        });

        forecastContainer.appendChild(forecastCard);
    }
}