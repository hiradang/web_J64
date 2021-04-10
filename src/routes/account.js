const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');


router.get('/', accountController.index);
router.post('/', accountController.store);
router.get('/:slug', accountController.show);


module.exports = router;
