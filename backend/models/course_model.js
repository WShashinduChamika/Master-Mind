const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true
    },
    overview:{
        type:String,
        require:true
    }
    
},{timestamps:true})

module.exports = mongoose.model('Course',courseSchema)