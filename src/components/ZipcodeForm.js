import React, { useState } from 'react';

const ZipcodeForm = ({ onWeatherData }) => {
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to fetch weather data
      const response = await fetch(`https://x44bmq914m.execute-api.us-east-2.amazonaws.com/prod/weather/${zipcode}`, { method: 'GET', credentials: 'include' });
      const data = await response.json();

      // Update the weather data using the callback
      onWeatherData(data);
      // Clear any previous errors
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center p-8">
      {/* Zipcode input */}
      <div className="flex items-center space-x-4">
        <label className="text-xl">Zipcode:</label>
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          id="zipcode"
          name="zipcode"
          className="w-32 p-2 border border-gray-300 rounded" // Added margin-right
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ml-2">
        Submit
      </button>

      {/* Display error message if an error occurs */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ZipcodeForm;
