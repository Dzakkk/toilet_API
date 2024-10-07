const mongoose = require('mongoose')

const toiletSchema = new mongoose.Schema({
    place: String,
    rating: [1,2,3,4,5],
    image: String,
    review: String,
    latitude: String,
    longitude: String
})

module.exports = mongoose.model('Toilet', toiletSchema)