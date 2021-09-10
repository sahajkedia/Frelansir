const router = require('express').Router();
const clientRef = require('../controllers/ClientController')

router.get('/client/:cid/',clientRef.CLientDashboard)
router.get('/client/:cid',clientRef.CLientProfile)
router.post('/client/signup',clientRef.CLientSignup)
router.post('/client/signin',clientRef.CLientSignin)

module.exports = router;