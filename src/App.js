import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
        <Weather defaultCity="Uganda" />
        <footer> 
        This project was coded by Hellena and is {" "}
        <a href="https://github.com/nash-react-weather-app" rel="noreferrer" target="_blank">
          {" "}open-sourced on GitHub </a> and {" "}
        <a href="https://ecstatic-murdock-293965.netlify.app/" target="_blank" rel="noreferrer">
       {" "} hosted on Netlify 
        </a>
      </footer>
    </div >
 );
}