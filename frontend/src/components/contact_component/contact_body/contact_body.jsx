import React, { useState } from 'react'
import Email from './images/email.png'
import FaceBook from './images/facebook.png'
import Linkden from './images/linkden.png'
import Home from './images/home.png'
import Phone from './images/phone.png'
import YouTube from './images/youtube.png'
import './contact_body.css'
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'
import { fadein } from '../../../Variants'

export default function ContactBody() {
  
  const createContactUs = async(userName,email,subject,message)=>{
    const response = await fetch('/api/contact_us',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({userName,email,subject,message})
    })
    const json = await response.json()
    if(response.ok){
       Swal.fire({
        title: "Send Successfully!",
        text: "Your message is successfully send into admin",
        icon: "success",
        confirmButtonColor: "#359ADE"
      })
      setUserName('')
      setEmail('')
      setSubject('')
      setMessage(' ')
    }else{
      alert(json.error)
    }
 }

 const [userName,setUserName] = useState()
 const [email,setEmail] = useState()
 const [subject,setSubject] = useState()
 const [message,setMessage] = useState()
 
 const handleSubmit = ()=>{
    createContactUs(userName,email,subject,message)
 }

 return (
   <div className='contact-body'>
     <motion.div 
       variants={fadein('right', 0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{ once: true, amount: 0.7 }}
       className='get-in-touch'>
       <div className='text'>
         <h1>GET IN TOUCH</h1>
         <p>Locking for help film from and start new adventure </p>
         <hr />
       </div>
       <div className='connect'>
         <div className='connect-option'>
           <h2>Head Quatre</h2>
           <div className='option'>
             <img src={Home} alt='Home' />
             <p>181/1 Dala Walavva, Kuruvita</p>
           </div>
         </div>
         <div className='connect-option'>
           <h2>Phone</h2>
           <div className='option'>
             <img src={Phone} alt='Phone' />
             <p>+94772236066</p>
           </div>
         </div>
         <div className='connect-option'>
           <h2>Support</h2>
           <div className='option'>
             <img src={Email} alt='Email' />
             <p>abcdefght@gmail.com</p>
           </div>
         </div>
         <div className='connect-option'>
           <h2>Follow Us</h2>
           <div className='pro_link'>
             <span className='link'><img src={YouTube} alt='YouTube' /></span>
             <span className='link'><img src={Linkden} alt='Linkden' /></span>
             <span className='link'><img src={FaceBook} alt='FaceBook' /></span>

           </div>
         </div>
       </div>

     </motion.div>

     <motion.div 
       variants={fadein('left', 0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{ once: true, amount: 0.7 }}
       class="form">
       <h1>Lets connect</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
       <div class="form-row">
         <input 
            value={userName}
            type="text" 
            placeholder="Your Name" 
            onChange={(e)=>setUserName(e.target.value)}
          ></input>
         <input 
            value={email}
            type="email" 
            placeholder="Email address"
            onChange={(e)=>setEmail(e.target.value)}
         ></input>
       </div>
       <div class="form-colum">
         <input
            value={subject}
            type="text" 
            placeholder="Subject"
            onChange={(e)=>setSubject(e.target.value)} 
        ></input>
       </div>
       <div class="form-colum">
         <textarea 
           value={message}
           cols="30" rows="8" 
           placeholder="How can we help you..."
           onChange={(e)=>setMessage(e.target.value)} 
        ></textarea>

       </div>
       <div class="form-colum">
         <button onClick={handleSubmit}>Send Massage</button>
       </div>


     </motion.div>
   </div>
 )
}


