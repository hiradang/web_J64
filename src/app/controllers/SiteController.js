const Course = require('../models/Account')
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    index(req, res, next) {

        Course.find({})
        .then(course => res.render('home'))
    //     {
    //         course : multipleMongooseToObject (course)
    //      }))
       .catch(next);

      
    //      res.render('home');
     }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
