const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');


router.get('/', courseController.index);

router.post('/store',  courseController.store);

module.exports = router;
