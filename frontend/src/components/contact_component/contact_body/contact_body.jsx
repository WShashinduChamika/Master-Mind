import React from 'react'
import Email from './images/email.png'
import FaceBook from './images/facebook.png'
import Linkden from './images/linkden.png'
import Home from './images/home.png'
import Phone from './images/phone.png'
import YouTube from './images/youtube.png'
import './contact_body.css'



const contact_body = () => {
  return (
    <div className='contact_body'>
        <div className='get_in_touch'> 
           <div className='text'>
             <h1>GET IN TOUCH</h1>
             <p>Locking for help film from and start new adventure </p>
             <hr/>
           </div>
           <div className='connect'>
             <div className='connect_option'>
                <h2>Head Quatre</h2>
                <div className='option'>
                  <img src={Home} alt='Home'/>
                  <p>181/1 Dala Walavva, Kuruvita</p>
                </div>
             </div>
             <div className='connect_option'>
                <h2>Phone</h2>
                <div className='option'>
                  <img  src={Phone} alt='Phone'/>
                  <p>+94772236066</p>
                </div>
             </div>
             <div className='connect_option'>
                <h2>Support</h2>
                <div className='option'>
                  <img src={Email} alt='Email'/>
                  <p>abcdefght@gmail.com</p>
                </div>
             </div>
             <div className='connect_option'>
                <h2>Follow Us</h2>
                <div className='pro_link'>
                    <span className='link'><img src={YouTube} alt='YouTube'/></span>
                    <span  className='link'><img src={Linkden} alt='Linkden'/></span>
                    <span className='link'><img src={FaceBook} alt='FaceBook'/></span>
                    
                </div>
             </div>
           </div>

        </div>
        <div class="form">
			<h1>Lets connect</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
			<div class="form-row">
				<input type="text" placeholder="Your Name" name=""></input>
                <input type="email" name="" placeholder="Email address"></input>
			</div>
			<div class="form-colum">
				<input type="text" placeholder="Subject" name=""></input>

			</div>
			<div class="form-colum">
				<textarea name="" cols="30" rows="8" placeholder="How can we help you..."></textarea>

			</div>
			<div class="form-colum">
				<button>Send Massage</button>
			</div>


		</div>

    </div>
  )
}

export default contact_body