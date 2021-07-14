import React, {useState} from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    let [timezone, setTimezone] = useState(null);

    function displayForecast(response) {
        setForecast(response.data.daily);
        setTimezone(response.data.timezone_offset);
        setLoaded(true);
        console.log(response.data);
    }

if (loaded) {
    
    return (
        <div className="WeatherForecast">
        <div className="row">
        {forecast.map((dayForecast, index)=> {
            if (index < 5) {
           return (
            <div className="col" key={index}>
                <WeatherForecastDay data={dayForecast} timezone={timezone} />
                </div>)} else return null;
        })}
        
        </div>
</div>
    )} else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
        const ApiKey = "ffa66c6f94c53b49251ff2fd2a6dec80";
        let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`;
            axios.get(ApiUrl).then(displayForecast);
        return null;
    }
    
}