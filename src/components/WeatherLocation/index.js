import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import PropTypes from 'prop-types';
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
   
    constructor() {
        super();
        this.state = {
            city : null,
            data : null,
        };
    } 

    componentDidMount() {
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        
    }
    
    handleUpdateClick = () => {  

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
                {city ? <Location city={city} /> : ""}
                {data ? <WeatherData  data={data}/> : "cargando..." }
            </div> 
        );
    } 
}

export default WeatherLocation;