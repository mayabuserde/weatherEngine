import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
        <div className="container">
        <form className="row">
        <div className="col-9"><input type="search" className="form-control" /></div>
        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
        </form>
        <div className="row">
            <ul>
            <li><h2>New York</h2></li>
            <li>Wednesday 09:28</li>
            <li>Clear Sky</li>
            </ul>
        </div>
        <div className="row">
        <div className="col-6 d-flex">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy" /> <span className="temperature">27</span> <span className="unit">°C | </span><span className="unit">°F</span>
        </div>
        <div className="col-6">
        <ul>
        <li>
        Humidity 77%</li>
        <li>Wind: 0.45 km/h</li></ul>
        </div>
        </div>
        </div>
        </div>
    )
}