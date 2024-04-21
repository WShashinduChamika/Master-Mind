const express = require('express')

const Course = require('../models/course_model')

const {createCourse,getCourses,getCourse,deleteCourse, updateCourse} = require('../controllers/course_controllers')

const router = express.Router()

//get all courses
// router.get('/',(req,res)=>{
//     res.json({msg:"Welcome to app"})
// })
router.get('/',getCourses)

//get a single course
router.get('/:id',getCourse)

//create a course
// router.post('/',async(req,res)=>{
//     const {title,name} = req.body
    
//     try{
//         const course = await Course.create({title,name})
//         res.status(200).json(course)
//     }
//     catch(error){
//         res.status(400).json({error:error.message})
//     }
//     //res.json({mag:"Create a new course"})
// })

//delete a course
router.post('/',createCourse)

//delete a course
// router.delete('/:id',(req,res)=>{
//     res.json({msg:"Delete a course"})
// })


//update a course
router.delete('/:id',deleteCourse)

//update a course
// router.patch('/:id',(req,res)=>{
//     res.json({msg:"Update a course"})
// })
router.patch('/:id',updateCourse)

module.exports = router