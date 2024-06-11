import React from 'react'
import './HomePageSlide.css'
import { Link, useNavigate } from 'react-router-dom'
import slideimg from './images/homeslide.png'

export default function HomePageSlide() {

  const navigate = useNavigate()

  const handleGetStarted = ()=>{
    navigate('/course')
  }


  return (
    <div className='home-page-slide'>
      <div className='home-welcome-part'>
        <p className='home-welcome-text-1'>
          Access  The World’s<br></br>
          Best Learning Course<br></br>
          With MasterMindEd<br></br>
        </p>
        <p className='home-welcome-text-2'>
          Dicover a world of knowledge with our cutting-edge online course<br></br> 
          application. Empower yourself to succeed in your career, passion, and<br></br> 
          personal growth journey.
        </p>
        <div className='home-get-started-btn' onClick={handleGetStarted}>Get started</div>
      </div>
      <div className='home-image-part'>
         <img src={slideimg} className='home-img'></img>
      </div>
    </div>
  )
}
