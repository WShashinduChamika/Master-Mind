import React from 'react'
import './Background.css'
import { Link } from 'react-router-dom'
import img1 from './images/welcome.png'
import img2 from './images/logo.png'

export default function Background({form,page}) {
  return (
    <div className='signup-login-background'>
        <div className='left-part'>
            <div className='signup-login-welcome-part'>
               <img src={img2} alt='logo-png' className='signup-login-logo'></img>
               <p className='signup-login-welcome-text'>Join with us</p>
               <img src={img1} alt='welcome-img' className='signup-login-welcome-img'></img>
            </div>
        </div>
        <div className='right-part'>
            <div className='form-content'>
                <div className='signup-login-nav-bar'>
                   <Link to='/' className='signup-login-nav-link'>Home</Link>
                   <Link to='/about' className='signup-login-nav-link'>About</Link>
                   <Link to='/' className='signup-login-nav-link'>Contact</Link>
                   <Link to='/' className='signup-login-nav-link'>Courses</Link>
                   <Link to={page === 'login' ? '/signup' : '/login'} className='signup-login-nav-link back-sign-up-button'>
                      {page === 'login' ? 'Sign up' : 'Sign in'}
                   </Link>
                </div>
                
                <div>
                    {form}
                </div>
               
            </div>
        </div>
    </div>
  )
}
