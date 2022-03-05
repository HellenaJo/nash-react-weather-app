import React from "react";
import "./Weather.css";

export default function Weather() {
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
            
<h1> Uganda</h1>
        <ul className="row">
                <li>
                    Saturday 12:52
                </li>
                <li>
                    Mostly cloudy
                </li>
        </ul>
                <div className="row mt-3">
                     <div className="col-6">
                    <div className="clearfix">
            <img
              src="https://ss1.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="Mostly-cloudy"
                            className="float-left"
                        />
                        <div className="float-left">
                    <span className="temp">27</span>
                    <span className="units">°C</span>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                     <ul>
                        <li> Precipitation:22%</li>
                        <li>Humidity:8%</li>
                        <li>Wind:26km/h</li>
                    </ul>
                </div>

        </div>
      </div>
    );
 }
