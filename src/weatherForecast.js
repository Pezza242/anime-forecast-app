import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <p className="forecast-day">Tue</p>
      <div className="forecast-icon">
        <WeatherIcon />
      </div>
      <ul className="temperature-forecast">
        <li className="max-temp">18º</li>
        <li className="min-temp"> 13º</li>
      </ul>
    </div>
  );
}
