import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState('');
    let getWeather=async(city)=>{
        const url = `https://api.weatherapi.com/v1/current.json?key=a821c6dc51b24f9a814172649240107&q=${city}&aqi=no`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let result={
            city: data.location.name,
            country: data.location.country,
            temperature: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            humidity: data.current.humidity,
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
            windSpeed: data.current.wind_kph,
            windDir: data.current.wind_dir,
            };
            console.log(result);
            return result;
    }
   

    // Handler for input change
    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle search logic here
        console.log(`Searching weather for city: ${city}`);
        // Reset the input after submission (optional)
        setCity('');
        let result=await getWeather(city);
        updateInfo(result);
    };

    return (
        <div className="search-box">
            
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleInputChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}
