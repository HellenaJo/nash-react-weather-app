import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
        <Weather defaultCity="Uganda" />
        <footer>
        <a rel="noreferrer"
          href="https://github.com/nash-react-weather-app" target="_blank">
        open-sourced
      </a>
          on github and coded by Hellena.
      </footer>
    </div >
 );
}
