import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row mt-2">
            <ul>
            <li><h1>{props.data.name}</h1></li>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalized">{props.data.description}</li>
            </ul>
                </div>
                <div className="row">
                <div className="col-6 d-flex">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt={props.data.description} /> <span className="temperature">{props.data.temperature}</span> <span className="unit">°C | </span><span className="unit">°F</span>
                </div>
                <div className="col-6">
                <ul>
                <li>
                Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li></ul>
                </div>
                </div>
        </div>
    )
}