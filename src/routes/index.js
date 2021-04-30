const CourseController = require('../app/controllers/CourseController');
const accountRouter = require('./account');
const courseRouter = require('./course');
const siteRouter = require('./site');
const japitRouter = require('./japit');

function route(app) {
    app.use('/account', accountRouter);
    app.use('/course', courseRouter);
    app.use('/japit', japitRouter)
    app.use('/', siteRouter);
}

module.exports = route;
