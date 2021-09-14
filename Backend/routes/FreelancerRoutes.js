const router = require('express').Router();
const freeRef = require('../controllers/FreelansirController')

router.get('/frelansir/:fid',freeRef.FrelansirProfile)
router.post('/frelansir/signup',freeRef.FrelansirSignup)
router.post('/frelansir/signin',freeRef.FrelansirSignin)
router.post('/frelansir/loginorsignup',freeRef.loginorsignup)
router.get('/:fid/',freeRef.FrelansirDashboard)
module.exports = router;