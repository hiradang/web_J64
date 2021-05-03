const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const localStrategy = require('passport-local').Strategy;
const expressValidator = require('express-validator')
const Swall = require('sweetalert')
const hbssection = require('express-handlebars-sections')
const port = 3000;

const route = require('./routes');

const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json());
//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
      extname: 'hbs',
      helpers: {
        section: hbssection()
    }
    }),
);
app.use(flash())
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.use(function(req, res, next) {
    if (req.session.isAuthenticated) {
        res.locals.lcname = req.session.passport.user
    }
    next()
    
})

route(app);
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
