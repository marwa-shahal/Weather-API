import React, { Component } from "react";
import { render } from "react-dom";
import "./CurrentWeather.css";

export default class WeatherItem extends Component {
  render() {
    return (
      <div className="current_weather">
        <img src={this.props.imageSrc(this.props.weatherData.weather[0].main.toLowerCase())} width="300px" height="300px" />
        <h2>overcast clouds</h2>
        <h1>
          Temperature <span>{Math.round(((this.props.weatherData.main.temp_min- 32) * 5/ 9))} to {Math.round(((this.props.weatherData.main.temp_max- 32) * 5/ 9))}°C</span>
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
