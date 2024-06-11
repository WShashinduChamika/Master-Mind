import React, { useEffect, useState } from 'react'
import './NavigationBar.css'
import logo from './images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function NavigationBar() {

  const [username, setUserName] = useState()
  const [userID,setUserID] = useState()
  const [userRole,setUserRole] =useState()
  const [image,setImage] = useState()
  const [isLoading,setIsLoading] = useState(false)
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const screenWidth = window.innerWidth;
  const location = useLocation()
  const navigate = useNavigate()

  const getUser = async (id) => {
    setIsLoading(true)
    const response = await fetch('/api/user/' + id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json()
    if (response.ok) {
      console.log(json)
      setImage(json.image)
      setIsLoading(false)
    } 

  }
  const getUserDataFromLocalStorage = ()=>{
    let data = localStorage.getItem('user')
    if (data) {
      let parssedData = JSON.parse(data)
      if (parssedData && parssedData.name) {
        let userName = parssedData.name
        setUserName(userName)
        setUserID(parssedData.uid)
        setUserRole(parssedData.role)
        console.log(userName)
      }
    }
    else {
      setUserName('')
    }
  }

  useEffect(() => {
    getUserDataFromLocalStorage()
  }, [])

  useEffect(()=>{
     if(userID){
      getUser(userID)
     }
  },[userID])

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleProfile = ()=>{

     if(userRole=='admin'){
        navigate('/admin')
     }else{
        navigate('/user_profile')
     }

  }

  const handleMenuBar = () => {
    const navLinks = document.querySelector('.nav-links')
    if (!isMenuClicked) {
      //navLinks.style.display='flex'
      navLinks.classList.add('nav-links-active')
    } else {
      //navLinks.style.display='none'
      navLinks.classList.remove('nav-links-active')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className={scrollY > 100 ? 'nav-bar scrolled-bar' : 'nav-bar'}>

      <img src={logo} alt='logo' className='logo'></img>

      {!isMenuClicked ? 
        <MdMenu size={35} className={scrollY > 100 ? 'menu-bar scrolled-bar' : 'menu-bar'} onClick={handleMenuBar} />
        : <MdClose size={35} className={scrollY > 100 ? 'menu-bar scrolled-bar' : 'menu-bar'} onClick={handleMenuBar} />
      }
      <div className='nav-links'>
        <Link to='/' className={scrollY > 100 ? 'nav-link scrolled-link' : 'nav-link'} id={location.pathname === '/' && scrollY<100? 'nav-link-active-link' : ''}>Home</Link>
        <Link to='/about' className={scrollY > 100 ? 'nav-link scrolled-link' : 'nav-link'} id={location.pathname === '/about' && scrollY<100 ? 'nav-link-active-link' : ''}>About</Link>
        <Link to='/contact' className={scrollY > 100 ? 'nav-link scrolled-link' : 'nav-link'} id={location.pathname === '/contact' && scrollY<100  ? 'nav-link-active-link' : ''}>Contact</Link>
        <Link to='/course' className={scrollY > 100 ? 'nav-link scrolled-link' : 'nav-link'} id={location.pathname === '/course' && scrollY<100 ? 'nav-link-active-link' : ''}>Courses</Link>
        { !isLoading?
          !username?
          <Link to='/login' className={scrollY > 100 ? 'nav-link nav-link-sign-in scrolled-link' : 'nav-link nav-link-sign-in'} >Sign in</Link>
          :<></>
          :<></>
        }
         { !isLoading?
          !username?
          <Link to='/signup' className='nav-link-sign-up-button' >Sign up</Link>
          :<></>
          :<></>
        }
        {!isLoading? image? 
           <img src={'http://localhost:4000/images/' + image} className='nav-bar-profile-pic' onClick={handleProfile}></img>: 
           username && <div className='nav-bar-user' onClick={handleProfile}><p>{username[0]}</p></div>
           :<></>
        }
      </div>

    </div>
  )
}
