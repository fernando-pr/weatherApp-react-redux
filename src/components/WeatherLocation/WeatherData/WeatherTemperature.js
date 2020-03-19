import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,
} from '../../../constants/weathers';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers",
    [THUNDER]: "day-thunderstorm",
}

const getWeatherIcon = weatherState => {

    const icon = icons[weatherState];
    const sizeIcon = '4x';
    if (icons){
        const i = icon ? icon : '';
        return <WeatherIcons className="wicon" name={i} size={sizeIcon} />
    } else {
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
    }
   
};
const WeatherTemperature = ({temperature, weatherState}) => (

    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` ºC`}</span>
    </div>

);

WeatherTemperature.propTypes = {

    temperature: PropTypes.number,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;