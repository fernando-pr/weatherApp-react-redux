import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {

    componentDidMount() {
      const { city } = this.props;
      this.props.setWeather(this.props.cities);
      this.props.setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
        
    };

    render() {
        return (
            <div>
            <LocationList
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectedLocation}
            />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) =>
 bindActionCreators(actions, dispatch);
/*const mapDispatchToProps = (dispatch) => (
    {
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities)),
    }
  );
*/
  const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
  });

  
 

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);