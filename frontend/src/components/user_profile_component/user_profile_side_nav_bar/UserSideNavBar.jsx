import React, { useEffect, useState } from 'react'
import './UserSideNavBar.css'
import logo from './images/logo.png'
import { SiBookstack } from "react-icons/si";
import { MdLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';

export default function UserSideNavBar(props) {

    const [isUsersNaviagationClicked,setIsUsersNavigationClicked] = useState(true)
    const [isCourseNavigationClicked,setIsCourseNavigationClicked] = useState(false)
    const navigate = useNavigate()
  
   
    const handleCourses = () => {

      setIsCourseNavigationClicked(true)
      setIsUsersNavigationClicked(false)
  
      if(props.isUserProfileClicked){
         props.setIsUserProfileClicked(!props.isUserProfileClicked)
      }
      if(props.isUserEditClicked){
        props.setIsUserEditClicked(!props.isUserEditClicked)
      }

      props.setIsCoursesClicked(!props.isCoursesClicked)
    }
  
    const handleUsers = ()=>{

      setIsCourseNavigationClicked(false)
      setIsUsersNavigationClicked(true)
      
      if(props.isCoursesClicked){
        props.setIsCoursesClicked(!props.isCoursesClicked)
      }
      
      props.setIsUserProfileClicked(!props.isUserProfileClicked)
    }
    const handleLogout = () => {
      localStorage.removeItem('user')
      //setUserName('')
      navigate('/')
    }
    // s
    return (
      <div className='user-side-nav-bar'>
        <img src={logo} className='user-side-nav-bar-logo'></img>'
        
        <div
          className={!isUsersNaviagationClicked? 'user-navigations' : "user-navigations user-navigations-active"}
          onClick={handleUsers}
        >
          <FaRegUserCircle className='user-nav-icon' size={20} />
          <p className='user-nav-link'>My Profile</p>
        </div>
  
        <div
          className={!isCourseNavigationClicked? 'user-navigations' : "user-navigations admin-navigations-active"}
          onClick={handleCourses}
        >
          <SiBookstack className='user-nav-icon' size={20} />
          <p className='user-nav-link'>My Courses</p>
        </div>
        
        <div className='profile-logout' onClick={handleLogout}> 
           <MdLogout className='logout-icon' size={25}></MdLogout>
           <p>Log out</p>
        </div>

      </div>
    )
    
}
