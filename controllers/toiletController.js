const Toilet = require('../models/toilet')
const geocode = require('../api/geocode')
const uploadToGithub = require('../api/github')
const path = require('path')
const fs = require('fs')


const addToilet = async (req, res) => {

    const { place, review, rating, coordinates } = req.body;
    const filePath = req.file.path;
    const githubPath = `image/${req.file.filename}.png`

    const [latitude, longitude] = coordinates.split(',').map(coord => coord.trim());

    try {
        // const geocodeResponse = await geocode(place);
        // if (!geocodeResponse || geocodeResponse.length === 0) {
        //     return res.status(400).json({ message: 'Geocode data not found for the given place' });
        // }
        // const { longitude, latitude } = geocodeResponse[0];


        const imageUrl = await uploadToGithub(filePath, githubPath);

        const toilet = new Toilet({
            place, review, rating, longitude, latitude, imageUrl
        })
        await toilet.save()
        res.json({ message: 'Image berhasil diupload', imageUrl });

    } catch (error) {
        console.error('Error during upload:', error);
        res.status(500).json({ message: 'Failed to upload', error: error.message || error });
    } finally {
        fs.unlinkSync(filePath);
    }
}

const getToilet = async (req, res) => {
    try {
        const toilet = await Toilet.find()
        res.status(200).json(toilet)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get data ', error });
    }
}

module.exports = {
    addToilet,
    getToilet
};
