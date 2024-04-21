import React, { useEffect, useState } from 'react'
import './CourseForm.css'
import { FaArrowUp } from "react-icons/fa";

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
            alert("error")
        }
    }

    const deleteCourse = async (id) => {
        const response = await fetch('/api/courses/' + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
    }

    const handleLeftArrow = () => {
        //alert(props.isDisplayAddForm)
        props.setIsDisplayDeleteForm(!props.isDisplayDeleteForm)
    }
    const handleDeleteBtn = () => {
        deleteCourse(props.courseID)
        props.setIsDeleted(!props.isDeleted)
        props.setIsDisplayDeleteForm(!props.isDisplayDeleteForm)
    }
    const handleCancelBtn = () => {
        props.setIsDisplayDeleteForm(!props.isDisplayDeleteForm)
    }

    useEffect(() => {
        getCourse(props.courseID)
        const deleteForm = document.getElementById('admin-course-delete-form')
        if (props.isDisplayDeleteForm) {
            deleteForm.classList.remove('admin-course-delete-form-invisible')
            deleteForm.classList.add('admin-course-delete-form')
        }
        else {
            deleteForm.classList.remove('admin-course-delete-form')
            deleteForm.classList.add('admin-course-delete-form-invisible')
        }
    }, [props.isDisplayDeleteForm])

    return (
        <div className='admin-course-delete-form-invisible' id='admin-course-delete-form'>
            <div className='admin-course-form-left-arrow' onClick={handleLeftArrow}>
              <FaArrowUp color='white' size={15} />
            </div>
            <p className='admin-course-form-haeding'>Delete Course</p>
            <p className='admin-couse-form-details' style={{ color: '#e77979' }}>Here, you can add a new course for the application by filling this form</p>
            <input
                className='admin-form-input-field'
                type='text'
                placeholder='Enter course name'
                onChange={(e) => setCourseName(e.target.value)}
            ></input>
            <div className='admin-form-buttons'>
                <button
                    onClick={handleCancelBtn}
                    className='admin-form-button'
                    id='cancel-button'
                >
                    Cancel
                </button>
                <button
                    onClick={handleDeleteBtn}
                    className='admin-form-button'
                    id='add-button'
                    style={selectedCourseName==courseName?{ backgroundColor: 'red' }:{ backgroundColor: '#BCC6CC' }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
