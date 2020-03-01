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
    componentDidUpdate(prevProps, prevState) {
        
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
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                {data ? <WeatherData  data={data}/> :  <CircularProgress/>}
            </div> 
        );
    } 
}


WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
};

export default WeatherLocation;