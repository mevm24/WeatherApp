import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ( { data: { temperature, weatherState, humidity, winds } } ) => (
    (<div className="weatherDataCont">
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState} 
        />
        <WeatherExtraInfo 
            humidity={humidity} 
            winds={winds} 
        />
    </div>)
);

WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        winds : PropTypes.string.isRequired,
    })
}
export default WeatherData;