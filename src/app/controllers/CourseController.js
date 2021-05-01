const Course = require("../models/Course");

class CourseController {
    index(req, res, next) {
        Course.find({})
            .then(course => {
                course = course.map(course => course.toObject())
                res.render('course', {course});
            })
            .catch(next);   
    }

    store(req,res) {
        
    }
}

module.exports = new CourseController();
