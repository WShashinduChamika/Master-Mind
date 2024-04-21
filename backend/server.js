require('dotenv').config()

const express = require('express')

//get mongoose
const mongoose = require('mongoose')

//get course routes
const courseRoutes = require('./routes/course')

//get user routes
const userRoutes = require('./routes/user')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})

// //routes
// app.get('/',(req,res)=>{
//     res.json({msg:"Welcome to the app"})
// })

app.use('/api/courses',courseRoutes)

app.use('/api/user',userRoutes)

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

