import React, { useState } from "react";
import WeatherCard from './WeatherCard';

function WeatherApp() {
    const [cities, setCities] = useState([]);

    const addCity = () => {
        const cityName = prompt("Enter city name");
        if (cityName) {
            setCities([...cities, cityName]);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <button onClick={addCity}>Add City</button>
            <div>
                {cities.map((city, index) => (
                    <WeatherCard key={index} city={city} />
                ))}
            </div>
        </div>
    );

}

export default WeatherApp;