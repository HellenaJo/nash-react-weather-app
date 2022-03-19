import React, { useState } from "react";
import axios from "axios";
import WethaInfo from "./WethaInfo";
import "./Weather.css";
import WethaForecast from "./WethaForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(props.defaultCity);

    function bringResponse(response) {
        setWeatherData({
            ready: true,
            coordinates:response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.main.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,   
        });
    }

    function bringSubmit(event) {
        event.preventDefault();
        search();
    }
    
    function handleCityChange(event) {
        setCity(event.target.value);
    }
        
    function search() {
        let apiKey = "70eb5822db0e7a548a59c84b59fa1550";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(bringResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={bringSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Your city is.."
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WethaInfo data={weatherData} />
                <WethaForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search();
        return "Loading..."
    }
}