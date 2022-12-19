import React from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
      <div className="nav">
        <input
          className="location"
          type="text"
          id="input-name"
          placeholder="Type in a city name"
          onChange={(event) => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          className="search"
          onClick={(event) => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
