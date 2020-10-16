import React from 'react';
import { useSelector } from 'react-redux';
import { days } from './constants';
import WeatherIcon from './WeatherIcon';
import {
	WiThermometer,
	WiStrongWind,
	WiSunrise,
	WiSunset
} from "weather-icons-react"

const ShowCurrentWeather = () => {
	const weatherData = useSelector(state => state.weatherData);


	const DisplayTime = (time) => {

		let givenTime = weatherData.cod ? new Date(weatherData.sys[time]) : null;
		let hours = givenTime.getHours() > 12 ? givenTime.getHours() - 12 : givenTime.getHours();
		// let am_pm = givenTime.getHours() >= 12 ? "PM" : "AM";
		let am_pm = time === 'sunset' ? "PM" : "AM";
		hours = hours < 10 ? "0" + hours : hours;
		let minutes = givenTime.getMinutes() < 10 ? "0" + givenTime.getMinutes() : givenTime.getMinutes();
		let seconds = givenTime.getSeconds() < 10 ? "0" + givenTime.getSeconds() : givenTime.getSeconds();
		return hours + ":" + minutes + ":" + seconds + " " + am_pm;
	};

	let d = new Date(); // The 0 there is the key, which sets the date to the epoch
	return (
		<div className='card-container'>
			{
				weatherData.cod
					?
					<>
						<div className='card-style'>
							<div>Place: {weatherData.name}</div>
							<div>{d.toISOString().split('T')[0]}  {days[d.getDay()]}</div>
							<WeatherIcon size={60} color='orange' weatherType={weatherData.weather[0].main} />
							<div>Primarily: {weatherData.weather[0].main}</div>
							<div>{weatherData.weather[0].description}</div>
							<br />
							<div className="main-temperature">
								{
									weatherData.main.temp
								}&#8451;
						</div>
							<br />
							<div>Feels like: {weatherData.main.feels_like}&#8451;</div>
							<br />
							<div>
								Min <WiThermometer size={20} /> {weatherData.main.temp_min}
							 
							Max <WiThermometer size={20} /> {weatherData.main.temp_max}
							 
							Wind <WiStrongWind size={20} /> {weatherData.wind.speed} Km/h
						</div>
						</div>
						<div className='card-style second-card'>
							<div className='sunrise-container'>
								<div style={{ width: '30%' }}>
									<WiSunrise size={60} color='orange' />
									<br />Sunrise
								<br />{DisplayTime('sunrise')}
								</div>
								<div style={{ width: '30%' }}>
									<WiSunset size={60} color='orange' />
									<br />Sunset
								<br />{DisplayTime('sunset')}
								</div>

							</div>
							<br />
							<div>Humnidity: {weatherData.main.humidity}%</div>
							<div>Pressure: {weatherData.main.pressure} bar</div>
							<div>Visibility: {weatherData.visibility / 1000} Km</div>
							<div>Wind Speed: {weatherData.wind.speed} Km/h</div>
							<div>
								Coordinates:
								<li>Latitude: {weatherData.coord.lat}</li>
								<li>Longitude: {weatherData.coord.lon}</li>
							</div>

						</div>
					</>
					: weatherData.isAxiosError
 						? <span className='error-message'>
							City not found. Please enter a valid City Name or select one from the dropdown.
					</span>
						: <span className="selectCity">Please select a city</span>
			}

		</div>
	);
}

export default ShowCurrentWeather;