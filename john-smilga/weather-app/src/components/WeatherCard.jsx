// src/components/WeatherCard.js

import React, { useState, useEffect } from 'react';

function WeatherCard({ city }) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa00ba01b20702e72cc8eb3e082bbbca&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                setWeather(data);
                setError(null); // Clear any previous error
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                setError('Failed to fetch weather data'); // Set error message
            });
    }, [city]);

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : weather ? (
                <div>
                    <h2>{city}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].main}</p>
                    <p>Description: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherCard;
