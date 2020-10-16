import React from 'react';
import {
	WiDayThunderstorm,
	WiRainMix,
	WiRain,
	WiSnow,
	WiDaySunny,
	WiDaySunnyOvercast,
	WiDayHaze,
	WiNA
} from "weather-icons-react"

const WeatherIcon = ({ size, color, weatherType }) =>{

	return(
		weatherType === 'Thunderstorm'
		? <WiDayThunderstorm size={size} color={color} />
		: weatherType === 'Drizzle'
		? <WiRainMix size={size} color={color}/>
		: weatherType === 'Rain'
		? <WiRain size={size} color={color}/>
		: weatherType === 'Snow'
		? <WiSnow size={size} color={color}/>
		: weatherType === 'Clear'
		? <WiDaySunny size={size} color={color}/>
		: weatherType === 'Clouds'
		? <WiDaySunnyOvercast size={size} color={color}/>
		: weatherType === 'Haze'
		? <WiDayHaze size={size} color={color}/>
		: <WiNA size={size} color={color}/>
	);
}

export default WeatherIcon;