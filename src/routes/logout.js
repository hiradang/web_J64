const express = require('express');
const router = express.Router();

const logoutController = require('../app/controllers/LogoutController');

router.use('/', logoutController.index);

module.exports = router;
