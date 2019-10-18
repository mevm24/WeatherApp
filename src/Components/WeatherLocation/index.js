import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    SUN,
    WINDY,
} from './../../constants/Icons';

const location = "Medellin";
const api_key = "275e4272f88da15b413206d9c8cd638b";
const url_base = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base}?q=${location}&APPID=${api_key}`

const data = {
    temperature : 15,
    weatherState : SUN,
    humidity : 80,
    winds : '10 m/s'
};
const data2 = {
    temperature : 20,
    weatherState : WINDY,
    humidity : 20,
    winds : '10 m/s'
};

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = { 
            city : "Barcelona",
            data
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather);
        console.log("clicked");
        this.setState({
            city: "Medellin",
            data : data2
        });
    }

    render(){
        const { city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city = {city} />
                <WeatherData data = {data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;