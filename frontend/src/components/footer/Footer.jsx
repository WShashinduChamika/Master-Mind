import React from 'react'
import './Footer.css'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='footer-content'>
      <div className='upper-part'>
        <div className='intro-part'>
           <img src={logo} className='footer-logo'></img>
           <p className='footer-intro-text'>Learn new skills with an industrial curriculum. Take<br></br> certifications as well as job opportunities in various<br></br> companies.</p>
        </div>
        <div className='footer-links'>
           <p className='footer-link-title'>User Links</p>
           <Link className='footer-link' to='/'>Home</Link>
           <Link className='footer-link' to='/'>About</Link>
           <Link className='footer-link' to='/'>Contact</Link>
           <Link className='footer-link' to='/'>Signup</Link>
        </div>
        <div className='footer-links'>
           <p className='footer-link-title'>Services</p>
           <Link className='footer-link' to='/'>Class</Link>
           <Link className='footer-link' to='/'>Challenges</Link>
           <Link className='footer-link' to='/'>SkillPath</Link>
           <Link className='footer-link' to='/'>Webinar</Link>
        </div>
        <div className='footer-links'>
           <p className='footer-link-title'>Contact by using</p>
           <div className='contact-type'>
              <BiSolidPhoneCall className='contact-icon'  size={23} color='#EFF3F5'/>
              <p className='contact-deatail'>011-345-56-4567</p>
           </div>
           <div className='contact-type'>
              <IoMdMail className='contact-icon'  size={23} color='#EFF3F5'/>
              <p className='contact-deatail'>masterminded@gmail.com</p>
           </div>
           <div className='contact-type'>
              <IoLocation className='contact-icon'  size={23} color='#EFF3F5'/>
              <p className='contact-deatail'>No. 23, Dehiwala Road, MountLavinia</p>
           </div>
        </div>
      </div>
      <div className='down-part '>
         <p className='copyright-text'>Copyright  2023 brand name</p>
         <FaFacebook className='social-media-icon' size={23} color='#EFF3F5'/>
         <IoLogoTwitter className='social-media-icon' size={23} color='#EFF3F5'/>
         <AiFillInstagram className='social-media-icon' size={23} color='#EFF3F5'/>
      </div>
    </div>
  )
}
