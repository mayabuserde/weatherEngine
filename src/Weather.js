import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {


    

let [weather, setWeather] = useState({ready: false});
    function displayWeather(response) {
        setWeather({
            ready: true,
            date: new Date(response.data.dt * 1000),
            name: response.data.name,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${
                response.data.weather[0].icon
              }@2x.png`,

            
        });

    }
    

    if(weather.ready) {
    return (
        <div className="Weather">
        <div className="container">
        <form className="row">
        <div className="col-9"><input type="search" className="form-control" /></div>
        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
        </form>
        <WeatherInfo data={weather} />
       
        </div>
        </div>
        
    ) } else {
        const ApiKey = "ffa66c6f94c53b49251ff2fd2a6dec80";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${ApiKey}`;
        axios.get(ApiUrl).then(displayWeather);

        return (
            <h1>Loading ...{props.home}</h1>
        )
    }

}