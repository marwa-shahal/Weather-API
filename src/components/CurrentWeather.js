import React, { Component } from "react";
import { render } from "react-dom";
import "./CurrentWeather.css";

export default class WeatherItem extends Component {
  render() {
    return (
      <div className="current_weather">
        <img src={this.props.imageSrc(this.props.weatherData.weather[0].id)} width="20%" height="20%" />
        <h2>overcast clouds</h2>
        <h1>
          Temperature <span>{Math.round(this.props.weatherData.main.temp_min)} to {Math.round(this.props.weatherData.main.temp_max)}°C</span>
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
