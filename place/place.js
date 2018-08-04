const axios = require('axios');

const getPlaceLatLng = async(address) => {
    let encodeUrl = encodeURI(address);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`Address not ${ address }`);
    }

    let place = resp.data.results[0];
    let coors = place.geometry.location;

    return {
        address: place.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlaceLatLng
}