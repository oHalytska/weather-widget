import React from 'react';
import './App.css';
import TodayWeather from './components/TodayWeather/TodayWeather';
import Form from './components/Form/Form';
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';

const API_KEY = '73e71174d36efc315b79be6fc7494381';

function App() {
  return (
    <div className="container">
      <div className="main-block">
        <TodayWeather />
      </div>
      <div className="right-block">
        <Form />
        <WeeklyWeather />
      </div>
    </div>
  );
}

export default App;
