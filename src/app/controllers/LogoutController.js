
class LogoutController {
    index(req, res, next) {
        req.logout();
        var username
        if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
            username = req.session.passport.user;
        } 
       res.render('home', {username})
    }

   

}

module.exports = new LogoutController();
