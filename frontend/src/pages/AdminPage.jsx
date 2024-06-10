import React, { useEffect, useState } from 'react'
import AdminSideNavBar from '../components/adminpage_component/side_nav_bar_component/AdminSideNavBar'
import AdminHoirzontalBar from '../components/adminpage_component/admin_horizontal_top_bar_component/AdminHoirzontalBar'
import AdminCourseList from '../components/adminpage_component/courses_component/AdminCourseList'
import UsersList from '../components/adminpage_component/users_component/UsersList'
import ContactUsList from '../components/adminpage_component/contact_us_component/ContactUsList'

export default function AdminPage() {

  const [isCoursesClicked, setIsCoursesClicked] = useState(false)
  const [isCourseAddedClicked, setIsCourseAddedClicked] = useState(false);
  const [isCourseEditClicked, setIsCourseEditClicked] = useState(false)
  const [isDisplayCourseDeleteForm, setIsDisplayCourseDeleteForm] = useState(false)

  const [isUsersClicked, setIsUsersClicked] = useState(true)
  const [isUserProfileClicked, setIsUserProfileClicked] = useState(false)
  const [isUserEditClicked, setIsUserEditClicked] = useState(false)
  const [isUserDeleted, setIsUserDeleted] = useState(false)

  const [isContactUsClicked, setIsContactUsClicked] = useState(false)
  const [isContactUsFormClicked, setIsContactUsFormClicked] = useState(false)


  const [courseID, setCourseID] = useState('')

  useEffect(() => {

  }, [])

  return (
    <div className='admin-page'>

      <div className='admin-page-side-nav-bar'>

        <AdminSideNavBar

          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsCoursesClicked}
          isCourseAddedClicked={isCourseAddedClicked}
          setIsCourseAddedClicked={setIsCourseAddedClicked}
          isCourseEditClicked={isCourseEditClicked}
          setIsCourseEditClicked={setIsCourseEditClicked}

          isUsersClicked={isUsersClicked}
          setIsUsersClicked={setIsUsersClicked}
          isUserProfileClicked={isUserProfileClicked}
          setIsUserProfileClicked={setIsUserProfileClicked}
          isUserEditClicked={isUserEditClicked}
          setIsUserEditClicked={setIsUserEditClicked}
          isUserDeleted={isUserDeleted}
          setIsUserDeleted={setIsUserDeleted}

          isContactUsClicked={isContactUsClicked}
          setIsContactUsClicked={setIsContactUsClicked}
          isContactUsFormClicked={isContactUsFormClicked}
          setIsContactUsFormClicked={setIsContactUsFormClicked}
        >
        </AdminSideNavBar>
      </div>

      <div className='admin-page-content-side'>
        
        <AdminHoirzontalBar></AdminHoirzontalBar>

        <AdminCourseList
          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsCoursesClicked}
          isCourseAddedClicked={isCourseAddedClicked}
          setIsCourseAddedClicked={setIsCourseAddedClicked}
          isCourseEditClicked={isCourseEditClicked}
          setIsCourseEditClicked={setIsCourseEditClicked}
          isDisplayCourseDeleteForm={isDisplayCourseDeleteForm}
          setIsDisplayCourseDeleteForm={setIsDisplayCourseDeleteForm}
        ></AdminCourseList>

        <UsersList
          isUsersClicked={isUsersClicked}
          setIsUsersClicked={setIsUsersClicked}
          isUserProfileClicked={isUserProfileClicked}
          setIsUserProfileClicked={setIsUserProfileClicked}
          isUserEditClicked={isUserEditClicked}
          setIsUserEditClicked={setIsUserEditClicked}
          isUserDeleted={isUserDeleted}
          setIsUserDeleted={setIsUserDeleted}
        >
        </UsersList>

        <ContactUsList
            isContactUsClicked={isContactUsClicked}
            setIsContactUsClicked={setIsContactUsClicked}
            isContactUsFormClicked={isContactUsFormClicked}
            setIsContactUsFormClicked={setIsContactUsFormClicked}
          />
      </div>

    </div>
  )
}
