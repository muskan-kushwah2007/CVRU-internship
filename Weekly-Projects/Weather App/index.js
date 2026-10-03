// Mini Project - API - based Weather App 
const apiKey = "YOUR _API_KEY";
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherInfo = document.getElementById("weather-info");
const errorMsg = document.getElementById("error-msg");
const loader = document.getElementById("loader");

const cityNameEl = document.getElementById("city-name");
const dateTimeEl = document.getElementById("date-time");
const weatherIconEl = document.getElementById("weather-icon");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("weather-condition");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("wind-speed");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && cityInput.value.trim()) {
        fetchWeather(cityInput.value.trim());
    }
});

async function fetchWeather(city) {
  // Reset UI State
  errorMsg.classList.add("hidden");
  weatherInfo.classList.add("hidden");
  loader.classList.remove("hidden");

  try {
    const url = `${apiBaseUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    loader.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
}

function displayWeather(data) {
  // Update Text Details
  cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
  dateTimeEl.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short"
  });
  tempEl.textContent = `${Math.round(data.main.temp)}°C`;
  conditionEl.textContent = data.weather[0].description;
  humidityEl.textContent = `${data.main.humidity}%`;
  windSpeedEl.textContent = `${data.wind.speed} km/h`;

  // Update Weather Icon
  const iconCode = data.weather[0].icon;
  weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Update Dynamic Theme
  updateBackgroundTheme(data.weather[0].main);

  // Show Weather Box & Hide Loader
  loader.classList.add("hidden");
  weatherInfo.classList.remove("hidden");
}

function updateBackgroundTheme(weatherCondition) {
  switch (weatherCondition) {
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      document.body.style.background = "linear-gradient(135deg, #616161, #9bc5c3)";
      break;
    case "Clear":
      document.body.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
      break;
    case "Clouds":
      document.body.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)";
      break;
    case "Snow":
      document.body.style.background = "linear-gradient(135deg, #e6dada, #274046)";
      break;
    default:
      document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
  }
}