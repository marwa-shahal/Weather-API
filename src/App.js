import React, { Component } from "react";
import Search from "./components/Search";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Marwa"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
         <div className="header">
        <nav> 
          <form>
          <input className="location" type="text" placeholder="Type in a city name"/>
          <input  className="search" type="submit" value="FIND WEATHER" />
          </form>
         </nav>
         </div>
         <main>
          <div className="current_weather">
            <img src={mostlycloudy} width="300px" height="300px" />
            <h2>overcast clouds</h2>
            <h1>Temperature <span>10° to 11°C</span></h1>
            <p><b>Humidity</b> <span>78%</span><b>Pressure</b><span>100848</span></p>
          </div>
          <div className="hourly_weathers">
            <div className="hourly_weather">
              <time datetime="03:00">03:00</time>
              <img src={mostlycloudy} width="100px" height="150px" />
              <p>8°C</p>
            </div>
            <div className="hourly_weather">
            <time datetime="06:00">06:00</time>
            <img src={mostlycloudy} width="100px" height="150px" />
            <p>9°C</p>
            </div>
            <div className="hourly_weather">
            <time datetime="09:00<">09:00</time>
            <img src={clear} width="100px" height="150px" />
            <p>14°C</p>
            </div>
            <div className="hourly_weather">
            <time datetime="12:00">12:00</time>
            <img src={clear} width="100px" height="150px" />
            <p>17°C</p>
            </div>
            <div className="hourly_weather">
            <time datetime="15:00<">15:00</time>
            <img src={clear} width="100px" height="150px" />
            <p>18°C</p>
            </div>
            <div className="hourly_weather">
            <time datetime="18:00<">18:00</time>
            <img src={clear} width="100px" height="150px" />
            <p>16°C</p>
            </div>
            <div className="hourly_weather">
            <time datetime="06:00">21:00</time>
            <img src={mostlycloudy} width="100px" height="150px" />
            <p>13°C</p>
            </div>
          
          </div>
         </main>
      </div>
    );
  }
}

export default App;
