import React, { useState } from "react";
import '../styles.css'



function Weather() {


    const apiKey = "178aa5c515ae04838d09b1ef302baac0"
    const [weatherData, setWeatherdata] = useState({})
    const [city, setCity] = useState("")

    const search = (event) => {
        if (event.key==="Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then (
                data => {
                    setWeatherdata(data)
                    setCity("")
                }
            ) 
        }
    }

    return (


        <div className="weatherContainer">
            <input 
            className="location"
            placeholder="Choose a location"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
            />
            {typeof weatherData.main === 'undefined'? (
                <div class = "weatherData"> <p> Choose a location and check the weather! </p>  </div>
            ) :  (
                <div class ="weatherData">
                <p> {weatherData.name} </p>
                <p> {Math.round (weatherData.main.temp)} degrees </p>
                <p>{weatherData.weather[0].description} </p>
                </div>
            )}

         
        </div>
    )
}
export default Weather