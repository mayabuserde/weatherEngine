import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    
    function temperature(temp) {
        return `${Math.round(temp)}°`;
    }

    function day() {
        let date = new Date((props.data.dt + props.timezone) * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getUTCDay();

        return days[day];
    }
    
    return (
        
        <div className="WeatherForecastDay">
            <div>{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div><span className="max-temp">{temperature(props.data.temp.max)}</span> <span className="min-temp">{temperature(props.data.temp.min)}</span></div>
        </div>
        
    )
}