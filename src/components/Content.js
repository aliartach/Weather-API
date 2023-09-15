import React from "react";

import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"

class Content extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
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
    );
  }
}
export default Content;
