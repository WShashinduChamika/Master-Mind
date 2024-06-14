import React, { useEffect, useState } from 'react'
import './UserCoursesList.css'
import RegisterCourses from './register_courses/RegisterCourses'

export default function UserCoursesList(props) {

  const [userID, setUserID] = useState()
  const [courseID, setCourseID] = useState()

  useEffect(() => {

  })

  return (
    <div className='user-courses-list'>

      <RegisterCourses
        userID={userID}
        setUserID={setUserID}
        courseID={courseID}
        setCourseID={setCourseID}
        isCoursesClicked={props.isCoursesClicked}
        setIsCoursesClicked={props.setIsUserEditClicked}
        isDisplayRegisterCourseDeleteForm={props.isDisplayRegisterCourseDeleteForm}
        setIsDisplayRegisterCourseDeleteForm={props.setIsDisplayRegisterCourseDeleteForm}
      ></RegisterCourses>



    </div>
  )
}
