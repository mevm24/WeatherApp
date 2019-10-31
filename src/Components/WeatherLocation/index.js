import React,{ Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import getURLWeatherByCity from './../../Services/getURLWeatherByCity';
import WeatherData from './WeatherData';
import transformWeather from './../../Services/TransformWeather';
import './styles.css';

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data : null,
        }
    }

    handleUpdateClick = ( city ) => {
        const weatherUrl = getURLWeatherByCity(this.state.city);
        fetch(weatherUrl).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            this.setState({
                data : newWeather
            });
        });
    }

    componentDidMount = () => {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate = (prevProps,prevState) => {
        console.log("componentDidUpdate");
    }

    render(){
        const { city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city = {city} />
                { data ?
                    <WeatherData data = {data}/> :
                    <CircularProgress  />
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}