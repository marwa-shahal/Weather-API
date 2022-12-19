import React, { Component } from "react";
import { render } from "react-dom";
import "./CurrentWeather.css";

import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

export default class WeatherItem extends Component {
  render() {
    return (
      <div className="current_weather">
        <img src={mostlycloudy} width="300px" height="300px" />
        <h2>overcast clouds</h2>
        <h1>
          Temperature <span>10° to 11°C</span>
        </h1>
        <p>
          <b>Humidity</b> <span>78%</span>
          <b>Pressure</b>
          <span>100848</span>
        </p>
      </div>
    );
  }
}
