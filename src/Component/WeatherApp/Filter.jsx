import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CITY_LIST } from './CityList';
import { getCurrentWeather, getWeatherForecast } from '../../services/WeatherServices';
import { SetCurrentWeather, SetWeatherForecast } from '../../redux/actions/GetWeatherAction';

const tabList = ['Enter City Name', 'Enter Coordinate'];

const styles = makeStyles({
  tabStyle: {
		fontWeight: 'bold',
		color: 'white'
	},
	
	container: {
		backgroundColor: 'teal',
	}
});

const Filter = () => {
	const dispatch = useDispatch();
	const classes = styles();
	const [tabValue, setTabValue] = useState(0);
	const [cityName, setCityName] = useState('');
	const [citySelection, setCitySelection] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [allFieldComplete, setAllFieldComplete] = useState(true);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
	};

	const handleCitySelection = (city) =>{
		setCitySelection(city);
		setCityName('');
		setAllFieldComplete(true);
	}

	const handleChangeLongitude = (longitude) => {
		setLongitude(longitude);
		setAllFieldComplete(true);
	}

	const getAllData = () =>{
		let payload = { latitude, longitude, tabValue };
		payload.cityName = cityName || citySelection;

		getCurrentWeather(payload)
		.then(apiResponse => 
			dispatch(SetCurrentWeather(apiResponse))
		)
		// .catch(error => {
		// 	dispatch(SetCurrentWeather({errorMessage: error.message}));
		// });

		getWeatherForecast(payload)
		.then(apiResponse => 
			dispatch(SetWeatherForecast(apiResponse))
		)
		// .catch(error => {
		// 	dispatch(SetWeatherForecast({errorMessage: error.message}));
		// });
	}

	const handleSubmit = () => {
		if(tabValue === 0){
			cityName === '' && citySelection === ''
			? setAllFieldComplete(false)
			: getAllData()
		}
			
		if(tabValue === 1){
			latitude === '' || longitude === ''
			? setAllFieldComplete(false)
			: getAllData()
		}
	}


	return(
		<div>
			<div>
				<Paper className={classes.container}>
					<Tabs
						value={tabValue}
						onChange={handleChange}
						centered
					>
						{
							tabList.map((tab, index) => {
								return <Tab label={tab} key={index} className={classes.tabStyle}/>
							})
						}
					</Tabs>
				</Paper>
			</div>
			{
				tabValue === 0
				?
				<div className="input-container">
					<input
						className='text-input' 
						placeholder='Enter City Name'
						value={cityName}
						onChange={(event) => {
							setCityName(event.target.value)
							setCitySelection('');
							setAllFieldComplete(true)
						}}
					/> 
					Or
					<select
						value={citySelection}
						className='text-input'
						onChange={(event) => {handleCitySelection(event.target.value)}}
					>
						<option value='' disabled hidden>Select City Name</option>
						<option value='' >Select City Name</option>
						{ 
							CITY_LIST.map((city) => {
								return <option value={city.name} key={city.id}>{city.name}</option>
							})
						}
					</select>
				</div>
				:
				<div className="input-container">
					Latitude:
					<input
						className='text-input'
						value={latitude}
						onChange={event => {
							setLatitude(event.target.value)
							setAllFieldComplete(true)
						}}
					/>
					Longitude:
					<input
						className='text-input'
						value={longitude}
						onChange={event => handleChangeLongitude(event.target.value)}
					/>
				</div>
			}
			{
				allFieldComplete
				? null
				: <div className='show-error'>Please Fillup all required fields</div>
			}
			<button onClick={handleSubmit} className='submit-button'>Submit</button>
			
		</div>
	);
}

export default Filter;