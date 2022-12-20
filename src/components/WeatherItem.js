import React, { Component } from "react";
import { render } from "react-dom";
import "./WeatherItem.css";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import storm from "../img/weather-icons/storm.svg";
import snow from "../img/weather-icons/snow.svg";
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
      <div className="hourly_weather">
        <time datetime={this.props.time}>{this.props.time.slice(11, 16)}</time>
        <img src={imageSrc(this.props.svg)} width="100px" height="150px" />
        <p>{Math.round(((this.props.temp - 32) * 5) / 9)} °C</p>
      </div>
    );
  }
}
