  const userTab = document.querySelector("[data-userWeather]");
  const searchTab = document.querySelector("[data-searchWeather]");
  const userContainer = document.querySelector(".weather-container");
  const grantAccessContainer = document.querySelector(
    ".grant-location-container"
  );
  const searchForm = document.querySelector("[data-searchForm]");
  const loadingScreen = document.querySelector(".loading-container");
  const userInfoContainer = document.querySelector(".user-info-container");

  let oldTab = userTab;
  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
  oldTab.classList.add("current-tab");
  getfromSessionStorage();

  function switchTab(newTab) {
    if (newTab !== oldTab) {
      oldTab.classList.remove("current-tab");
      oldTab = newTab;
      oldTab.classList.add("current-tab");

      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        getfromSessionStorage();
      }
    }
  }

  userTab.addEventListener("click", () => switchTab(userTab));
  searchTab.addEventListener("click", () => switchTab(searchTab));

  function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.add("active");
    } else {
      const coordinates = JSON.parse(localCoordinates);
      fetchUserWeatherInfo(coordinates);
    }
  }

  async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      loadingScreen.classList.remove("active");
      userInfoContainer.classList.add("active");
      renderWeatherInfo(data);
    } catch (err) {
      loadingScreen.classList.remove("active");
      alert("Failed to fetch weather data.");
    }
  }

  function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDes]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");
    const pressure = document.querySelector("[data-pressure]");
    const sunrise = document.querySelector("[data-sunrise]");
    const sunset = document.querySelector("[data-sunset]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
    pressure.innerText = `${weatherInfo?.main?.pressure} hPa`;
    sunrise.innerText = new Date(
      weatherInfo?.sys?.sunrise * 1000
    ).toLocaleTimeString();
    sunset.innerText = new Date(
      weatherInfo?.sys?.sunset * 1000
    ).toLocaleTimeString();
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
  }

  const grantAccessButton = document.querySelector("[data-grant-access]");
  grantAccessButton.addEventListener("click", getLocation);

  const searchInput = document.querySelector("[data-searchInput]");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = searchInput.value.trim();
    if (cityName !== "") {
      fetchSearchWeatherInfo(cityName);
    }
  });

  async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      loadingScreen.classList.remove("active");
      suggestionsContainer.classList.add("active");
      userInfoContainer.classList.add("active");
      renderWeatherInfo(data);
    } catch (err) {
      loadingScreen.classList.remove("active");
      alert("Failed to fetch weather data for the searched city.");
    }
  }
  // suggestion wala concept  sara
  const input = document.querySelector("[data-searchInput]");
  const suggestionsContainer = document.querySelector("[data-suggestions]");
  let selectedIndex = -1;

  input.addEventListener("keydown", function (e) {
    const items = suggestionsContainer.querySelectorAll(".suggestion-item");
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateHighlight(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateHighlight(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      }
    }
  });

  function updateHighlight(items) {
    items.forEach((item, index) => {
      item.classList.toggle("active", index === selectedIndex);
      if (index === selectedIndex) {
        item.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function showSuggestions(cities) {
    suggestionsContainer.innerHTML = "";
    selectedIndex = -1;

    if (cities.length === 0) {
      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.textContent = "No results found";
      suggestionsContainer.appendChild(div);
      return;
    }

    cities.forEach(city => {
      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.textContent = city;

      div.addEventListener("click", () => {
        input.value = city;
        suggestionsContainer.innerHTML = "";
      });

      suggestionsContainer.appendChild(div);
    });
  }

  input.addEventListener("input", async function () {
    const query = input.value.trim();
    if (query.length < 2) {
      suggestionsContainer.innerHTML = "";
      return;
    }

    const apiKey = "a1279c3461msh9ea041a4fca92c8p168cf9jsn29e82bc2c491";
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const cities = data.data.map(city => city.name);
      showSuggestions(cities);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  });


// background cahnge
const apiKey = "d1845658f92b31c64bd94f06f7188c9c";
const appBg = document.getElementById('appBackground');

// Set default static background on page load
window.onload = () => {
  appBg.className = 'default-bg'; // default background class
};

// Fetch weather by city name
function getWeather(city) {
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherDesc = data.weather[0].description.toLowerCase();
      setWeatherBackground(weatherDesc);
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
    });
}

// Fetch weather by geolocation
function fetchWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const weatherDesc = data.weather[0].description.toLowerCase();
          setWeatherBackground(weatherDesc);
        });
    }, () => {
      console.warn("Location access denied.");
    });
  } else {
    alert("Geolocation not supported by this browser.");
  }
}

// Update background class based on weather
function setWeatherBackground(description) {
  const formattedClass = description.replace(/\s+/g, '-'); // e.g., "broken clouds" → "broken-clouds"
  appBg.className = ''; // Remove old background
  appBg.classList.add(formattedClass);
}

// Handle city search
document.getElementById('searchBtn').addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput').value.trim();
  if (cityInput !== '') {
    getWeather(cityInput);
  }
});

// Handle location access button
document.getElementById('grantAccessBtn').addEventListener('click', fetchWeatherByLocation);

