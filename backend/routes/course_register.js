const express = require('express')

const CourseRegister = require('../models/course_register_ model')

const { createCourseRegister, getCourseRegisterByUser, getCourseRegisterByCourse, deleteCourseRegisterByUser, } = require('../controllers/course_register_controllers')

const router = express.Router()

router.post('/', createCourseRegister)

router.get('/:id', getCourseRegisterByUser)

router.get('/course/:id', getCourseRegisterByCourse)

router.delete('/course/', deleteCourseRegisterByUser)


module.exports = router