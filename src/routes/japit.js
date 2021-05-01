const express = require('express');
const router = express.Router();

const japitController = require('../app/controllers/JapitController');


router.get('/intro', japitController.intro);
router.get('/story', japitController.story);
router.get('/japan-it', japitController.japanIt);

module.exports = router;