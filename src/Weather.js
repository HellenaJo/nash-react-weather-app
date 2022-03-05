import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function bringResponse(reponse){
    setWeatherData({
        temperature: response.data.main.temp,
        wind: response.data.main.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "https://ss1.gstatic.com/onebox/weather/64/partly_clloudy.png"
    });
    setReady(true);
}

if (ready) {
    return (
      <div className="Weather">
            <form> 
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Your city is.."
                            className="form-control"
                            autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                     </div>
            </form>
            
            <h1> {weatherData.city} </h1>
        <ul className="row">
                <li>
                    Saturday 12:52
                </li>
                <li className="text-capitalize">
                {weatherData.description}
                </li>
        </ul>
                <div className="row mt-3">
                     <div className="col-6">
                    <div className="clearfix">
            <img
                            src={weatherData.imgUrl}
                            alt={weatherData.description}
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="temp">
                                {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">°C</span>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                     <ul>
                        <li> Precipitation:22%</li>
                        <li>Humidity:{weatherData.humidity}</li>
                        <li>Wind:{weatherData.wind}</li>
                    </ul>
                </div>

        </div>
      </div>
    );
} else {
    const apiKey = "70eb5822db0e7a548a59c84b59fa1550";
    let city = "Uganda";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(bringResponse);

    return "Loading..";
 }
}