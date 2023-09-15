import React, { Component } from "react";
import Search from "./components/Search";
import Details from "./components/Details";
import Content from "./components/Content";
// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

// import clear from "./img/weather-icons/clear.svg";
import "./App.css";
// import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        
        <Search />
        <Content /> 
        <Details />
        
      </div>
    );
  }
}

export default App;
