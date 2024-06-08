const express = require('express')

const multer = require('multer')
const path = require('path')


const router = express.Router()

const {userLogin,userSignup,getUsers, getUser, deleteUser, updateUser, updateUserPassword} = require('../controllers/user_controllers')

router.post('/login',userLogin)

router.post('/signup',userSignup)

router.get('/',getUsers)

router.get('/:id',getUser) 

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"public/images")
    },
    filename: (req, file, cb) => {
     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
   }
 })
 
 const upload = multer({
   storage:storage
 })

router.patch('/:id',upload.single('file'), updateUser)

router.patch('/password/:id',updateUserPassword)

router.delete('/:id',deleteUser)

module.exports = router