import React, { useState } from 'react'
import './AdminSideNavBar.css'
import logo from './images/logo.png'
import { SiBookstack } from "react-icons/si";
import { FaUsersGear } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function AdminSideNavBar(props) {

  const [isUsersNavigationClicked, setIsUsersNavigationClicked] = useState(true)
  const [isCourseNavigationClicked, setIsCourseNavigationClicked] = useState(false)
  const [isContactUsNaviagationClicked,setIsContactUsNavigationClicked] = useState(false)

  const  navigate = useNavigate()

  const handleUsers = () => {

    setIsContactUsNavigationClicked(false)
    setIsCourseNavigationClicked(false)
    setIsUsersNavigationClicked(true)

    if (props.isCoursesClicked) {
      props.setIsCoursesClicked(!props.isCoursesClicked)
    }
    if (props.isCourseEditClicked) {
      props.setIsCourseEditClicked(!props.isCourseEditClicked)
    }
    if (props.isCourseAddedClicked) {
      props.setIsCourseAddedClicked(!props.isCourseAddedClicked)
    }
    if (props.isUserProfileClicked) {
      props.setIsUserProfileClicked(!props.isUserProfileClicked)
    }
    if (props.isUserEditClicked) {
      props.setIsUserEditClicked(!props.setIsUserEditClicked)
    }
    if (props.isContactUsClicked) {
      props.setIsContactUsClicked(!props.isContactUsClicked)
    }
    if (props.isContactUsFormClicked) {
      props.setIsContactUsFormClicked(!props.isContactUsFormClicked)
    }
    setTimeout(() => {
      props.setIsUsersClicked(!props.isUsersClicked)
    }, 100);
    //alert(props.isUsersClicked)
  }

  const handleCourses = () => {
    
    setIsContactUsNavigationClicked(false)
    setIsCourseNavigationClicked(true)
    setIsUsersNavigationClicked(false)

    if (props.isCourseEditClicked) {
      props.setIsCourseEditClicked(!props.isCourseEditClicked)
    }
    if (props.isUsersClicked) {
      props.setIsUsersClicked(!props.isUsersClicked)
    }
    if (props.isUserProfileClicked) {
      props.setIsUserProfileClicked(!props.isUserProfileClicked)
    }
    if (props.isUserEditClicked) {
      props.setIsUserEditClicked(!props.setIsUserEditClicked)
    }
    if (props.isContactUsClicked) {
      props.setIsContactUsClicked(!props.isContactUsClicked)
    }
    if (props.isContactUsFormClicked) {
      props.setIsContactUsFormClicked(!props.isContactUsFormClicked)
    }
    setTimeout(() => {
      props.setIsCoursesClicked(!props.isCoursesClicked)
    }, 100)

  }
  
  const handleContactUs = ()=>{

    setIsCourseNavigationClicked(false)
    setIsUsersNavigationClicked(false)
    setIsContactUsNavigationClicked(true)

    if(props.isCoursesClicked){
      props.setIsCoursesClicked(!props.isCoursesClicked)
    }
    if(props.isCourseEditClicked){
      props.setIsCourseEditClicked(!props.isCourseEditClicked)
    }
    if(props.isUsersClicked){
      props.setIsUsersClicked(!props.isUsersClicked)
    }
    if(props.isUserProfileClicked){
      props.setIsUserProfileClicked(!props.isUserProfileClicked)
    }
    if(props.isUserEditClicked){
       props.setIsUserEditClicked(!props.setIsUserEditClicked)
    }
    setTimeout(() => {
      props.setIsContactUsClicked(true)
    }, 100);
    //alert(props.isUsersClicked)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className='admin-side-nav-bar'>
      <img src={logo} className='admin-side-nav-bar-logo'></img>'

      <div
        className={!isUsersNavigationClicked ? 'admin-navigations' : "admin-navigations admin-navigations-active"}
        onClick={handleUsers}
      >
        <FaUsersGear className='admin-nav-icon' size={20} />
        <p className='admin-nav-link'>Users</p>
      </div>

      <div
        className={!isCourseNavigationClicked ? 'admin-navigations' : "admin-navigations admin-navigations-active"}
        onClick={handleCourses}
      >
        <SiBookstack className='admin-nav-icon' size={20} />
        <p className='admin-nav-link'>Courses</p>
      </div>
      
      <div
        className={!isContactUsNaviagationClicked? 'admin-navigations' : "admin-navigations admin-navigations-active"}
        onClick={handleContactUs}
      >
        <MdContactMail className='admin-nav-icon' size={18} />
        <p className='admin-nav-link'>Contact Us</p>
      </div>

      <div className='admin-profile-logout' onClick={handleLogout}> 
           <MdLogout className='admin-logout-icon' size={25}></MdLogout>
           <p>Log out</p>
      </div>

    </div>
  )
}
