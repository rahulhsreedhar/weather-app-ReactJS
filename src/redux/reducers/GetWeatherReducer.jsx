const DefaultState = {};

export const GetWeatherReducer = (state = DefaultState, action) => {
    console.log('inside current reducer action', action);
    console.log('state', state);

    switch (action.type) {
        case 'CURRENT_WEATHER':
            return action.payload
        default:
            return state
    }
}

export const GetForecastReducer = (state = DefaultState, action) => {
     switch (action.type) {
        case 'WEATHER_FORECAST':
            return action.payload

        default:
            return state
    }
}