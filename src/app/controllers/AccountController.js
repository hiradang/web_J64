const Account = require("../models/Account");

class AccountController {
    index(req, res) {
        res.render('account');
    }

    show() {
        res.send('detail');
    }

    store(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        const account = new Account(req.body);
        Account.findOne({
            username : username,
        })
        .then(data => {
            if (data) {
            
                return res.render('account');
            }
            else {
                account.save();
                return res.render('home');
            }
        })
        
        // course.save();

       // res.render('home');
    }
}

module.exports = new AccountController();
