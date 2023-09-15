import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"

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
        <div className="header">
           <form>
             <input type="text" placeholder="Type in a city name"></input>
             <button  type="submit">FIND WEATHER</button>
           </form>
        </div>

        <div className="app1">

         <div className="content">
            <img src={mostlycloudy} className="mainpic" alt="mostlycloudy"/>
            
         </div>
         <p className="description">overcast clouds</p>

        
         

         <div className="temperature">
           <container>
             <h2>Temperature</h2>
             <p>10&deg; to 11&deg;C</p>
           </container>
          </div>
         
          <div className="generalInfo">
            <h3>Humidity</h3>
            <p>78%</p>
            <h3>Pressure</h3>
            <p>1008.48</p>
          </div>

        </div>

        <div className="details">
          <div className="container">
            <p>03:00</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>8&deg;C</p>
          </div>

          <div className="container">
            <p>06:00</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>8&deg;C</p>
          </div>

          <div className="container">
            <p>09:00</p>
            <img src={clear} alt="clear"></img>
            <p>8&deg;C</p>
          </div>


          <div className="container">
            <p>12:00</p>
            <img src={clear} alt="clear"></img>
            <p>8&deg;C</p>
          </div>


          <div className="container">
            <p>15:00</p>
            <img src={clear} alt="clear"></img>
            <p>8&deg;C</p>
          </div>

          <div className="container">
            <p>18:00</p>
            <img src={clear} alt="clear"></img>
            <p>8&deg;C</p>
          </div>

          <div className="container">
            <p>21:00</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>8&deg;C</p>
          </div>
        </div>
        </div>
    );
  }
}

export default App;
