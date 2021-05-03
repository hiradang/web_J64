
class LogoutController {
    index(req, res, next) {
        req.logout();
        req.session.isAuthenticated = false
        res.locals.lcname = null
       res.redirect('/')
    }

}

module.exports = new LogoutController();
