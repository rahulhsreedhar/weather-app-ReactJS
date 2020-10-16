import http from 'axios'; //npm i axios

const API_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = 'e2df3b7911346a4d785fae8c6e5a9c0e';
const SEARCH_TYPE = {
	0: 'weather',
	1: 'forecast'
};

const generateURL = (payload, searchType) =>{
	let WEATHER_URL = API_URL + SEARCH_TYPE[searchType]; // decide weather or forecast
	if(payload.tabValue === 0) {
		WEATHER_URL = WEATHER_URL + '?q=' + payload.cityName + '&units=metric';
	} else {
		WEATHER_URL = WEATHER_URL + '?lat=' + payload.latitude + '&lon=' + payload.longitude + '&units=metric';
	}
	return WEATHER_URL + '&appid=' + API_KEY;
}

// payload = {cityName: 'abc', tabValue: 0} or
// payload = { latitude: '123', longitude: '23.34', tabValue: 1 } 
export const getCurrentWeather = async (payload) => {
	console.log('payload in service: ', payload);
	
	const weatherURL = generateURL(payload, 0)
	try {
		const apiResponse = await http.get(weatherURL);
		return apiResponse.data;
	}
	catch (error) {
		return error;
	}
	
}

// see how it says to convert to async
// export const getWeatherForecast = (payload) => {
// 	const weatherURL = generateURL(payload, 1)
// 	return http.get(weatherURL)
//     .then(apiResponse => {
// 			return apiResponse.data;
// 		})
//     .catch(error => {
// 			return error;
// 		})
	
// }

export const getWeatherForecast = async (payload) => {
	const weatherURL = generateURL(payload, 1)
	try {
		const apiResponse = await http.get(weatherURL);
		return apiResponse.data;
	}
	catch (error) {
		return error;
	}
	
}