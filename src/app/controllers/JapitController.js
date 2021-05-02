const Course = require("../models/Course");

class JapitController {
    // [GET] /japit/intro
    intro(req, res, next) {
        res.render('japit/intro',  {username: req.user});
    }

    // [GET] /japit/story
    story(req, res, next) {
        res.render('japit/story', {username: req.user});
    }

    // [GET] /japit/japan-it
    japanIt(req, res, next) {
        res.render('japit/japan-it', {username: req.user});
    }
}

module.exports = new JapitController();
