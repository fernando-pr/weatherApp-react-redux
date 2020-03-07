import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';

class WeatherLocation extends Component {

	constructor({ city }){
		super();
		this.state = {
			city,
			data: null
		};
	}

	componentWillMount(){
		const { city } = this.state;
        const api_weather = getUrlWeatherByCity(this.state.city);
		fetch(api_weather).then( data => {
			return data.json();
		}).then( weather_data => {
			const data = transformWeather(weather_data);
			this.setState({ data });
		});
	}

	render = () => {
		const { onWeatherLocationClick } = this.props;
		const { city, data } = this.state;
		return (
			<div className='weatherLocationCont' onClick={onWeatherLocationClick} >
				<Location city={city} />
				{data ? <WeatherData data={data} /> : 
				<CircularProgress size={60} thickness={7} />}
			</div>);
	};

}

WeatherLocation.propTypes = {
	city: PropTypes.string,
	onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;

