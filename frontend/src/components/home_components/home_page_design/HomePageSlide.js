import React from 'react'
import './HomePageSlide.css'
import { Link } from 'react-router-dom'
import slideimg from './images/homeslide.png'

export default function HomePageSlide() {
  return (
    <div className='home-page-slide'>
      <div className='welcome-part'>
        <p className='welcome-text-1'>
          Access  The World’s<br></br>
          Best Learning Course<br></br>
          With MasterMindEd<br></br>
        </p>
        <p className='welcome-text-2'>
          Dicover a world of knowledge with our cutting-edge online course<br></br> 
          application. Empower yourself to succeed in your career, passion, and<br></br> 
          personal growth journey.
        </p>
        <Link to='/about' className='get-started-btn'>Get started</Link>
      </div>
      <div className='image-part'>
         <img src={slideimg} className='home-img'></img>
      </div>
    </div>
  )
}
