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

    const {name,email,password,confirmPassword,role,mobileNo} = req.body

    try{
        const user = await User.signup(name,email,password,confirmPassword,role,mobileNo)

        //create a token
        const token = createToken(user._id)

        const uid = user._id

        res.status(200).json({email,token,name,uid,role})

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
      if(user){
         const image = user.image
         const role  = user.role
         const name  = user.name
         const email = user.email
         const mobileNo = user.mobileNo

         res.status(200).json({image,role,name,email,mobileNo})
      }
    }catch(error){
        res.status(400).json({error:"No user"})
    }
}


 
const updateUser = async (req, res) => {
    const { id } = req.params;
    
    //const { name, email, password, confirmPassword, role, mobileNo } = req.body;
    
    
    const  fileName = req.file.filename;
    const formData = req.body
    const name = formData.name
    const email = formData.email
    // const password = formData.password
    // const confirmPassword = formData.confirmPassword
    const role = formData.role
    const mobileNo = formData.mobileNo

    //console.log(file)
    //console.log(password)

    try {
        let user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.updateDetails(name, email,role, mobileNo,fileName);
        //res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUserPassword = async (req,res)=>{

    const {id} = req.params
    const {password,confirmPassword} = req.body
    console.log(password)
    try {
        let user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.updatePassword(password,confirmPassword)
        //res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteUser = async(req,res)=>{
    const {id} = req.params
    try{
        const user = await User.findOneAndDelete({_id:id})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:"No such user"})
    }
}


module.exports = {userLogin,userSignup,getUsers,getUser,deleteUser,updateUser,updateUserPassword}