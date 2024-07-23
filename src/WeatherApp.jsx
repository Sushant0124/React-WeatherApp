import SearchBox from "./SearchBox";
import BoxInfo from './BoxInfo';
import { useState } from 'react';

export default function WeatherApp(){
    let [weather,setWeather]=useState({
    city: "Agra",
  condition: "Sunny",
  country: "India",
  feelsLike: 44.1,
  humidity: 45,
  icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
  temperature: 37.1,
  windDir: "E",
  windSpeed: 14.4

    });

    let updateInfo=(newInfo)=>{ 
    setWeather(newInfo);
}
    return (
        <div className="WeatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <BoxInfo weatherData={weather}/>
        </div>
    );
}