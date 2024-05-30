import React, { useState } from 'react'
import './AdminSideNavBar.css'
import logo from './images/logo.png'
import { MdSpaceDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

export default function AdminSideNavBar(props) {
  
  const [isDashboardNavigationClicked,setIsDashboardNavigationClicked] = useState(true)
  const [isCourseNavigationClicked,setIsCourseNavigationClicked] =useState(false)

  const handleDashboard = ()=>{

    setIsDashboardNavigationClicked(true)
    setIsCourseNavigationClicked(false)
    
    if (props.isCoursesClicked) {
      props.setIsCoursesClicked(!props.isCoursesClicked)
    }

    props.setIsDashboardClicked(!props.isDahsboardClicked)

  }
  
  const handleCourses = ()=>{
    
    setIsCourseNavigationClicked(true)
    setIsDashboardNavigationClicked(false)
    
    if (props.isDahsboardClicked) {
      props.setIsDashboardClicked(!props.isDahsboardClicked)
    }

    props.setIsCoursesClicked(!props.isCoursesClicked)
    
  }

  return (
    <div className='admin-side-nav-bar'>
      <img src={logo} className='admin-side-nav-bar-logo'></img>'

       <div 
          className={!isDashboardNavigationClicked?'admin-navigations':"admin-navigations admin-navigations-active"} 
          onClick={handleDashboard}
        >
          <MdSpaceDashboard className='admin-nav-icon' size={20} />
          <p className='admin-nav-link'>Dashboard</p>
       </div>

       <div
        className={!isCourseNavigationClicked? 'admin-navigations' : "admin-navigations admin-navigations-active"}
        onClick={handleCourses}
      >
        <SiBookstack className='admin-nav-icon' size={20} />
        <p className='admin-nav-link'>Courses</p>
      </div>

    </div>
  )
}
