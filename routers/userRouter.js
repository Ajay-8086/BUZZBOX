const express = require('express')
const router  = express.Router()
const userController = require('../controllers/userController')

// users managing routers===================================================================================>

router.get('/',userController.getUserHome)

module.exports = router