import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <CurrentWeather />
        <HourlyWeather />
      </div>
    );
  }
}

export default App;
