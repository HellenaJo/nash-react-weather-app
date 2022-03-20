import React from "react";

export default function WethaTemp(props) {
  return  (
      <div className="WethaTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
            °C
        </span>
      </div>
    );
}