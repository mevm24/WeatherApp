import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ( { humidity, winds } ) => {
    return (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity}% - `}</span>
        <span className="extraInfoText">{`Vientos: ${winds}`}</span>
    </div>    
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    winds: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;