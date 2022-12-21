import React from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    searchInput: ""
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
            this.setState({ searchInput: event.target.value });
          }}
        />
        <button
          className="search"
          onClick={(event) => {
            this.props.handleInput(this.state.searchInput);
          }}
        >
          FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
