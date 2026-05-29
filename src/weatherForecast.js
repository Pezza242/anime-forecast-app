import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./dailyForecast";
import "./weatherForecast.css";

export default function WeatherForecast(props) {
  let [loading, setLoading] = useState(false);
  let [forecast, setForcast] = useState(null);

  let longitude = props.coords.longitude;
  let latitude = props.coords.latitude;
  let apiKey = "eb79bof31898546ffea432d4bb90t390";

  useEffect(() => {
    setLoading(false);
  }, [props.coords]);

  function handleResponse(response) {
    setLoading(true);
    setForcast(response.data.daily);
  }

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (loading) {
    return (
      <div id="WeatherForecast" className="container-fluid">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <DailyForecast data={dailyForecast} theme={props.theme} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
