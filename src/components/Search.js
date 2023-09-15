import React from "react";

// import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
import "../App.css"
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="header">
           <form>
             <input type="text" placeholder="Type in a city name"></input>
             <button type="submit">FIND WEATHER</button>
           </form>
        </div>
    );
  }
}
export default Search;
