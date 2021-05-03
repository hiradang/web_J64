const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const Account = require("../models/Account");
class LoginController {
    index(req, res) {
        var username = ''
        if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
            username = req.session.passport.user;
        } 
        res.render('login');
    }

    show() {
        res.send('detail');
    }
    
    check(req, res, next) {
        passport.authenticate('local', function(err, user) {
            if (err) {return res.render('login', {message: 'Fail'});}
            if (!user) {return res.render('login', {error: 'Fail'}); }
            res.locals.lcname = user
            req.session.isAuthenticated = true
            req.logIn(user, function(err) {
                if (err) { return next(err); 
            }
            res.redirect(res.locals.pagepre)
            //res.render('home', { message: 'success'});
            });
        })(req,res,next);
    }

    
}

passport.use(new localStrategy(
    ( username, password, done) => {
        const account = new Account();
        account.username = username
        account.password = password
        Account.findOne({
            username : username,
            password : password,
        })
        .then(data => {
            if (data) {
                return done(null, username);
            }
            else {
                //account.save()
                sweetalert({
                    title: "Username đã tồn tại",
                    text: "",
                    icon: "info",
                    
                })
                return done(null, false);
            }
        })
        .catch(err=>{
            done(err)
        })

    }
    ))

passport.serializeUser((username, done) => {
    done(null, username);
})

passport.deserializeUser((name, done) => {
    //tại đây hứng dữ liệu để đối chiếu
    // if (name == 'loanbui') { //tìm xem có dữ liệu trong kho đối chiếu không
    //     return done(null, name)
    // } else {
    //     return done(null, false)
    // }

    return done(null, name)
})

module.exports = new LoginController();
