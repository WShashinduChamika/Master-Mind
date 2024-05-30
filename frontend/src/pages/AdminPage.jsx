import React, { useEffect, useState } from 'react'
import AdminSideNavBar from '../components/adminpage_component/side_nav_bar_component/AdminSideNavBar'
import AdminHoirzontalBar from '../components/adminpage_component/admin_horizontal_top_bar_component/AdminHoirzontalBar'
import DashBoard from '../components/adminpage_component/dashboard_component/DashBoard'
import AdminCourseList from '../components/adminpage_component/courses_component/AdminCourseList'

export default function AdminPage() {

  const [isDahsboardClicked, setIsDashboardClicked] = useState(true)

  const [isCoursesClicked, setIsCoursesClicked] = useState(false)
  const [isCourseAddedClicked, setIsCourseAddedClicked] = useState(false);


  const [courseID, setCourseID] = useState('')

  useEffect(() => {

  }, [])

  return (
    <div className='admin-page'>

      <div className='admin-page-side-nav-bar'>

        <AdminSideNavBar

          isDahsboardClicked={isDahsboardClicked}
          setIsDashboardClicked={setIsDashboardClicked}

          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsCoursesClicked}
          isCourseAddedClicked={isCourseAddedClicked}
          setIsCourseAddedClicked={setIsCourseAddedClicked}
        >
        </AdminSideNavBar>
      </div>
    
      <div className='admin-page-content-side'>
        <AdminHoirzontalBar></AdminHoirzontalBar>

        <DashBoard 
           isDahsboardClicked={isDahsboardClicked}

        ></DashBoard>

        <AdminCourseList
          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsCoursesClicked}
          isCourseAddedClicked={isCourseAddedClicked}
          setIsCourseAddedClicked={setIsCourseAddedClicked}
        ></AdminCourseList>
      </div>

    </div>
  )
}
