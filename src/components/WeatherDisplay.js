import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  console.log(weatherData);
  const today = new Date(); // Get today's date
  const sortedHighLows = weatherData.highLows?.sort((a, b) => new Date(a.day) - new Date(b.day)) || [];

  return (
    <div>
      {sortedHighLows.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {sortedHighLows.map((dayData, index) => {
            let dayLabel;

            if (index === 0) {
              dayLabel = 'Today';
            } else if (index === 1) {
              dayLabel = 'Tomorrow';
            } else {
              // Adjust the logic to use an array of weekday names
              const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              dayLabel = weekdays[(today.getDay() + index) % 7];

              // Check if it's the last object and add "Next"
              if (index === sortedHighLows.length - 1) {
                dayLabel = 'Next ' + dayLabel;
              }
            }

            return (
              <div key={dayData.day} className="flex-shrink-0 w-48 p-4 border rounded-md m-4 text-center">
                <h2 className="text-xl font-semibold mb-2">{dayLabel}</h2>
                <p className="mb-2">High: {dayData.highTemperature}°F</p>
                <p>Low: {dayData.lowTemperature}°F</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-red-500 text-center">No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
