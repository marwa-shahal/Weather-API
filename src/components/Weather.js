import React, { Component } from "react";
import WeatherItem from "./WeatherItem.js";
import CurrentWeather from "./CurrentWeather.js";
import "./Weather.css";

export default class Weather extends Component {

  render() {
    return (
      <>
      <CurrentWeather weatherData = {this.props.fakeWeatherData.list[0]} />
      <div className="hourly_weathers">
        {this.props.fakeWeatherData.list.map((elt,index) => {
          if (index>=1 && index<8){
          return <WeatherItem time={elt.dt_txt} svg={elt.weather[0].main.toLowerCase()} temp={elt.main.temp} />}
           }
         )}
      </div>
      </>
    );
  }
}
