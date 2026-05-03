import React, { useState } from "react";
import axios from "axios";
import DailyForecast from "./dailyForecast";
import "./weatherForecast.css";

export default function WeatherForecast(props) {
  let [loading, setLoading] = useState(false);
  let [forecast, setForcast] = useState(null);

  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiKey = "aa9f555583ebe9bb2cc64bd6b978ad42";

  function handleResponse(response) {
    setLoading(true);
    setForcast(response.data.list);
    //console.log(response.data.list);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (loading) {
    return (
      <div className="WeatherForecast">
        <DailyForecast data={forecast[0]} />
      </div>
    );
  } else {
    return null;
  }
}
