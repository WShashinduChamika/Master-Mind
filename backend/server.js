require('dotenv').config()

const express = require('express')

//get mongoose
const mongoose = require('mongoose')

//get course routes
const courseRoutes = require('./routes/course')

//get course section routes
const courseSectionRoutes = require('./routes/course_section')

//get course  register routes
const courseRegisterRoutes = require('./routes/course_register')

//get user routes
const userRoutes = require('./routes/user')

//express app
const app = express()

//middleware
app.use(express.json())

//servver images
app.use(express.static('public'))

app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})

// //routes
// app.get('/',(req,res)=>{
//     res.json({msg:"Welcome to the app"})
// })

app.use('/api/courses',courseRoutes)

app.use('/api/course_section',courseSectionRoutes)

app.use('/api/user',userRoutes)

app.use('/api/course_register',courseRegisterRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
 .then(()=>{
   //listen for request
    app.listen(process.env.PORT,()=>{
      console.log("connect to db & listening to port",process.env.PORT)
    })
 })
 .catch((error)=>{
    console.log(error)
 })

