const express = require('express');
const router = express.Router();
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const Account = require("../app/models/Account");
const signupController = require('../app/controllers/SignupController');

router.get('/', signupController.index);
// router.post('/', function(req, res, next) {
//     passport.authenticate('local', function(err, user) {
//         if (!user) {return res.render('signup', {error: 'Fail'}); }
//         if (err) {return res.render('signup', {message: 'Fail'});}
//         console.log(user)
//         req.logIn(user, function(err) {
//             if (err) { return next(err); }
//             return res.render('login');
//         });
//     })(req,res,next);
// })
router.post('/', signupController.store);
router.get('/:slug', signupController.show);


module.exports = router;