const User = require('../models/user_model')

const jwt = require('jsonwebtoken')

//create a token
const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const userLogin = async (req,res)=>{
    const {email,password} = req.body

    try{
        const user = await User.login(email,password)

        const token = createToken(user._id)

        const name = user.name

        const uid = user._id

        const role = user.role

        res.status(200).json({email,token,name,uid,role})

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const userSignup = async(req,res)=>{

    const {name,email,password,confirmPassword,role} = req.body

    try{
        const user = await User.signup(name,email,password,confirmPassword,role)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email,token})

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getUsers = async(req,res)=>{
  try{
     const users = await User.find({}).sort({createdAt:-1})
     res.status(200).json(users)
  }catch(error){
     res.status(400).json({error:"No users"})
  }
}

const getUser = async(req, res)=>{
    const {id} = req.params
    try{
      const user = await User.findById(id)
      res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:"No user"})
    }
}

module.exports = {userLogin,userSignup,getUsers,getUser}