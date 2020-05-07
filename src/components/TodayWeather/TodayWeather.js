import React from 'react';
import './TodayWeather.css';

const TodayWeather = () => {
  return (
    <div className="main-info">
      <div className="titles">
        <p className="city-title">Tallinn, Estonia</p>
        <p className='date-title'>May 5</p>
      </div>
      <div className="current-weather">
        <div className="current-weather__temperature">10°</div>
        <div className="current-weather__status">sunny</div>
      </div>
      <div className="weather-details">
        <div>
          <p>cloudy</p>
          <p>7%</p>
        </div>
        <div>
          <p>humidity</p>
          <p>83%</p>
        </div>
        <div>
          <p>wind</p>
          <p>6 km/h</p>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
