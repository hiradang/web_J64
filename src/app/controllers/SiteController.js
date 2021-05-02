const Course = require('../models/Account')
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    index(req, res, next) {
        var username
        username = req.user
        // if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
        
        //     username = req.session.passport.user;
        //    // username = req.user
        // } 
        res.render('home', {username})
     }


    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
