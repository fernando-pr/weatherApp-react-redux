import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import convert from 'convert-units';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

class WeatherLocation extends Component{
   
    constructor(props) {
        super(props);
        const {city} = props;

        this.state = {
            city,
            data : null,
        };
    } 

    componentDidMount() {
        this.handleUpdateClick();
    }
   
    handleUpdateClick = () => {  
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(resolveData => {
           const newWeather = transformWeather(resolveData);
           const data = newWeather.data;
           const city = newWeather.city;

            this.setState({
                city,
                data,
            });
        });
    }
    render(){
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData  data={data}/> :  <CircularProgress/>}
            </div> 
        );
    } 
}


WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;