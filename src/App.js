import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/luciequant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucie Quantová
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/luciequant/weather-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
