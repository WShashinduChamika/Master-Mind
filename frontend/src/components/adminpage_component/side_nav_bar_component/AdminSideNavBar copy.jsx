import React from 'react'
import './AdminSideNavBar.css'
import logo from './images/logo.png'
import { MdSpaceDashboard } from "react-icons/md";

export default function AdminSideNavBar(props) {
  
  const handleDashboard = ()=>{
    //alert(props.isDahsboardClicked)
    props.setIsDashboardClicked(!props.isDahsboardClicked)
  }

  return (
    <div className='admin-side-nav-bar'>
      <img src={logo} className='admin-side-nav-bar-logo'></img>'
       <div className="admin-side-nav-bar-user-profile">
          <div className="admin-profile-pic">
             S
          </div>
          <p className='admin-user-name'>Shashindu Chamika</p>
          <p className='admin-email'>shashinduchamika99@gmail.com</p>
       </div>
       <div 
          className={!props.isDahsboardClicked?'admin-navigations':"admin-navigations admin-navigations-active"} 
          onClick={handleDashboard}
        >
          <MdSpaceDashboard className='admin-nav-icon' size={20} />
          <p className='admin-nav-link'>Dashboard</p>
       </div>
    </div>
  )
}
