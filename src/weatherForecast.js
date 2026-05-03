import React, { useState } from "react";
import axios from "axios";
import "./weatherForecast.css";

export default function WeatherForecast(props) {
  let [loading, setLoading] = useState(false);
  //let [forecast, setForcast] = useState(null);

  //let longitude = props.coords.lat;
  //let latitude = props.coords.lon;
  //let apiKey = "aa9f555583ebe9bb2cc64bd6b978ad42";

  function handleResponse(response) {
    setLoading(true);
    console.log(response.data.list);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=0.1276&lon=51.5072&appid=aa9f555583ebe9bb2cc64bd6b978ad42`;
  axios.get(apiUrl).then(handleResponse);

  if (loading) {
    return (
      <div className="WeatherForecast">
        <p className="forecast-day">Tue</p>
        <div className="forecast-icon"></div>
        <ul className="temperature-forecast">
          <li className="max-temp">18º</li>
          <li className="min-temp"> 13º</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
