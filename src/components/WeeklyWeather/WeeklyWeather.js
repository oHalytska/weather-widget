import React from 'react';
import './WeeklyWeather.css';

const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const tempArr = [14, 15, 23, 45, 12, 12, 34];

const WeeklyWeather = () => {
  const weekItems = week.map(day => (
    <div>
      <li>{day}</li>
    </div>
  ));

  const tempItems = tempArr.map(value => (
    <div>
      <li>{value}</li>
    </div>
  ));
  return (
    <div className="week-container">
      <h2>Next 7 days</h2>
      <div>
        <div className="week-items">
          <div className="item lef-cl">{weekItems}</div>
          <div className="item right-cl"> {tempItems}</div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyWeather;
