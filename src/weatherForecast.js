import React, { useState } from "react";
import WeatherIcon from "./weatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loading, setLoading] = useState(false);
  let [forecast, setForcast] = useState(null);

  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoading(true);
  }

  if (loading) {
    return (
      <div className="WeatherForecast">
        <p className="forecast-day">Tue</p>
        <div className="forecast-icon">
          <WeatherIcon />
        </div>
        <ul className="temperature-forecast">
          <li className="max-temp">{Math.round(forecast[0].temp.max)}º</li>
          <li className="min-temp"> {Math.round(forecast[0].temp.min)}º</li>
        </ul>
      </div>
    );
  } else {
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=50fa4024e3b1d5eac2f51ab18a47e997&units=metric`;
    axios.get(apiUrl).catch(handleResponse);
    return null;
  }
}
