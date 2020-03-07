import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import { url_base_forecast, api_key } from './../constants/api_url';
import './styles.css';

/*
const days = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes'
];

const data = {
	temperature: 10,
	humidity: 10,
	weatherState: 'normal',
	wind: 'normal',
};
*/

class ForecastExtended extends Component {

	constructor(){
		super();
		this.state = { forecastData: null}
	}

	componentDidMount(){
		this.updateCity(this.props.city);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.city !== this.props.city) {
			this.setState({ forecastData: null });
			this.updateCity(nextProps.city);
		}
	}

	updateCity = city => {
		const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

		fetch(url_forecast).then(
			data => (data.json())
		).then(
			weather_data => {
				console.log(weather_data);
				const forecastData = transformForecast(weather_data);
				console.log(forecastData);
				this.setState({ forecastData });
			}
		);
	}

	renderForecastItemDays(forecastData){
		return forecastData.map( forecastData => (
			<ForecastItem 
				key={`${forecastData.weekDay}${forecastData.hour}`}
				weekDay={forecastData.weekDay} 
				hour={forecastData.hour} 
				data={forecastData.data}>
			</ForecastItem>));
	}

	renderProgress = () => {
		return <h3>Cargando Pronostico Extendido...</h3>;
	}

	render() {
		const { city } = this.props;
		const { forecastData } = this.state;

		return (
			<div>
				<h2 className='forecast-title'>Pronostico Extendido {city}</h2>
				{ forecastData ? this.renderForecastItemDays(forecastData) :
					this.renderProgress()}
			</div>);
	}
}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
};

export default ForecastExtended;