import './App.css';

// src/App.js
import React, { useState } from 'react';
import ZipcodeForm from './components/ZipcodeForm'; // Adjust the import path

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      {weatherData ? (
        <div>
          <h2>Weather Data</h2>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      ) : (
        <ZipcodeForm onWeatherData={handleWeatherData} />
      )}
    </div>
  );
}

export default App;
