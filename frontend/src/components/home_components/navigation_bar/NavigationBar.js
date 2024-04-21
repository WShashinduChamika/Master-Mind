import React, { useEffect, useState } from 'react'
import './NavigationBar.css'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'

export default function NavigationBar() {

    const [username,setUserName] = useState()

  useEffect(()=>{
    let data = localStorage.getItem('user')
    if(data){
    let parssedData = JSON.parse(data)
    if(parssedData&& parssedData.name){
        setUserName(parssedData.name)
        console.log(username)  
     }
    }
    else{
       setUserName('')
    }
  },[])
 
  

  const handleLogout = ()=>{
    localStorage.removeItem('user')
    setUserName('')
  }
  return (
    <div className='nav-bar'>
      <img src={logo} alt='logo' className='logo'></img>
      <div className='nav-links'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/about' className='nav-link'>About</Link>
        <Link to='/contact' className='nav-link'>Contact</Link>
        <Link to='/' className='nav-link'>Courses</Link>
        <Link to='/login' className='nav-link nav-link-sign-in' style={!username==''?{display:'none'}:{display:'flex'}}>Sign in</Link>
        <Link to='/signup' className='nav-link sign-up-button' style={!username==''?{display:'none'}:{display:'flex'}}>Sign up</Link>
        {username && <div className='user' onClick={handleLogout}>{username[0]}</div>}
      </div>
    </div>
  )
}
