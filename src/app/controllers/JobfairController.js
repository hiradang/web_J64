const Course = require("../models/Course");

class JobfairController {
    // [GET] /jobfair/honor
    honor(req, res, next) {
        res.render('jobfair/honor', {username: req.user});
    }

    // [GET] /jobfair/company-info
    info(req, res, next) {
        res.render('jobfair/company-info', {username: req.user});
    }

    // [GET] /jobfair/conditions
    conditions(req, res, next) {
        res.render('jobfair/conditions', {username: req.user});
    }
}

module.exports = new JobfairController();
