import React, { useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";
import moment from "moment";
import Clock from "./clock";
import SearchForm from "./searchForm";
import WeatherInfo from "./weatherInfo";
import Loader from "./loader";
import { weatherTheme } from "./weatherTheme";
import WeatherIcon from "./weatherIcon";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loading: false });
  const [city, setCity] = useState("London");
  let date = moment().format("dddd Do MMMM YYYY");
  const theme = weatherTheme[weatherData.icon] || {};

  function handleResponse(response) {
    let d = response.data;
    setWeatherData({
      loading: true,
      city: d.name,
      temperature: d.main.temp,
      humidity: d.main.humidity,
      wind: d.wind.speed,
      icon: d.weather[0].icon,
      description: d.weather[0].description,
    });
  }
  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50fa4024e3b1d5eac2f51ab18a47e997&units=metric`;
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
    searchCity();
    return <Loader />;
  }

  return (
    <div className="weather">
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
    </div>
  );
}
