function fetchWeather(city = 'Kyiv') {
  const cityInput = document.getElementById('cityInput');
  let cityName = cityInput.value;

  if (!cityName && city) {
    cityName = city;
  } else if (!cityName && !city) {
    alert('Please enter a city name.');
    return;
  }

//   fetch(`http://localhost:8888/WeatherWise/Server/weatherForecast.php?cityName=${cityName}`)
  fetch(`http://localhost/WeatherWise/Server/weatherForecast.php?cityName=${cityName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
}

function getDayOfWeek(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  return daysOfWeek[dayOfWeek];
}

function displayWeather(data) {
  const forecastContainer = document.getElementById('forecastContainer');
  forecastContainer.innerHTML = '';
  const loc = document.getElementsByClassName('location')[0];
  loc.innerHTML = document.getElementById('cityInput').value || 'Kyiv';

  let dailyForecasts = {};

  data.list.forEach((forecast) => {
    const day = getDayOfWeek(forecast.dt_txt);
    console.log(day);
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
  for (const key in dailyForecasts) {
    dailyForecasts[key] = dailyForecasts[key][0];
  }
  let resultArr = [];
  for (const day in dailyForecasts) {
    resultArr.push({ [day]: dailyForecasts[day] });
  }
  const findDays = Array.from(document.getElementsByClassName('day'));
  const findDate = document.getElementsByClassName('date')[0];
  const findDegree = Array.from(document.getElementsByClassName('degree-value'));
  const findIcon = Array.from(document.querySelectorAll('.forecast-icon > img'));
  resultArr.forEach((item, index, arr) => {
    if(!index){
        findDate.textContent = new Date(Object.values(item)[0].time).toLocaleDateString();
    }
    findDays[index].textContent = Object.keys(item)[0];
    findDegree[index].textContent = Object.values(item)[0].temperature;
    // findIcon[index].src = `https://openweathermap.org/img/w/${Object.values(item)[0].icon}.png`;
    findIcon[index].src = `../images/icons/${Object.values(item)[0].icon}.svg`;
  }); 

  //     const forecastCard = document.createElement('div');
  //     forecastCard.classList.add('forecast-card');

  //     const dayOfWeek = document.createElement('h3');
  //     dayOfWeek.textContent = day;

  //     forecastCard.appendChild(dayOfWeek);
  //     console.log(forecastData);

  //     const forecastCardItem = document.createElement('div');
  //     forecastCardItem.classList.add('forecast-card-item');

  //     const time = document.createElement('p');
  //     time.textContent = forecastData.time;

  //     const temperature = document.createElement('p');
  //     temperature.textContent = `${forecastData.temperature}°C`;

  //     const description = document.createElement('p');
  //     description.textContent = forecastData.description;

  //     const icon = document.createElement('img');
  //     icon.src = `https://openweathermap.org/img/w/${forecastData.icon}.png`;
  //     icon.alt = forecastData.description;

  //     forecastCardItem.appendChild(time);
  //     forecastCardItem.appendChild(temperature);
  //     forecastCardItem.appendChild(description);
  //     forecastCardItem.appendChild(icon);
  //     forecastCard.appendChild(forecastCardItem);

  //     forecastContainer.appendChild(forecastCard);
  //   }
}

fetchWeather();
