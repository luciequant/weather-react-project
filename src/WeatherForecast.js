import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Friday</div>
          <WeatherIcon code="02d" size={36} />
          <div className="Forecast-temperature">
            <span className="max">20° </span>
            <span className="min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
