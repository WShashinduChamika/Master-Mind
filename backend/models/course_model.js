const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sectionSchema = new Schema({
    title:{
        type:String,
        //required: true
    }
})
const courseSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true
    },
    sections:[sectionSchema],
    
},{timestamps:true})

module.exports = mongoose.model('Course',courseSchema)