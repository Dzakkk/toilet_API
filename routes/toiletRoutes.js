const express = require('express')
const router = express.Router()
const upload = require('../config/upload');
const {
    addToilet,
    getToilet,
    toilet
} = require('../controllers/toiletController')

router.route('/').post(upload.single('image'), addToilet).get(getToilet)
router.route('/:id').get(toilet);


module.exports = router