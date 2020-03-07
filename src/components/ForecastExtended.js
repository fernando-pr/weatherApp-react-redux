import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
];

const data = {
    temperature: 10,
    humidity: 30,
    weatherState: "sun",
    wind: 'normal wind',
};

class ForecastExtended extends Component {

    renderForecastItemDays(){
        return days.map(day => 
            (<ForecastItem weekDay={day} hour={10} data={data}>

            </ForecastItem>));
    }

    render() {

        const {city} = this.props;

        return (
        <div>
            <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
            {this.renderForecastItemDays()}
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
};

export default ForecastExtended;