import React, { Component } from "react";
import { render } from "react-dom";
import WeatherItem from "./WeatherItem.js";
import CurrentWeather from "./CurrentWeather.js";
import "./Weather.css";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import storm from "../img/weather-icons/storm.svg";
import snow from "../img/weather-icons/snow.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import fog from "../img/weather-icons/fog.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import cloudy from "../img/weather-icons/cloudy.svg";

import { TransitionFunction } from "react";

export default class Weather extends Component {

  render() {
    return (
      <>
      <CurrentWeather weatherData = {this.props.fakeWeatherData.list[0]} />
      <div className="hourly_weathers">
        {this.props.fakeWeatherData.list.map((elt,index) => {
          if (index <7 && index>=1){
          return <WeatherItem time={elt.dt_txt} svg={elt.weather[0].main.toLowerCase()} temp={elt.main.temp} />}
           }
         )}
      </div>
      </>
    );
  }
}
