import React from 'react';
import Filter from './Filter';
import ShowCurrentWeather from './ShowCurrentWeather';
import ShowWeatherForecast from './ShowWeatherForecast';

const WeatherApp = () =>{
	return(
		<div className='main-body'>
			<div className='main-content'>
 				<h1 className='weather-header'>Weather</h1>
				<Filter />
				<br/><br/>
				<ShowCurrentWeather />
				<ShowWeatherForecast />
			</div>
		</div>
	);
}

export default WeatherApp;