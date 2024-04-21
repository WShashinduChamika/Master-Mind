import React, { useEffect, useState } from 'react'
import AdminSideNavBar from '../components/adminpage_component/side_nav_bar_component/AdminSideNavBar'
import DashBoard from '../components/adminpage_component/dashboard_component/DashBoard'

export default function AdminPage() {

  const [isDahsboardClicked,setIsDashboardClicked] = useState(false)
  
  const [courseID,setCourseID] = useState('')

  const [isAdded,setIsAdded] = useState(false)
  const [isUpdated,setIsUpdated] = useState(false)
  const [isDeleted,setIsDeleted] = useState(false)

  const [isDisplayAddForm, setIsDisplayAddForm] =  useState(false)
  const [isDisplayUpdateForm, setIsDisplayUpdateForm] = useState(false)
  
  useEffect(()=>{

  },[])

  return (
    <div className='admin-page'>

      <AdminSideNavBar
        isDahsboardClicked={isDahsboardClicked} 
        setIsDashboardClicked={setIsDashboardClicked}
      >
      </AdminSideNavBar>

      <DashBoard isDahsboardClicked={isDahsboardClicked}></DashBoard>

    </div>
  )
}
