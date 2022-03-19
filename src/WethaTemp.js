import React from "react";

export default function WethaTemp(props) {
  return  (
      <div className="WethaTemp">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
            °C
        </span>
      </div>
    );
}