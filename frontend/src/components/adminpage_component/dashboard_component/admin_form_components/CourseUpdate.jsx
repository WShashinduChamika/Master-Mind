import React, { useEffect, useState } from 'react'
import './CourseForm.css'
import { FaArrowRight } from "react-icons/fa";

export default function CourseUpdate(props) {

    const [courseName, setCourseName] = useState('')
    const [courseTitle, setCourseTitle] = useState('')
    

    const getCourse = async(id)=>{
      const response =  await fetch('/api/courses/'+id,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
      })
      const json = await response.json()
      if(response.ok){
         //alert(json.title)
         setCourseTitle(json.title)
         setCourseName(json.name)
      }else{
        alert("error")
      }
    }
    
    const updateCourse = async(name, title,id)=>{
      const response = await fetch('/api/courses/'+id,{
        method:'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name,title})
      })
      if(response.ok){
        alert(name+" "+title)
      }else{
        alert("Error")
      }
    }

    const handleLeftArrow = ()=>{
       props.setIsDisplayUpdateForm(!props.isDisplayUpdateForm)
    }
    
    const handleUpdateBtn = ()=>{
       updateCourse(courseName,courseTitle,props.courseID)
       props.setIsUpdated(!props.isUpdated)
       props.setIsDisplayUpdateForm(!props.isDisplayUpdateForm)
    }

    const handleCancelBtn = ()=>{
      props.setIsDisplayUpdateForm(!props.isDisplayUpdateForm)
    }

    useEffect(()=>{
      getCourse(props.courseID)
      const updateForm = document.getElementById('admin-course-update-form')
      if(props.isDisplayUpdateForm){
        updateForm.classList.remove('admin-course-update-form-invisible')
        updateForm.classList.add('admin-course-update-form')
      }else{
        updateForm.classList.remove('admin-course-update-form')
        updateForm.classList.add('admin-course-update-form-invisible')
      }
    },[props.isDisplayUpdateForm])
  
  return (
    <div className='admin-course-update-form-invisible' id='admin-course-update-form'>
      <div className='admin-course-form-left-arrow' onClick={handleLeftArrow}>
        <FaArrowRight  color='white' size={15}/>
      </div>
      <p className='admin-course-form-haeding'>Update Course</p>
      <p className='admin-couse-form-details'>Here, you can update a course's name and title by using this form.</p>
      <input
        className='admin-form-input-field'
        type='text'
        placeholder={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      ></input>
      <input
        className='admin-form-input-field'
        type='text'
        placeholder={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      ></input>
      <div className='admin-form-buttons'>
        <button onClick={handleCancelBtn} className='admin-form-button' id='cancel-button'>Cancel</button>
        <button onClick={handleUpdateBtn} className='admin-form-button' id='add-button'>Update</button>
      </div>
    </div>
  )
}
