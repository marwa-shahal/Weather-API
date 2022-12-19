import React, { Component } from "react";
import { render } from "react-dom";
import "./WeatherItem.css";

export default class WeatherItem extends Component {
  render() {
    return (
      <div className="hourly_weather">
        <time datetime={this.props.time}>{this.props.time}</time>
        <img src={this.props.svg} width="100px" height="150px" />
        <p>{this.props.temp}</p>
      </div>
    );
  }
}
