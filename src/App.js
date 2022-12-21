import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Weather from "./components/Weather";
import Clear from "./img/weather-icons/clear.svg";
//import fakeWeatherData from "./data/FakeWeather.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "london",
      weatherData: null,
    };
  }
  handleInput = (childData) => {
    this.setState({ input: childData });
    if (!childData) {
      alert("please enter a name");
      return;
    }
    this.url =`http://api.openweathermap.org/data/2.5/forecast?q=${childData}&cnt=8&units=metric&appid=0d3f6005d18218cd2cd26e2eb726a537`
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.cod == 404) {
          alert("Please enter a valid data")
        }
        else {
          this.setState({
            weatherData:data
          })
        }
      })
  }
  
  componentWillMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.input}&cnt=8&units=metric&appid=0d3f6005d18218cd2cd26e2eb726a537`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ weatherData: data });
      });
  }

  render() {
    return (
      <div className="app">
        {console.log(this.state.input)}
        <Search handleInput={this.handleInput} />
        {this.state.weatherData ? (
          <Weather weatherData={this.state.weatherData} />
        ) : null}
      </div>
    );
  }
}

export default App;
