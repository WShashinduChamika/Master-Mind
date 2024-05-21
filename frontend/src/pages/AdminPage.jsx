import React, { useEffect, useState } from 'react'
import AdminSideNavBar from '../components/adminpage_component/side_nav_bar_component/AdminSideNavBar'
import AdminHoirzontalBar from '../components/adminpage_component/admin_horizontal_top_bar_component/AdminHoirzontalBar'
import DashBoard from '../components/adminpage_component/dashboard_component/DashBoard'

export default function AdminPage() {

  const [isDahsboardClicked, setIsDashboardClicked] = useState(true)

  const [courseID, setCourseID] = useState('')

  const [isAdded, setIsAdded] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const [isDisplayAddForm, setIsDisplayAddForm] = useState(false)
  const [isDisplayUpdateForm, setIsDisplayUpdateForm] = useState(false)

  useEffect(() => {

  }, [])

  return (
    <div className='admin-page'>

      <div className='admin-page-side-nav-bar'>

        <AdminSideNavBar
          isDahsboardClicked={isDahsboardClicked}
          setIsDashboardClicked={setIsDashboardClicked}
        >
        </AdminSideNavBar>
      </div>
    
      <div className='admin-page-content-side'>
        <AdminHoirzontalBar></AdminHoirzontalBar>
        <DashBoard isDahsboardClicked={isDahsboardClicked}></DashBoard>
      </div>

    </div>
  )
}
