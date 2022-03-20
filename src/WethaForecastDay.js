import React from "react";
import WeatherImg from "./WeatherImg";

export default function WethaForecastDay(props) {
    function maxTemp() {
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
        
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="WethaForecast-day"> {day()} </div>
            <WeatherImg code={props.data.weather[0].icon} size={37} />
            <div className="WethaForecast-temp">
                <span className="max">{maxTemp()} </span>
                <span className="min">{minTemp()} </span>
               
            </div>
        </div>
    );
}