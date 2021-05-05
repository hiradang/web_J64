const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Beginner and subpages 
router.get('/beginner/:slug/:id', courseController.showDetails);
router.get('/beginner/:slug', courseController.showList);
router.get('/beginner', courseController.beginner);

// Intermediate and subpages 
router.get('/intermediate/:slug/:id', courseController.beginner);
router.get('/intermediate/:slug', courseController.showList);
router.get('/intermediate', courseController.intermediate);

// JLPT N3 and subpages 
router.get('/jlpt-n3/:slug/:id', courseController.beginner);
router.get('/jlpt-n3/:slug', courseController.showList);
router.get('/jlpt-n3', courseController.jlptN3);

//ADMIN 
router.get('/add', courseController.add);
router.post('/add', courseController.store);
router.get('/admin', courseController.admin);
router.get('/:id/update', courseController.update);
router.put('/:id/update', courseController.saveUpdate);
router.delete('/:id', courseController.delete);

router.get('/', courseController.index);

module.exports = router;
