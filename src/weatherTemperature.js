import React from "react";

export default function WeatherTemperature(props) {
  return (
    <h2 className="temperature">
      {Math.round(props.temp)}
      <span className="units">ºC</span>
    </h2>
  );
}
