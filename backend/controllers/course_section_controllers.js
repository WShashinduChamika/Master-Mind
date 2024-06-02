const CourseSection = require('../models/course_section_model')

const mongoose = require('mongoose')

//create course section

const createCourseSection = async(req, res)=>{

    const {title,courseID} = req.body

    try{
        const courseSection = await CourseSection.create({title,courseID})
        res.status(200).json(courseSection)

    }catch(error){
        res.status(400).json({error:error.message})
    }

}

const getCourseSections = async(req,res)=>{

    //const {id} = req.body
    const {id} = req.params
    
    const courseSection = await CourseSection.find({courseID:id}).sort({createdAt:1})

    if(!courseSection){
        res.status(400).json({error:"No such a course section"})
    }else{
        res.status(200).json(courseSection)
    }

}

const updateCourseSection = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Not such a id"})
    }
    const courseSection = await CourseSection.findOneAndUpdate({_id:id},{
         ...req.body
    })
    if(!courseSection){
         res.status(400).json({error:"NOt such a courss"})
    }else{
        res.status(200).json(courseSection)
    }

}

const deleteCourseSection = async(req,res)=>{

    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Not such a ID"})
    }

    const deletedCourseSection = await CourseSection.findOneAndDelete({_id:id})

    if(!deletedCourseSection){
       res.status(400).json({error:"Not such a course"})
    }else{
       res.status(200).json(deleteCourseSection)
    }
}

module.exports = {createCourseSection,getCourseSections,updateCourseSection,deleteCourseSection}