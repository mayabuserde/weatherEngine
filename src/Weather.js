import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {


    
let [city, setCity] = useState(props.defaultCity);

let [weather, setWeather] = useState({ready: false});
    function displayWeather(response) {
        setWeather({
            ready: true,
            //to get local time zone add timezone data to UTC timestamp
            date: new Date((response.data.dt + response.data.timezone) * 1000),
            name: response.data.name,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            coordinates : response.data.coord,

        });

    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    function search() {
        const ApiKey = "ffa66c6f94c53b49251ff2fd2a6dec80";
        let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;
            axios.get(ApiUrl).then(displayWeather);
    }

    if (weather.ready) {
    return (
        <div className="Weather">
        <div className="container">
        <form className="row mb-3 mt-2" onSubmit={handleSubmit}>
        <div className="col-9"><input type="search" className="form-control" onChange={updateCity} /></div>
        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
        </form>
        <WeatherInfo data={weather} />
       <WeatherForecast coordinates={weather.coordinates}/>
        </div>
        </div>
        
    ) } else {
       search();

        return (
            <h1>Loading ...</h1>
        )
    }

}