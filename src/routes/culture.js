const express = require('express');
const router = express.Router();

const cultureController = require('../app/controllers/CultureController');


router.get('/food', cultureController.food);
router.get('/festival', cultureController.festival);

module.exports = router;