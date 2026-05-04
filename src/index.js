import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <footer>
      This project was coded by{" "}
      <a href="https://github.com/Pezza242" target="_blank" rel="noreferrer">
        Peri Williams-Yearwood
      </a>
      , is open-sourced{" "}
      <a
        href="https://github.com/Pezza242/anime-forecast-app"
        target="_blank"
        rel="noreferrer"
      >
        on GitHub
      </a>{" "}
      , and hosted on Netlify
    </footer>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
