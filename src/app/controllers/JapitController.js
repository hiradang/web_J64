const Course = require("../models/Course");

class JapitController {
    // [GET] /japit/intro
    intro(req, res, next) {
        res.render('japit/intro');
    }

    // [GET] /japit/story
    story(req, res, next) {
        res.render('japit/story');
    }

    // [GET] /japit/japan-it
    japanIt(req, res, next) {
        res.render('japit/japan-it');
    }
}

module.exports = new JapitController();
