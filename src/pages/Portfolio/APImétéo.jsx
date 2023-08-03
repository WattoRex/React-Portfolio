import React, { useState } from "react";
import "./APImétéo.css";
import NotFoundImage from "./images/404.png";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [zipCode, setZipCode] = useState("");

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  const fetchWeatherData = () => {
    const apiKey = "e3df682f3be0b09d230dbf20bdf8f437";

    if (!zipCode) {
      setError("Please enter a valid zip code.");
      setWeatherData(null);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=metric&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          setError("Invalid Location! Please check the zip code.");
          setWeatherData(null);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const temperature = `${data.main.temp} °C`;
        const description = data.weather[0].description;
        const humidity = `${data.main.humidity}%`;
        const windSpeed = `${data.wind.speed} m/s`;

        setWeatherData({ temperature, description, humidity, windSpeed });
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <div>
      <header>
        <section>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
        </section>
      </header>

      <div className="container">
        <div className="search-box">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            placeholder="Enter a zip code"
            value={zipCode}
            onChange={handleZipCodeChange}
          />
          <button
            className="fa-solid fa-magnifying-glass"
            onClick={handleSearch}
          ></button>
        </div>

        {error && (
          <div className="not-found">
            <img src={NotFoundImage} alt="Not Found" />
            <p>Invalid Location!</p>
          </div>
        )}

        {weatherData && (
          <div className="weather-box">
            <img src="" alt="Weather Icon" />
            <p className="temperature">{weatherData.temperature}</p>
            <p className="description">{weatherData.description}</p>
          </div>
        )}

        {weatherData && (
          <div className="weather-details">
            <div className="humidity">
              <i className="fa-solid fa-water"></i>
              <div className="text">
                <span>{weatherData.humidity}</span>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i>
              <div className="text">
                <span>{weatherData.windSpeed}</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer>
        <section>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default WeatherApp;
