
class LogoutController {
    index(req, res, next) {
        req.logout();
        res.locals.lcname = null
        var username
        if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
            username = req.session.passport.user;
        } 
       res.redirect(req.headers.referer)
    }

}

module.exports = new LogoutController();
