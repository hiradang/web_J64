const accountRouter = require('./account');
const courseRouter = require('./courses');
const siteRouter = require('./site');
const japitRouter = require('./japit');
const jobfairRouter = require('./jobfair');
const cultureRouter = require('./culture');
const logoutRouter = require('./logout');
const loginRouter = require('./login');
const signupRouter = require('./signup');

function route(app) {
    app.use('/login', loginRouter);
    app.use('/logout', logoutRouter);
    app.use('/signup', signupRouter);
    app.use('/courses', courseRouter);
    app.use('/japit', japitRouter);
    app.use('/jobfair', jobfairRouter);
    app.use('/culture', cultureRouter);
    app.use('/', siteRouter);
}

module.exports = route;
