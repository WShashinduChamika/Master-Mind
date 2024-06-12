import React, { useState } from 'react'
import NavigationBar from '../components/home_components/navigation_bar/NavigationBar'
import CourseSlider from '../components/user_course_components/course_slider_component/CourseSlider'
import CourseList from '../components/user_course_components/courses_list_component/CourseList'
import Footer from '../components/footer/Footer'
import UserCourse from '../components/user_course_components/course_component/UserCourse'
import CourseRegister from '../components/user_course_components/course_register_form_component/CourseRegister'
import Headroom from 'react-headroom'
export default function CoursePage() {

  const [isCoursesClicked, setIsCoursesClicked] = useState(false)
  const [isCourseClicked, setIsCourseClicked] = useState(false)
  const [courseID, setCourseID] = useState()
  const [isCourseRegisterClicked, setIsCourseRegisterClicked] = useState(false)

  return (
    <div >
      
      <div id='course-page'>
        <Headroom>
          <NavigationBar></NavigationBar>
        </Headroom>

        <CourseSlider></CourseSlider>

        <CourseList
          setCourseID={setCourseID}
          isCourseClicked={isCourseClicked}
          setIsCourseClicked={setIsCourseClicked}
          isCoursesClicked={isCoursesClicked}
        ></CourseList>


        <Footer></Footer>
      </div>
      

      
        <UserCourse
          courseID={courseID}
          isCourseClicked={isCourseClicked}
          setIsCourseClicked={setIsCourseClicked}
          isCoursesClicked={isCoursesClicked}
          setIsCoursesClicked={setIsCoursesClicked}
          isCourseRegisterClicked={isCourseRegisterClicked}
          setIsCourseRegisterClicked={setIsCourseRegisterClicked}
        ></UserCourse>

        <CourseRegister
          courseID={courseID}
          isCourseRegisterClicked={isCourseRegisterClicked}
          setIsCourseRegisterClicked={setIsCourseRegisterClicked}
        ></CourseRegister>
     
    </div>
  )
}
