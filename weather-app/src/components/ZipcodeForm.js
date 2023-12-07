import React, { useState } from 'react';

const ZipcodeForm = ({ onWeatherData }) => {
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to fetch weather data
      const response = await fetch(`http://localhost:8080/weather/${zipcode}`);
      const data = await response.json();

      // Update the weather data in the parent component
      onWeatherData(data);
      // Clear any previous errors
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Zipcode input */}
        <label>
          Zipcode:
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </label>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Display error message if an error occurs */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ZipcodeForm;
