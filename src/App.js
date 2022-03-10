import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
        <Weather  defaultCity="Uganda"/>
        <footer>
          <a href="https://github.com/nash-react-weather-app">
            open-sourced </a>
          on github and coded by Hellena.
        </footer>
    </div >
 );
}
