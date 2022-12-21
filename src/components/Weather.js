import React, { Component } from "react";
import WeatherItem from "./WeatherItem.js";
import CurrentWeather from "./CurrentWeather.js";
import "./Weather.css";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import storm from "../img/weather-icons/storm.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import rain from "../img/weather-icons/rain.svg";

export default class Weather extends Component {
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
          return clear;
      }
    };
    return (

      <>
       <CurrentWeather weatherData = {this.props.weatherData.list[0]}  imageSrc={imageSrc}/>
        <div className="hourly_weathers">
          {this.props.weatherData.list.map((elt, index) => (
            <WeatherItem
              key = {index}
              time={elt.dt_txt}
              svg={elt.weather[0].main.toLowerCase()}
              temp={elt.main.temp}
              imageSrc={imageSrc}
            />
          ))} 
        </div>
      </>
    )
  }
}
