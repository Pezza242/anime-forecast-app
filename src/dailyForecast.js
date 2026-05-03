import React from "react";
import WeatherIcon from "./weatherIcon";

export default function DailyForecast(props) {
  let p = props.data;

  function maxTemp() {
    return Math.round(p.temperature.maximum);
  }

  function minTemp() {
    return Math.round(p.temperature.minimum);
  }
  function daysOfWeek() {
    let date = new Date(p.time * 1000);
    let getDay = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[getDay];
  }

  return (
    <div className="DailyForecast">
      <p className="forecast-day">{daysOfWeek()}</p>
      <div className="forecast-icon">
        <WeatherIcon data={p.condition.icon} />
      </div>
      <ul className="temperature-forecast">
        <strong style={{ color: props.theme.colour }}>
          <li className="max-temp">{maxTemp()}º</li>
        </strong>
        <li className="min-temp"> {minTemp()}º</li>
      </ul>
    </div>
  );
}
