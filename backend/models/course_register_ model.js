const mongoose = require('mongoose')

const schema = mongoose.Schema

const courseRegisterSchema = new schema({
    name:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    },
    contact_Number:{
        type: String,
        required: true
    },
    user_ID:{
        type: String,
        required: true
    },
    course_ID:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('CourseRegistration', courseRegisterSchema)
