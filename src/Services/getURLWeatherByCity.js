import { api_key,url_base } from './../constants/api_url';

const getURLWeatherByCity = city => {
    return `${url_base}?q=${city}&appid=${api_key}`;
};

export default getURLWeatherByCity;