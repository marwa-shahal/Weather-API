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
    const imageSrc = (id) => {
        if (id<=805 && id>801){return mostlycloudy;}
        if (id===801){return partlycloudy;}
        if (id<=699 && id>=600){return snow;}
        if (id<=300){return storm;}
        if (id<=599 && id>=500){return rain;}
        if (id<=799 && id>=700){return fog;}
        if (id<=499 && id>300){return drizzle;}
        if (id===800){return clear;}
      };
    return (
      <>
        <CurrentWeather
          weatherData={this.props.weatherData.list[0]}
          imageSrc={imageSrc}
        />
        <div className="hourly_weathers">
          {this.props.weatherData.list.map((elt, index) => {
            if (index >= 1) {
              return (
                <WeatherItem
                  key={index}
                  time={elt.dt_txt}
                  svg={elt.weather[0].id}
                  temp={elt.main.temp}
                  imageSrc={imageSrc}
                />
              );
            }
          })}
        </div>
      </>
    );
  }
}
