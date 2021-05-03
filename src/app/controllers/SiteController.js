class SiteController {
    index(req, res, next) {
        //console.log(req.session.passport.user)
       
        // if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
        
        //      console.log(req.session.passport.user);
        //      username = req.user
        // } 
        res.render('home')
     }


    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
