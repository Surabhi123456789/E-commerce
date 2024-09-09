const express = require('express')

const router=express.Router()

const userSignUpController = require("../Controller/userSignUp")
const userSignInController = require('../Controller/userSignIn')
router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)

module.exports = router