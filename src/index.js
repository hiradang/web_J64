const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const passport = require('passport')
const session = require('express-session')
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
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

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

var urlpre = "http://localhost:3000"
var count = 0

app.use(function(req, res, next) {
    if (req.session.isAuthenticated) {
        res.locals.lcname = req.session.passport.user
        count ++
        if (count == 1) {
            res.locals.loginsucc = true
        }
    } else {
        count = 0
        var url = req.headers.referer 
        if (url != "http://localhost:3000/login" && url != "http://localhost:3000/signup") {
        urlpre = req.headers.referer           
        }
        res.locals.pagepre = urlpre  
    }  
    
    next()
    
})

route(app);
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
