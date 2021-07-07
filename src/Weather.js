import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
let [weather, setWeather] = useState({ready: false});

    const ApiKey = "ffa66c6f94c53b49251ff2fd2a6dec80";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${ApiKey}`;

    function displayWeather(response) {
        setWeather({
            ready: true,
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
    axios.get(ApiUrl).then(displayWeather);

    if(weather.ready) {
    return (
        <div className="Weather">
        <div className="container">
        <form className="row">
        <div className="col-9"><input type="search" className="form-control" /></div>
        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
        </form>
        <div className="row">
            <ul>
            <li><h1>{weather.name}</h1></li>
            <li>Wednesday 09:28</li>
            <li className="text-capitalized">{weather.description}</li>
            </ul>
        </div>
        <div className="row">
        <div className="col-6 d-flex">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt={weather.description} /> <span className="temperature">{weather.temperature}</span> <span className="unit">°C | </span><span className="unit">°F</span>
        </div>
        <div className="col-6">
        <ul>
        <li>
        Humidity: {weather.humidity} %</li>
        <li>Wind: {weather.wind} km/h</li></ul>
        </div>
        </div>
        </div>
        </div>
    ) } else {
        return (
            <h1>Loading ...</h1>
        )
    }

}