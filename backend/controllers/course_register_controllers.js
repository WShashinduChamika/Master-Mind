const CourseRegister = require('../models/course_register_ model')

const mongoose = require('mongoose')

const createCourseRegister = async (req, res) => {

  const { name, email, contact_Number, course_ID, user_ID } = req.body

  try {
    const courseRegister = await CourseRegister.create({ name, email, contact_Number, course_ID, user_ID })
    res.status(200).json(courseRegister)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getCourseRegisterByUser = async (req, res) => {

  const { id } = req.params

  const courseRegister = await CourseRegister.find({ user_ID: id }).sort({ createdAt: 1 })

  if (!courseRegister) {
    res.status(400).json({ error: "No such a course section" })
  } else {
    res.status(200).json(courseRegister)
  }
}

const getCourseRegisterByCourse = async (req, res) => {

  const { id } = req.params

  const courseRegister = await CourseRegister.find({ course_ID: id }).sort({ createdAt: 1 })

  if (!courseRegister) {
    res.status(400).json({ error: "No such a course section" })
  } else {
    res.status(200).json(courseRegister)
  }
}

const deleteCourseRegisterByUser = async (req, res) => {

  const { uid, course_ID } = req.body
  
  console.log(uid)
  console.log(course_ID)

  const courseRegister = await CourseRegister.deleteOne({
    user_ID: uid,
    course_ID: course_ID
  })

  if (courseRegister.deletedCount === 1) {
    console.log('Successfully deleted the course registration');
    res.status(200).json(courseRegister)
  } else {
    console.log('No course registration found with the given userID and courseID');
    res.status(400).json("Can not delete")
  }

}


module.exports = { createCourseRegister, getCourseRegisterByUser, getCourseRegisterByCourse, deleteCourseRegisterByUser }