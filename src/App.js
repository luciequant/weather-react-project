import React from "react";
import Weather from "./Weather.js";
import "./App.css";
import bgVideo from "./video/sky.mp4";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
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
