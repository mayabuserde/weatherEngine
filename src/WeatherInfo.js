import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row mt-2">
            <ul>
            <li><h1>{props.data.name}</h1></li>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
            </ul>
                </div>
                <div className="row">
                <div className="col-6 d-flex">
                <WeatherIcon code={props.data.icon} size={52} />
                <WeatherTemperature celsius={props.data.temperature} />
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