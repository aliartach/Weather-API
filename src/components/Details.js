import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import React  from "react";
class Details extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
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
      );
    }
  }


  
  export default Details; 