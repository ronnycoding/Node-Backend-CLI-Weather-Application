const { argv } = require('./config/yargs');
const colors = require('colors');
const { getPlaceLatLng } = require('./place/place');
const { getWeatherByLatLng } = require('./weather/weather');

const app = async(address) => {
    try {
        let place = await getPlaceLatLng(address);
        let weather = await getWeatherByLatLng(place.lat, place.lng);
        console.log(`The weather in ${ place.address }: ${ weather } Celsius`.yellow);
    } catch (e) {
        console.log(`It's not possible to found weather for ${ address }`.red)
    }
}

app(argv.address);