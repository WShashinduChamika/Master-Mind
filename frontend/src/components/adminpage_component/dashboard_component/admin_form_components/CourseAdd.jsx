import React, { useEffect, useState } from 'react'
import './CourseForm.css'
import { FaArrowRight } from "react-icons/fa";

export default function CourseAdd(props) {
  const [courseName, setCourseName] = useState('')
  const [courseTitle, setCourseTitle] = useState('')

  const handleAddCourse = () => {
    createCourse(courseName, courseTitle)
    alert(props.isAdded)
    props.setIsAdded(!props.isAdded)
  }

  const createCourse = async (name, title) => {
    alert(name + " " + title)
    const response = await fetch("/api/courses/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, title })
    })
    if (!response.ok) {
      alert("Error")
    }
  }

  const handleLeftArrow = () => {
    //alert(props.isDisplayAddForm)
    props.setIsDisplayAddForm(!props.isDisplayAddForm)
  }

  useEffect(() => {
    const addForm = document.getElementById('admin-course-form')
    if (props.isDisplayAddForm) {
      addForm.classList.remove('admin-course-form-invisible')
      addForm.classList.add('admin-course-form')
    }
    else {
      addForm.classList.remove('admin-course-form')
      addForm.classList.add('admin-course-form-invisible')
    }
  }, [props.isDisplayAddForm])

  return (
    <div className='admin-course-form-invisible' id='admin-course-form'>
      <div className='admin-course-form-left-arrow' onClick={handleLeftArrow}>
        <FaArrowRight  color='white' size={15}/>
      </div>
      <p className='admin-course-form-haeding'>Add Course</p>
      <p className='admin-couse-form-details'>Here, you can add a new course for the application by filling this form</p>
      <input
        className='admin-form-input-field'
        type='text'
        placeholder='Enter course name'
        onChange={(e) => setCourseName(e.target.value)}
      ></input>
      <input
        className='admin-form-input-field'
        type='text'
        placeholder='Enter course title'
        onChange={(e) => setCourseTitle(e.target.value)}
      ></input>
      <div className='admin-form-buttons'>
        <button onClick={handleAddCourse} className='admin-form-button' id='cancel-button'>Cancel</button>
        <button onClick={handleAddCourse} className='admin-form-button' id='add-button'>Add</button>
      </div>
    </div>
  )
}
