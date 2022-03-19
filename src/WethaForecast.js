import React, { useState, useEffect } from "react";
import "./WethaForecast.css";
import axios from "axios";
import WethaForecastDay from "./WethaForecastDay";

export default function WethaForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
          <div className="WethaForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 7) {
                            return (
                                <div className="col" key={index}>
                                    <WethaForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
            </div>
          </div>
        );
     
    } else {
       
        let apiKey = "70eb5822db0e7a548a59c84b59fa1550";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}