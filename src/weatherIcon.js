import React from "react";
import { weatherTheme } from "./weatherTheme";

export default function WeatherIcon({ data }) {
  return (
    <img
      className="weather-icon"
      src={weatherTheme[data].icon}
      alt={weatherTheme.description}
      border="0"
    />
  );
}
