const mongoose = require('mongoose')

const toiletSchema = new mongoose.Schema({
    place: String,
    rating: Number,
    imageUrl: String,
    review: String,
    latitude: String,
    longitude: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Toilet', toiletSchema)