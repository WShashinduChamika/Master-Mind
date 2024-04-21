const Course = require('../models/course_model')

const mongoose = require('mongoose')

//create a course
const createCourse = async(req,res)=>{
   const {title,name,sections} = req.body

   try{

    const course = await Course.create({title,name,sections})
    res.status(200).json(course)

   }catch(error){
    res.status(400).json({error:error.message})
   }
}

//get all courses
const getCourses = async(req,res)=>{
  try{
     const courses = await Course.find({}).sort({createdAt:-1})
     res.status(200).json(courses)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//get a single course
const getCourse = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Not such a ID"})
    }
    const course = await Course.findById(id)
    
    if(!course){
        return res.status(400).json({error:"Not such a course"})
    }

    res.status(200).json(course)
}

//delete a single course
const deleteCourse = async(req,res)=>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Not such a ID"})
  }

  const course = await Course.findOneAndDelete({_id:id})

  if(!course){
    return res.status(400).json({error:"Not such a course"})
  }

  res.status(200).json(course)
}

//update a course
const updateCourse = async(req,res)=>{
    const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Not such a ID"})
  }

   const course = await Course.findOneAndUpdate({_id:id},{
     ...req.body
   })

   if(!course){
    return res.status(400).json({error:"Not such a course"})
  }

  res.status(200).json(course)
}

module.exports = {createCourse,getCourses,getCourse,deleteCourse,updateCourse}