const express = require('express')

const router = express.Router()

const {createContactUs, getContactUsList, getContactUs, deleteContactUs} = require('../controllers/contact_us_controllers')

router.post('/',createContactUs)

router.get('/',getContactUsList)

router.get('/:id',getContactUs)

router.delete('/:id',deleteContactUs)

module.exports = router 