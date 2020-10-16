import React from 'react';
import { useSelector } from 'react-redux';
import {
	WiStrongWind,
} from "weather-icons-react"
import WeatherIcon from './WeatherIcon';

const ShowWeatherForecast = () =>{
	const forecastData = useSelector(state => state.forecastData);

	return(
		forecastData.cod
		?
		<div className='forecast-container'>
			{forecastData.list.map((data,  index) => {
				return(
					<div key={index} className='forecast-card'>
						<div style={{ width: 'max-content' }}>{data.dt_txt}</div>
						<WeatherIcon size={40} weatherType={data.weather[0].main} />
						<div>Primarily: {data.weather[0].main}</div>
						<div>{data.weather[0].description}</div>
						<br/>
						<div className="card-temperature">
							{
								data.main.temp 
							}&#8451;
						</div>
						<br/>
						Feels like: {data.main.feels_like}
						<br/>
						<div>
							Min {data.main.temp_min}
							<br/>
							Max {data.main.temp_max}
							<br/>
							Wind <WiStrongWind size={20}/> {data.wind.speed} Km/h
						</div>
					</div>
				);
			})}
		</div>
		: null
	);
}

export default ShowWeatherForecast;