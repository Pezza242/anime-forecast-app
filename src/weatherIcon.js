import React from "react";
import { weatherTheme } from "./weatherTheme";

export default function WeatherIcon({ data }) {
  const theme = weatherTheme[data];

  if (!theme) {
    return null;
  } else {
    return (
      <img className="weather-icon" src={theme.icon} alt={theme.description} />
    );
  }
}
