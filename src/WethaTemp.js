import React from "react";

export default function WethaTemp() {
  return  (
      <div className="WethaTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a> 
        </span>
      </div>
    );

}