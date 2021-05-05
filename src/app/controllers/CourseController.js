const Course = require("../models/Course");
const Item = require("../models/Item");
const  {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');

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
        Course.find({level: 'beginner'})
            .then(course => {
                res.render('courses/beginner', {
                    course: multipleMongooseToObject(course)});
            })
            .catch(next);   
    }

    // [GET] /courses/intermediate
    intermediate(req, res, next) {
        Course.find({level: 'intermediate'})
            .then(course => {
                res.render('courses/intermediate', {
                    course: multipleMongooseToObject(course)});
            })
            .catch(next);
    }

    // [GET] /courses/jlpt-n3
    jlptN3(req, res, next) {
        Course.find({level: 'jlpt-n3'})
            .then(course => {
                res.render('courses/jlpt-n3', {
                    course: multipleMongooseToObject(course)});
            })
            .catch(next);
    }

    // [GET] /courses/beginner/:slug
    showList(req, res, next) {
        Promise.all([Course.findOne({name: req.params.slug}), Item.find({slug: req.params.slug, type: 'book'}), Item.find({slug: req.params.slug, type: 'video'})])
            .then(([course, books, videos]) => {
                res.render('courses/subpage', {
                    course: course.toObject(),
                    books: multipleMongooseToObject(books),
                    videos: multipleMongooseToObject(videos)
                  })
                })
            .catch(next);    
    }


    // [GET] /courses/beginner/:slug/:id
    showDetails(req, res, next) {
        Item.findById(req.params.id)
            .then(item => {
                res.render('courses/item-details', {
                    item: item.toObject()});
            })
            .catch(next);     
    }

    add(req, res, next) {
        res.render('courses/add')
    }

    admin(req, res, next) {
        Item.find({})
            .then(items => res.render('courses/admin', {
                items: multipleMongooseToObject(items)
            }))
            .catch(next)
    }

    update(req, res, next) {
        Item.findById(req.params.id)
        .then(items => res.render('courses/update', {
            items: mongooseToObject(items)
        }))
        .catch(next)
    }
    delete(req, res, next) {
        Item.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/courses/admin'))
            .catch(next)
        
    }
    
    store(req, res, next) {
        var item = new Item(req.body)
        item.save()
        res.redirect('/courses/admin')
    }

    saveUpdate(req, res, next) {
        Item.updateOne({_id : req.params.id}, req.body)
            .then(()=> res.redirect('/courses/admin'))
            .catch(next)
    }
}

module.exports = new CourseController();
