const axios = require('axios');
const { apikeys } = require('../config/apikeys');

const getWeatherByLatLng = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&APPID=${ apikeys.openweathermap }`);
    if (!resp.status === 200) {
        throw new Error('API Error');
    }

    return resp.data.main.temp;
}

module.exports = {
    getWeatherByLatLng
}