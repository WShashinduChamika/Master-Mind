import React, { useEffect, useState } from 'react'
import './UserCourse.css'
import courseImg from './images/course2.png'
import sectionIcon from './images/section_icon.png'
import { FaAngleLeft } from "react-icons/fa6";

export default function UserCourse(props) {

  const [courseName, setCourseName] = useState()
  const [courseTitle, setCourseTitle] = useState()
  const [courseOverview, setCoursOverview] = useState()
  const [courseSection, setCourseSection] = useState()

  const getCourse = async (id) => {
    const response = await fetch('/api/courses/' + id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      const json = await response.json()
      let course = json
      //setCourse(course)
      setCourseName(course.name)
      setCourseTitle(course.title)
      setCoursOverview(course.overview)
      console.log(course)
    } else {
      //alert('error')
    }
  }

  const getCourseSections = async (id) => {
    const response = await fetch('/api/course_section/' + id, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    })
    if (response.ok) {
      const json = await response.json()
      let courseSection = json
      setCourseSection(courseSection)
    } else {
      //alert("Error")
    }
  }

  const handleBackCourses = () => {
    props.setIsCoursesClicked(!props.isCoursesClicked)
    props.setIsCourseClicked(!props.isCourseClicked)
    const coursePage = document.getElementById('course-page')
    coursePage.style.opacity = '1'
  }

  const handleCourseRegister = () => {
    props.setIsCourseRegisterClicked(!props.isCourseRegisterClicked)
    props.setIsCourseClicked(!props.isCourseClicked)
  }

  useEffect(() => {

    getCourse(props.courseID)
    getCourseSections(props.courseID)

    const course = document.getElementById('user-selected-course')
    if (props.isCourseClicked) {
        course.classList.add('user-selected-course')
        course.classList.remove('user-selected-course-invisible')
    } else {
        course.classList.add('user-selected-course-invisible')
        course.classList.remove('user-selected-course')
    }

  }, [props.isCourseClicked])

  return (
    <div className='user-selected-course-invisible' id='user-selected-course'>
      <div className='user-back-to-course' onClick={handleBackCourses}>
        <FaAngleLeft size={20}/>
        <p>Back to Courses</p>
      </div>
      <div className='user-course-and-course-section-details-part'>
        <div className='user-course-details-part'>
          <img src={courseImg} className='user-selected-course-img'></img>
          <p className='user-selected-course-name'>{courseName}</p>
          <p className='user-selected-course-title'>{courseTitle}</p>
          <div className='user-course-overview-part'>
            <p className='overview-part-title'>Overview</p>
            <p className='overview-part-text'>
              {courseOverview}
            </p>
          </div>
        </div>
        <div className='user-course-secations-part'>
          <div className='user-course-section-container'>
            <p className='user-course-section-title'>This Course Includes :</p>


            <div className='user-course-section-list'>
              {courseSection && courseSection.map((section, index) => (
                <div className='section-container'>
                  <img src={sectionIcon}></img>
                  <p>{section.title}</p>
                </div>
              ))}

            </div>
          </div>

          <button 
            className='user-course-register-btn' 
            onClick={handleCourseRegister}>Register for course</button>
        </div>
      </div>
      
    </div>
  )
}
