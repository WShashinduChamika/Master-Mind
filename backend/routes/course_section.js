const express = require('express')

const CourseSection = require('../models/course_section_model')

const {createCourseSection,getCourseSections,updateCourseSection,deleteCourseSection} = require('../controllers/course_section_controllers')

const router = express.Router()

router.post('/',createCourseSection)

router.get('/:id',getCourseSections)

router.patch('/:id',updateCourseSection)

router.delete('/:id',deleteCourseSection)

module.exports = router