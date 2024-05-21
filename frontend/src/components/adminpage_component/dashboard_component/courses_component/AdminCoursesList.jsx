import React, { useEffect, useState } from 'react'
import './AdminCoursesList.css'
import courseImg from './images/course.png'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function AdminCoursesList(props) {

  const [courseList, setCourseList] = useState([])
  const getCourses = async () => {
    const response = await fetch('/api/courses/', {
      mehtod: "GET",
      headers: { "Content-Type": "application/json" }
    })
    const json = await response.json()
    console.log(json)
    setCourseList(json)
  }

  const handleAddCourse = () => {
    props.setIsDisplayAddForm(!props.isDisplayAddForm)
    //alert(props.isDisplayAddForm)
  }

  const handleUpdateCourse = (courseId)=>{
    props.setIsDisplayUpdateForm(!props.isDisplayUpdateForm)
    props.setCourseID(courseId)
  }

  const handleDeleteCourse = (id) => {
    //deleteCourse(id)
    props.setCourseID(id)
    props.setIsDisplayDeleteForm(!props.isDisplayDeleteForm)
    // props.setIsDeleted(!props.isDeleted)
    // alert(props.isDeleted)
  }

  useEffect(() => {

    getCourses()
    if (props.isDashboardClicked) {
      document.getElementById("admin-dashboard-courses-list-").classList.remove("admin-dashboard-courses-list-invisible")
      document.getElementById("admin-dashboard-courses-list-").classList.add("admin-dashboard-courses-list-visible")
    }
    else {
      document.getElementById("admin-dashboard-courses-list-").classList.remove("admin-dashboard-courses-list-visible")
      document.getElementById("admin-dashboard-courses-list-").classList.add("admin-dashboard-courses-list-invisible")
    }
    
  }, [props.isDashboardClicked, props.isAdded, props.isDeleted, props.isUpdated])
  
  return (
    <div className='admin-dashboard-courses-list-invisible' id='admin-dashboard-courses-list-'>
      <button className='admin-dashboard-course-list-add-btn' onClick={handleAddCourse}>+ Course</button>
      <div className='admin-dashboard-courses'>
        {
          courseList.map((course, index) => (
            <div className='admin-dashboard-course' key={index}>
              <div className='admin-course-detail-section'>
                <img src={courseImg} className='admin-dashboard-course-img'></img>
                <div className='admin-dashboard-course-details'>
                  <p className='admin-dashboard-course-name'>{course.name}</p>
                  <p className='admin-dashboard-course-title'>{course.title}</p>
                </div>
              </div>
              <div className='admin-course-btn-section'>
                <FaEdit 
                  onClick={() => { handleUpdateCourse(course._id) }} 
                  size={17} 
                  className='admin-courses-dash-delete-btn' 
                />
                <MdDelete 
                  onClick={() => { handleDeleteCourse(course._id) }} 
                  size={20} 
                  className='admin-courses-dash-delete-btn' 
                />
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}
