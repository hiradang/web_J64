class LoginController {
    index(req, res) {
        var username = ''
        if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
            username = req.session.passport.user;
        } 
        res.render('login', {username})
    }

    show() {
        res.send('detail');
    }

}

module.exports = new LoginController();
