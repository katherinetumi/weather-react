import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Weather App</h1>
          <Weather defaultCity="Pretoria" />
          <footer>
            This project was coded by Itumeleng Katherine Kolwane and is on{" "}
            <a
              href="https://github.com/katherinetumi/weather-react"
              target="_blank"
            >
              open-sourced on Github
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
