/* eslint-disable react/jsx-no-undef */
import './App.css';

import React, { useState } from 'react';
import ZipcodeForm from './components/ZipcodeForm';
import WeatherDisplay from './components/WeatherDisplay'; // Adjust the import path

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      {/* Render ZipcodeForm component with onWeatherData prop */}
      <ZipcodeForm onWeatherData={handleWeatherData} />
      {weatherData && (
        // Render WeatherDisplay component with weatherData
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
