const express = require('express')
const router  = express.Router()
const userController = require('../controllers/userController')

// users managing routers===================================================================================>

router.get('/',userController.getUserHome)
router.get('/signup',userController.getUserSignup)
router.post('/signup',userController.postUserSignup)

module.exports = router