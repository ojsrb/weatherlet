function main() {
    try {
        const apikey = "394b621da2fc2335ee138d7d02b155e6";
        const city = prompt("City:").toUpperCase();
        const state = prompt("State code:").toUpperCase();
        const country = prompt("Country code:").toUpperCase();
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apikey}`;
        const geoResponse = fetch(geoUrl);
        const data = geoResponse.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const response = fetch(url);
        const weatherData = response.json();
        const message = `Today's weather in ${city}, ${state} is ${weatherData.weather[0].description} with a temperature of ${Math.round(weatherData.main.temp - 273.15)}°C. \n Visibility is ${weatherData.visibility}m. \n Wind speed is ${weatherData.wind.speed}m/s. \n Humidity is ${weatherData.main.humidity}%. \n Pressure is ${weatherData.main.pressure}hPa. \n Clouds are at ${weatherData.clouds.all}%. \n Sunrise is at ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}. \n Sunset is at ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}.`;
        alert(message);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please check your inputs.");
    }
}
main();