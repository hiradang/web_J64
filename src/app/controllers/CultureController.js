const Course = require("../models/Course");

class CultureController {
    // [GET] /culture/food
    food(req, res, next) {
        res.render('culture/food');
    }

    // [GET] /culture/festival
    festival(req, res, next) {
        res.render('culture/festival');
    }
}

module.exports = new CultureController();
