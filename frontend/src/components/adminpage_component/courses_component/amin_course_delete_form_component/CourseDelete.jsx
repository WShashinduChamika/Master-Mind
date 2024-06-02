import React, { useEffect, useState } from 'react'
import './CourseForm.css'
import { IoClose } from "react-icons/io5";

export default function CourseDelete(props) {

    const [selectedCourseName, setSelectedCourseName] = useState('')
    const [courseName, setCourseName] = useState('')


    const getCourse = async (id) => {
        const response = await fetch('/api/courses/' + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const json = await response.json()
        if (response.ok) {
            //alert(json.title)
            setSelectedCourseName(json.name)
        } else {
            //alert("error")
        }
    }

    const deleteCourse = async (id) => {
        const response = await fetch('/api/courses/' + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
    }

    const handleClose = () => {
        //alert(props.isDisplayAddForm)
        props.setIsDisplayCourseDeleteForm(!props.isDisplayCourseDeleteForm)
    }
    const handleDeleteBtn = (e) => {
        deleteCourse(props.courseID)
        props.setIsDisplayCourseDeleteForm(!props.isDisplayCourseDeleteForm)
        props.setIsDeleted(!props.isDeleted)
        e.preventDefault()
        setCourseName('')
    }
    const handleCancelBtn = () => {
        props.setIsDisplayCourseDeleteForm(!props.isDisplayCourseDeleteForm)
    }

    useEffect(() => {
        getCourse(props.courseID)
        const deleteForm = document.getElementById('admin-course-delete-form')
        if (props.isDisplayCourseDeleteForm) {
            deleteForm.classList.remove('admin-course-delete-form-invisible')
            deleteForm.classList.add('admin-course-delete-form')
        }
        else {
            deleteForm.classList.remove('admin-course-delete-form')
            deleteForm.classList.add('admin-course-delete-form-invisible')
        }
    }, [props.isDisplayCourseDeleteForm])

    return (
        <div className='admin-course-delete-form-invisible' id='admin-course-delete-form'>
            <IoClose size={30} onClick={handleClose} className='close-icon'></IoClose>
            <p className='admin-delete-form-haeding'>Delete Course</p>
            <p className='admin-delete-form-details' style={{ color: '#e77979' }}>Here, you can add a new course for the application by filling this form</p>
            <input
                className='admin-delete-form-input-field'
                type='text'
                placeholder='Enter course name'
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            ></input>
            <div className='admin-delete-form-buttons'>
                <button
                    onClick={handleCancelBtn}
                    className='admin-delete-form-button'
                    id='cancel-button'
                >
                    Cancel
                </button>
                <button
                    onClick={handleDeleteBtn}
                    className='admin-delete-form-button'
                    id='add-button'
                    style={selectedCourseName==courseName?{ backgroundColor: 'red' }:{ backgroundColor: '#BCC6CC' }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
