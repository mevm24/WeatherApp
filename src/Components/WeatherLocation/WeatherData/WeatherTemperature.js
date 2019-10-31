import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constants/Icons';
import './styles.css';

const Icons = {
    [SUN] : "day-sunny",
    [CLOUD]: "cloud",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [THUNDER] : "day-thunderstore",
    [DRIZZLE] : "day-showers",
}

const sizeIcon = "4x";

const getWeatherIcon = weatherState => {
    const icon = Icons[weatherState];
    if( icon )
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />; 
    else
        return <WeatherIcons className="wicon" name={SUN} size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature,weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
}
export default WeatherTemperature;