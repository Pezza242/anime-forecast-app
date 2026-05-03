import React from "react";
import WeatherIcon from "./weatherIcon";

export default function DailyForecast(props) {
  let p = props.data;

  function maxTemp() {
    return Math.round(p.main.temp_max);
  }

  function minTemp() {
    return Math.round(p.main.temp_min);
  }
  function day() {
    let date = new Date(p.dt * 1000);
    let getDay = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[getDay];
  }

  return (
    <div className="DailyForecast">
      <p className="forecast-day">{day()}</p>
      <div className="forecast-icon">
        <WeatherIcon data={p.weather[0].icon} />
      </div>
      <ul className="temperature-forecast">
        <li className="max-temp">{maxTemp()}º</li>
        <li className="min-temp"> {minTemp()}º</li>
      </ul>
    </div>
  );
}
