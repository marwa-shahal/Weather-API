import React, { Component } from "react";
import { render } from "react-dom";
import "./WeatherItem.css";
export default class WeatherItem extends Component {
  render() {
    return (
      <div className="hourly_weather">
        <time dateTime={this.props.time}>{this.props.time.slice(11, 16)}</time>
        <img src={this.props.imageSrc(this.props.svg)} width="70%" height="70%" />
        <p>{Math.round(this.props.temp)} °C</p>
      </div>
    );
  }
}
