const {Router}= require('express');
const router = Router();
const authcontroller = require('../controller/authController');

router.get('/signup',authcontroller.signupGet);
router.get('/login',authcontroller.loginGet);
router.post('/signup',authcontroller.signupPost);
router.post('/login',authcontroller.loginPost);

module.exports = router;