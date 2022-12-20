import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Weather from "./components/Weather";
import Clear from "./img/weather-icons/clear.svg"
import fakeWeatherData from "./data/FakeWeather.json";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        {/* <CurrentWeather fakeWeatherData={fakeWeatherData}/> */}
        <Weather fakeWeatherData={fakeWeatherData} />
      </div>
    );
  }
}

export default App;
