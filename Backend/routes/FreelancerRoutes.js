const router = require('express').Router();
const freeRef = require('../controllers/FreelansirController')

router.post('/frelansir/profile',freeRef.FrelansirProfile)
router.post('/frelansir/signup',freeRef.FrelansirSignup)
router.post('/frelansir/signin',freeRef.FrelansirSignin)
router.get('/:fid/',freeRef.FrelansirDashboard)
router.get('/jobs',freeRef.Jobs)
router.post('/jobs',freeRef.JobPosting)
module.exports = router;