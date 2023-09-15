import React, { useEffect, useState } from 'react'
import axios from 'axios';
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"

function Content() {

  const [data,setData]=useState({})

  const getWetherDetails=(cityName)=>{


    const apikey = "e76027b9a5f5fe4859a5352ed5934bf3"

    if (!cityName)return
    const apiURL= "http://api.openweathermap.org/data/2.5/weather?q="+cityName +"&cnt=8&units=metric&appid="+apikey

    axios.get(apiURL).then((res)=>{
      console.log("resposne",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }

useEffect(()=>{
  getWetherDetails("Beirut");

}, [])

return (
           <div className="app1">
           <div className="content">
              <img src={mostlycloudy} className="mainpic" alt="mostlycloudy"/>
            </div>
           <p className="description">overcast clouds</p>
     
      
           <div className="temperature">
             <div className="container1">
               <h2>Temperature</h2>
              <p> { data.main?.temp_max}</p>
              <p> { data.main?.temp_min}</p>
         
             </div>
            </div>
      
            <div className="generalInfo">
              <h3>Humidity</h3>
              <p>{data.main?.humidity}</p>
              <h3>Pressure</h3>
              <p>{data.main?.pressure}</p>
            </div>
          </div>
       );
     }
   
export default Content;
