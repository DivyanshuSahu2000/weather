// {"coord":{"lon":77.2167,"lat":28.6667},"weather":[{"id":200,"main":"Thunderstorm","description":"thunderstorm with light rain","icon":"11d"},{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":302.2,"feels_like":309.2,"temp_min":302.2,"temp_max":302.2,"pressure":1004,"humidity":89},"visibility":3000,"wind":{"speed":2.57,"deg":30,"gust":7.72},"rain":{"1h":0.42},"clouds":{"all":75},"dt":1694853673,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1694824579,"sunset":1694868982},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}

import React, { useEffect, useState } from "react";

const WeatherCard = (tempInfo) => {
  const [weatherState, setWeatherState] = useState('')

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(()=>{
if(weathermood){
  switch (weathermood) {
    case "Clouds": setWeatherState ("wi-day-cloudy");
   break;
    case "Haze": setWeatherState ("wi-fog");
   break;
    case "Mist": setWeatherState ("wi-dust");
   break;
    case "Clear": setWeatherState ("wi-day-sunny");
   break;
  
    default:setWeatherState ("wi-day-sunny");
      break;
  }
}
  }, [weathermood])

  //  Converting Seconds into Time 
let sec = sunset;
let date = new Date (sec*1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={` wi ${weatherState}` }></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition"> {weathermood} </div>
            <div className="place">
              {name}, {country}{" "}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()} </div>

        {/* Our 4 section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br /> Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br /> Humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
