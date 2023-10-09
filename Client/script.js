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
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function getDayOfWeek(dateString) 
{
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
}
  
function displayWeather(data) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    const dailyForecasts = {};

    data.list.forEach(forecast => {
        const day = getDayOfWeek(forecast.dt_txt);

        if (!dailyForecasts[day]) {
            dailyForecasts[day] = [];
        }

        dailyForecasts[day].push({
            time: forecast.dt_txt,
            temperature: forecast.main.temp,
            description: forecast.weather[0].description,
            icon: forecast.weather[0].icon,
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

            const icon = document.createElement('img');
            icon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
            icon.alt = data.description;

            forecastCard.appendChild(time);
            forecastCard.appendChild(temperature);
            forecastCard.appendChild(description);
            forecastCard.appendChild(icon);


        });

        forecastContainer.appendChild(forecastCard);
    }
}
