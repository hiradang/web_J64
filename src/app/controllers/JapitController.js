const Course = require("../models/Course");

class JapitController {
    index(req, res, next) {
        res.render('japit/intro');
    }

}

module.exports = new JapitController();
