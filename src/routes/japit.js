const express = require('express');
const router = express.Router();

const japitController = require('../app/controllers/JapitController');


router.get('/intro', japitController.index);

module.exports = router;