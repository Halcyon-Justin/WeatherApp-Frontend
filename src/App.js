// App.js
import React, { useState } from 'react';
import ZipcodeForm from './components/ZipCodeForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App p-8">
      <div className="flex justify-center items-center flex-col mb-4">
        <h1 className="text-3xl font-bold">7-Day Weather Forecast</h1>
      </div>

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
