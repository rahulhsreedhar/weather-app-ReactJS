
export const SetCurrentWeather = (data={}) => {
	return { 
		type: 'CURRENT_WEATHER',
		payload:data
	}
}

export const SetWeatherForecast = (data={}) => {
	return { 
		type: 'WEATHER_FORECAST',
		payload:data
	}
}