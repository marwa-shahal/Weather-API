import React, { Component } from "react";
import { render } from "react-dom";
import "./CurrentWeather.css";

//import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import storm from "../img/weather-icons/storm.svg";
import snow from "../img/weather-icons/snow.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import fog from "../img/weather-icons/fog.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import rain from "../img/weather-icons/rain.svg";

export default class WeatherItem extends Component {
  render() {
    const imageSrc = (image) => {
      switch (image) {
        case "clouds":
          return cloudy;
        case "mostlycloudy":
          return mostlycloudy;
        case "partlycloudy":
          return partlycloudy;
        case "snow":
          return snow;
        case "storm":
          return storm;
        case "rain":
          return rain;
        case "fog":
          return fog;
        case "drizzle":
          return drizzle;
        case "clear":
          return clear
      }
    };
    return (
      <div className="current_weather">
        <img src={imageSrc(this.props.weatherData.weather[0].main.toLowerCase())} width="300px" height="300px" />
        <h2>overcast clouds</h2>
        <h1>
          Temperature <span>10° to 11°C</span>
        </h1>
        <p>
          <b>Humidity</b> <span>{this.props.weatherData.main.humidity}%</span>
          <b>Pressure</b>
          <span>{this.props.weatherData.main.pressure}</span>
        </p>
      </div>
    );
  }
}
