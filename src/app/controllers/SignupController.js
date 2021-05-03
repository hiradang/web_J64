const passport = require('passport')
const Account = require("../models/Account");
class SignupController {
    index(req, res) {
        res.render('signup')
    }

    show() {
        res.send('detail');
    }

    store(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        var confirm = req.body.confirm;
        var account = new Account()
        if (username != '' && password != '' && confirm != '') {
            if (password == confirm) {
                account.username = username
                account.password = password
                Account.findOne({
                    username : username,
                })
                .then(data => {
                    if (data) {
                        return res.render('signup', {errorUser: 'Fail'});
                    }
                    else {
                        account.save();
                        return res.render('signup', {signup: 'Done'});
                    }
                })
            } else {
                return res.render('signup', {errorPass: 'Fail'});
            }
        } else {
            return res.render('signup', {message: 'Fail'});
        }
    }

}

module.exports = new SignupController();
