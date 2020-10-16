import { combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { GetWeatherReducer, GetForecastReducer } from './reducers/GetWeatherReducer';

const combinedReducers = combineReducers({
    weatherData: GetWeatherReducer,
    forecastData: GetForecastReducer,

})


 const store = createStore(combinedReducers)

export default store;