const ContactUs = require('../models/contact_us_model')

const mongoose = require('mongoose')

const createContactUs = async(req,res) =>{
  
    const {userName,email,subject,message} = req.body
    try{
        const contactUs = await ContactUs.create({userName,email,subject,message})
        res.status(200).json(contactUs)

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getContactUsList = async (req,res)=>{
   
    const contactUs = await ContactUs.find({}).sort({createdAt:-1})

    if(contactUs){
        res.status(200).json(contactUs)
    }else{
        res.status(400).json({error:"An error is occured"})
    }
}

const getContactUs = async (req,res)=>{
    
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Not such ID"})
    }

    const contactUs = await ContactUs.findById(id)
    if(contactUs){
        res.status(200).json(contactUs)
    }else{
        res.status(400).json({error:"No such a contact"})
    }
}

const deleteContactUs = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Not such ID"})
    }

    const contactUs = await ContactUs.findOneAndDelete({_id:id})
    if(contactUs){
        res.status(200).json(contactUs)
    }else{
        res.status(400).json({error:'Can not delete'})
    }

}

module.exports = {createContactUs,getContactUsList, getContactUs,deleteContactUs}