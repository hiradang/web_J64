const Course = require("../models/Course");

class JobfairController {
    // [GET] /jobfair/honor
    honor(req, res, next) {
        res.render('jobfair/honor');
    }

    // [GET] /jobfair/company-info
    info(req, res, next) {
        res.render('jobfair/company-info');
    }

    // [GET] /jobfair/conditions
    conditions(req, res, next) {
        res.render('jobfair/conditions');
    }
}

module.exports = new JobfairController();
