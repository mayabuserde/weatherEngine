import React, {useState} from "react";

export default function WeatherTemperature(props) {

    const [unit, setUnit] = useState('celsius');

    function showFarenheit(event) {
        event.preventDefault();
        setUnit('farenheit');
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function setFarenheit() {
        let farenheit = (props.celsius *9/5) + 32;
        return Math.round(farenheit);
    }

    if(unit === 'celsius') {
        return (
        <div className="WeatherTemperature d-flex">
            <span className="temperature">{props.celsius}</span>
            <span className="unit mt-1">°C|<a href="/" onClick={showFarenheit} className="text-decoration-none">°F</a></span>
        </div>
    )} else {
    
        return (
            <div className="WeatherTemperature d-flex">
                <span className="temperature">{setFarenheit()}</span>
                <span className="unit mt-1"><a href="/" onClick={showCelsius} className="text-decoration-none">°C</a>|°F</span>
            </div>
        ) 
    }
    
}