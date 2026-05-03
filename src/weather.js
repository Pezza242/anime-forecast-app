import React, { useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";
import moment from "moment";
import Clock from "./clock";
import SearchForm from "./searchForm";
import WeatherInfo from "./weatherInfo";
import { weatherTheme } from "./weatherTheme";
import WeatherIcon from "./weatherIcon";
import WeatherForecast from "./weatherForecast";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loading: false });
  const [city, setCity] = useState("London");
  let date = moment().format("dddd Do MMMM YYYY");
  const theme = weatherTheme[weatherData.icon] || {};

  function handleResponse(response) {
    let d = response.data;

    setWeatherData({
      loading: true,
      city: d.city,
      coords: d.coordinates,
      temperature: d.temperature.current,
      humidity: d.temperature.humidity,
      wind: d.wind.speed,
      icon: d.condition.icon,
      description: d.condition.description,
    });
  }
  function searchCity() {
    let apiKey = "eb79bof31898546ffea432d4bb90t390";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  useEffect(() => {
    if (theme.background) {
      document.body.style.backgroundImage = `url(${theme.background})`;
      document.body.style.transition = "background-image 0.5s ease-in-out";
    }
  }, [theme.background]);

  if (!weatherData.loading) {
    return searchCity();
  }

  return (
    <div className="weather" style={{ backgroundColor: theme.box }}>
      <header
        className="weather-header"
        style={{ backgroundColor: theme.colour }}
      >
        <p className="date">{date}</p>
      </header>
      <SearchForm onSubmit={handleSubmit} onChange={updateCity} theme={theme} />
      <hr id="line-1" />
      <Clock theme={theme} />
      <WeatherIcon data={weatherData.icon} />
      <WeatherInfo data={weatherData} theme={theme} />
      <hr id="line-2" />
      <WeatherForecast coords={weatherData.coords} theme={theme} />
    </div>
  );
}
