const express = require('express')

const router = express.Router()

const {userLogin,userSignup,getUsers, getUser} = require('../controllers/user_controllers')

router.post('/login',userLogin)

router.post('/signup',userSignup)

router.get('/',getUsers)

router.get('/:id',getUser)

module.exports = router