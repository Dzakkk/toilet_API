const express = require('express')
const router = express.Router()
const upload = require('../config/upload');
const {
    addToilet,
    getToilet
} = require('../controllers/toiletController')

router.route('/').post(upload.single('image'), addToilet).get(getToilet)

module.exports = router