const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactUsSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('Contact_Us', contactUsSchema)
