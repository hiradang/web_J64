const Course = require("../models/Course");
const  {multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/
    index(req, res, next) {
        Course.find({})
            .then(course => {
                course = course.map(course => course.toObject())
                res.render('course', {course});
            })
            .catch(next);   
    }

    // [GET] /courses/beginner
    beginner(req, res, next) {
        Course.find({})
            .then(course => {
                course = course.map(course => course.toObject())
                res.render('courses/beginner', {course});
            })
            .catch(next);   
    }

    // [GET] /courses/intermediate
    intermediate(req, res, next) {
        Course.find({})
            .then(course => {
                course = course.map(course => course.toObject())
                res.render('courses/intermediate', {course});
            })
            .catch(next);   
    }

    // [GET] /courses/jlpt-n3
    jlptN3(req, res, next) {
        Course.find({})
            .then(course => {
                course = course.map(course => course.toObject())
                res.render('courses/jlpt-n3', {course});
            })
            .catch(next);   
    }



    // [GET] /courses/beginner:slug
    showBeginner(req, res, next) {
        // Course.find({slug: req.params.slug})
        //     .then(course => {
        //         course = course.map(course => course.toObject())
        //         res.render('courses/subpage', {course});
        //     })
        //     .catch(next); 
        
        Promise.all([Course.find({slug: req.params.slug, type: 'book'}), Course.find({slug: req.params.slug, type: 'video'})])
            .then(([books, videos]) => {
                res.render('courses/subpage', {
                    books: multipleMongooseToObject(books),
                    videos: multipleMongooseToObject(videos)})
                })
            .catch(next);    
    }

    store(req,res) {
        
    }
}

module.exports = new CourseController();
