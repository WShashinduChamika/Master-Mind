const mongoose = require('mongoose')

const schema = mongoose.Schema

const courseSectionSchema = new schema({
    title:{
        type:String,
        required: true,
    },
    courseID:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('CourseSection',courseSectionSchema)

