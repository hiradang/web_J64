const express = require('express');
const router = express.Router();

const jobfairController = require('../app/controllers/JobfairController');


router.get('/honor', jobfairController.honor);
router.get('/company-info', jobfairController.info);
router.get('/conditions', jobfairController.conditions);

module.exports = router;