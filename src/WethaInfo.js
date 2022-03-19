import React from "react";
import FormattedDate from "./FormattedDate";
import WethaTemp from "./WethaTemp";
import WeatherImg from "./WeatherImg";

export default function WethaInfo(props) {
    return (
        <div className="WethaInfo">
            <h1> {props.data.city} </h1>
            <ul className="row">
                <li>
                    < FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherImg code={props.data.icon} size={52} />
                        </div>
                        <div className="float-left">
                            <WethaTemp celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li> Precipitation:22%</li>
                        <li>Humidity:{props.humidity}</li>
                        <li>Wind:{props.wind}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}