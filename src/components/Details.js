import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import fakeWeatherData from "../fakeWeatherData.json";
import React  from "react";


class Details extends React.Component {

    
    state = {
      input: ""
    };
  
    render() {

        function convert(temperature){
            return temperature - 273.15 }
        function time(string){
            return string.split(" ")[1].slice(0,5);
        }
     
      return (
        <div className="details">
          <div className="container">
            <p>{time(fakeWeatherData.list[5].dt_txt)}</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>{parseInt(convert(fakeWeatherData.list[5].main.temp))}&deg;C</p>
          </div>

          <div className="container">
            <p>{time(fakeWeatherData.list[6].dt_txt)}</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>{parseInt(convert(fakeWeatherData.list[6].main.temp))}&deg;C</p>
          </div>

          <div className="container">
            <p>{time(fakeWeatherData.list[7].dt_txt)}</p>
            <img src={clear} alt="clear"></img>
            <p>{parseInt(convert(fakeWeatherData.list[7].main.temp))}&deg;C</p>
          </div>


          <div className="container">
            <p>{time(fakeWeatherData.list[8].dt_txt)}</p>
            <img src={clear} alt="clear"></img>
            <p>{parseInt(convert(fakeWeatherData.list[8].main.temp))}&deg;C</p>
          </div>


          <div className="container">
            <p>{time(fakeWeatherData.list[9].dt_txt)}</p>
            <img src={clear} alt="clear"></img>
            <p>{parseInt(convert(fakeWeatherData.list[9].main.temp))}&deg;C</p>
          </div>

          <div className="container">
            <p>{time(fakeWeatherData.list[10].dt_txt)}</p>
            <img src={clear} alt="clear"></img>
            <p>{parseInt(convert(fakeWeatherData.list[10].main.temp))}&deg;C</p>
          </div>

          <div className="container">
            <p>{time(fakeWeatherData.list[11].dt_txt)}</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>{parseInt(convert(fakeWeatherData.list[11].main.temp))}&deg;C</p>
          </div>
        </div>  
      );
    }
  }


  
  export default Details; 