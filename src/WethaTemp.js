import React, {useState} from "react";

export default function WethaTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event){
 event.preventDefault();
  setUnit("fahrenheit");
}

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WethaTemp">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="units"> °C | <a href="/" onClick={convertToFahrenheit}> °F </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return  (
      <div className="WethaTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a> | °F 
        </span>
      </div>
    );
}
}