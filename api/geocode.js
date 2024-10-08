const axios = require('axios')

const geocode = async (place) => {

    // const address = req.body.place

    const apiUrl = `https://geocode.maps.co/search?q=${encodeURIComponent(place)}&api_key=${process.env.GEOCODING_KEY}`

    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        console.error('Error while fetching geocode:', error);
        throw error
    }

}

module.exports = geocode;