const express = require('express');
const router = express.Router();
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const Account = require("../app/models/Account");
const loginController = require('../app/controllers/LoginController');

router.get('/', loginController.index);
// router.post('/', passport.authenticate('local', { //chọn phương thức check là local => npm install passport-local
//     failureRedirect: 'account',  //nếu check không đúng thì redirect về link này
//     successRedirect: 'home'
// }));
router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if (err) {return res.render('login', {message: 'Fail'});}
        if (!user) {return res.render('login', {error: 'Fail'}); }
        console.log(user)
       
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.render('home', {username: user, message: 'success'});
        });
    })(req,res,next);
})
router.get('/:slug', loginController.show);

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

module.exports = router;