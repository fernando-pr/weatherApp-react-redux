import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (

	<div className='weatherLocationCont' onClick={onWeatherLocationClick} >
		<Location city={city} />
		{data ? <WeatherData data={data} /> : 
		<CircularProgress size={60} thickness={7} />}
	</div>
);

WeatherLocation.propTypes = {
	city: PropTypes.string,
	onWeatherLocationClick: PropTypes.func,
	data: PropTypes.shape({
        temperature: PropTypes.number,
        weatherState: PropTypes.string,
        humidity: PropTypes.number,
        wind: PropTypes.string,
     }),
};

export default WeatherLocation;

