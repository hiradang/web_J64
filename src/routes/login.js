const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');

router.get('/', loginController.index);
// router.post('/', passport.authenticate('local', { //chọn phương thức check là local => npm install passport-local
//     failureRedirect: 'account',  //nếu check không đúng thì redirect về link này
//     successRedirect: 'home'
// }));

router.post('/', loginController.check)
router.get('/:slug', loginController.show);

module.exports = router;