import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c97d99c2a2767c0b547cd67e1eaedd84";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
