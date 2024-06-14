import React, { useEffect, useState } from 'react'
import UserSideNavBar from '../components/user_profile_component/user_profile_side_nav_bar/UserSideNavBar'
import UserTopBar from '../components/user_profile_component/user_top_bar/UserTopBar'
import UserAccount from '../components/user_profile_component/user_account/UserAccount'
import UserCoursesList from '../components/user_profile_component/user_courses/UserCoursesList'


export default function UserProfilePage() {

  const [userName, setUserName] = useState()
  const [userID, setUserID] = useState()

  const [isUserProfileClicked, setIsUserProfileClicked] = useState(true)
  const [isUserEditClicked,setIsUserEditClicked] = useState(false)
  const [isUserUpdated,setIsUserUpdated] = useState(false)

  const [isCoursesClicked, setIsCoursesClicked] = useState(false)
  const [isDisplayRegisterCourseDeleteForm,setIsDisplayRegisterCourseDeleteForm] = useState(false)

  
  return (
    <div className='user-profile-page'>
      <div className='user-profile-page-side-nav-bar'>

        <UserSideNavBar

          isUserProfileClicked={isUserProfileClicked}
          setIsUserProfileClicked={setIsUserProfileClicked}
          isUserEditClicked={isUserEditClicked}
          setIsUserEditClicked={setIsUserEditClicked}

          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsCoursesClicked}
          isDisplayRegisterCourseDeleteForm={isDisplayRegisterCourseDeleteForm}
          setIsDisplayRegisterCourseDeleteForm={setIsDisplayRegisterCourseDeleteForm}

        ></UserSideNavBar>

      </div>

      <div className='user-page-content-side'>

        <UserTopBar
          isUserUpdated={isUserUpdated}
          setIsUserUpdated={setIsUserUpdated}
        ></UserTopBar>

        <UserAccount
          isUserProfileClicked={isUserProfileClicked}
          setIsUserProfileClicked={setIsUserProfileClicked}
          isUserEditClicked={isUserEditClicked}
          setIsUserEditClicked={setIsUserEditClicked}
          isUserUpdated={isUserUpdated}
          setIsUserUpdated={setIsUserUpdated}
        ></UserAccount>
        
        <UserCoursesList
          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsUserEditClicked}
          isDisplayRegisterCourseDeleteForm={isDisplayRegisterCourseDeleteForm}
          setIsDisplayRegisterCourseDeleteForm={setIsDisplayRegisterCourseDeleteForm}
        >
        </UserCoursesList>

      </div>

    </div>
  )
}
