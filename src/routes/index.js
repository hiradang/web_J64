const CourseController = require('../app/controllers/CourseController');
const accountRouter = require('./account');
const courseRouter = require('./course');
const siteRouter = require('./site');
const japitRouter = require('./japit');
const jobfairRouter = require('./jobfair');
const cultureRouter = require('./culture');

function route(app) {
    app.use('/account', accountRouter);
    app.use('/course', courseRouter);
    app.use('/japit', japitRouter);
    app.use('/jobfair', jobfairRouter);
    app.use('/culture', cultureRouter);
    app.use('/', siteRouter);
}

module.exports = route;
