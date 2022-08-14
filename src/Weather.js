import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny weather"
          />
        </div>
        <div className="col-2">
          <p> 26ºC | ºF</p>
        </div>
        <div className="col-2">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 39%</li>
            <li>Wind: 2 m/s</li>
          </ul>
        </div>
        <div className="col-6 text-end">
          <h1>New York</h1>
          <ul>
            <li>Sunday 12:00</li>
            <li>Sunny</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
