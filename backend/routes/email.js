const express = require("express")

const {sendRegisterStatus} = require("../controllers/email_controllers")

const router = express.Router()

router.post('/',sendRegisterStatus)

module.exports = router

