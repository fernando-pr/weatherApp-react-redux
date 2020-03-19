import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';


const WeatherData = ({data: {temperature,weatherState, humidity,wind}}) => (

  <div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={temperature}
            weatherState={weatherState} 
        />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>

);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number,
        weatherState: PropTypes.string,
        humidity: PropTypes.number,
        wind: PropTypes.string,
     }),
}

export default WeatherData;