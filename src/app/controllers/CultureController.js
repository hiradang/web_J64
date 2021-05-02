const Course = require("../models/Course");

class CultureController {
    // [GET] /culture/food
    food(req, res, next) {
        res.render('culture/food', {username: req.user});
    }

    // [GET] /culture/festival
    festival(req, res, next) {
        res.render('culture/festival', {username: req.user});
    }
}

module.exports = new CultureController();
