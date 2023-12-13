import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const ZipcodeForm = () => {
  const [zipcode, setZipcode] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to fetch weather data
      const response = await fetch(`http://localhost:8080/weather/${zipcode}`);
      const data = await response.json();

      // Update the weather data in the state
      setWeatherData(data);
      // Clear any previous errors
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded shadow-md">
        {/* Zipcode input */}
        <label className="block mb-4">
          Zipcode:
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            id="zipcode"
            name="zipcode"
            className="block w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </label>

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {/* Display error message if an error occurs */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display weather data using WeatherApp component */}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default ZipcodeForm;
