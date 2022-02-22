import React, { useState } from "react";
import '../styles.css'



function Weather() {


    const apiKey = "178aa5c515ae04838d09b1ef302baac0"
    const [weatherData, setWeatherdata] = useState({})
    const [city, setCity] = useState("")

    const search = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherdata(data)
                    setCity("")
                }
            )
        }
    }

    return (


        <div className="weatherContainer">
            <div className="search">
                <input
                    className="location"
                    placeholder="Choose a location"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    onKeyPress={search}
                />
                {typeof weatherData.main === 'undefined' ? (
                    <div className="text"> Come and check the weather </div>
                ) : (
                    <div className="weatherReturn">
                        <div className="location">
                            <p>{weatherData.name}</p>
                        </div>
                        <div className="temp">
                            {weatherData.main ? <h1>{Math.round(weatherData.main.temp)}°C</h1> : null}
                        </div>
                        <div className="description">
                            {weatherData.weather ? <p>{weatherData.weather[0].description}</p> : null}
                        </div>
                        <div className="weather-icon">
                            <img src={(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)} />
                        </div>
                    </div>

                )}



            </div>
        </div>
    );
}

export default Weather