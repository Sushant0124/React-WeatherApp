import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './BoxInfo.css';

export default function BoxInfo({ weatherData }) {
    // Image URLs for different weather conditions
    const images = {
        sunny: "https://images.unsplash.com/photo-1649326887647-75e132d19b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bm55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
        rainy: "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hot: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
        cold: "https://images.unsplash.com/photo-1667298295305-7ac615519b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww",
        snow: "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
    };

    // Determine the appropriate image based on weather data
    const getWeatherImage = () => {
        if (weatherData.condition.toLowerCase().includes('sunny')) return images.sunny;
        if (weatherData.condition.toLowerCase().includes('rain')) return images.rainy;
        if (weatherData.temperature >= 30) return images.hot;
        if (weatherData.temperature <= 0) return images.snow;
        return images.cold; // Default image
    };

    // Render nothing if no weather data
    if (!weatherData) {
        return null;
    }

    return (
        <div className="box-info">
            <Card>
                <CardMedia
                    className="weather-image"
                    image={getWeatherImage()}
                    title={weatherData.condition}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather in {weatherData.city}, {weatherData.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Condition: {weatherData.condition}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Temperature: {weatherData.temperature}°C
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Feels Like: {weatherData.feelsLike}°C
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Humidity: {weatherData.humidity}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Wind Speed: {weatherData.windSpeed} kph
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Wind Direction: {weatherData.windDir}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
