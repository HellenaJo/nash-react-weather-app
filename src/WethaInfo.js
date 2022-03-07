import React from "react";
import formattedDate from "./formattedDate";

export default function WethaInfo(props) {
    return (
        <div className="WethaInfo">
            <h1> {props.data.city} </h1>
            <ul className="row">
                <li>
                    < formattedDate date={props.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                            src={props.data.imgUrl}
                            alt={props.data.description}
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="temp">
                                {Math.round(props.data.temperature)}
                            </span>
                            <span className="units">°C</span>
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