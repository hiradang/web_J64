const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/store',  courseController.store);
router.get('/beginner/:slug/:id', courseController.showBeginner);
router.get('/beginner/:slug', courseController.showBeginner);
router.get('/beginner', courseController.beginner);
router.get('/intermediate', courseController.intermediate);
router.get('/jlpt-n3', courseController.jlptN3);
router.get('/', courseController.index);

module.exports = router;
