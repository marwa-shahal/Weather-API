import React, { Component } from "react";
import { render } from "react-dom";
import WeatherItem from "./WeatherItem.js";
import "./HourlyWeather.css";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

export default class Weather extends Component {
  render() {
    return (
      <div className="hourly_weathers">
        <WeatherItem time={"03:00"} svg={mostlycloudy} temp={"8°C"} />
        <WeatherItem time={"06:00"} svg={mostlycloudy} temp={"9°C"} />
        <WeatherItem time={"09:00"} svg={clear} temp={"14°C"} />
        <WeatherItem time={"12:00"} svg={clear} temp={"17°C"} />
        <WeatherItem time={"15:00"} svg={clear} temp={"18°C"} />
        <WeatherItem time={"18:00"} svg={clear} temp={"16°C"} />
        <WeatherItem time={"21:00"} svg={mostlycloudy} temp={"13°C"} />
      </div>
    );
  }
}
