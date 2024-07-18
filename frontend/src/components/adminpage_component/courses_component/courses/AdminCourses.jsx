import React, { useEffect, useState } from 'react'
import './AdminCourses.css'
import courseImg from './images/course2.png'
import { MdLibraryAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';

export default function AdminCourses(props) {

    const [isHovered, setIsHovered] = useState(false);
    const [courses, setCourses] = useState([])
    const [isDeleted,setIsDeleted] = useState(false)

    const getCourses = async () => {
        const response = await fetch('/api/courses/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        if (!response.ok) {
            //alert('Eroor')
        } else {
            const json = await response.json()
            let course = json
            setCourses(course)
            //alert(course)
        }
    }

    const handleAddNewCourseBtn = () => {
        props.setIsCourseAddedClicked(!props.isCourseAddedClicked)
        props.setIsCoursesClicked(!props.isCoursesClicked)
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleEditBtn = (id) => {
        props.setCourseID(id)
        props.setIsCoursesClicked(!props.isCoursesClicked)
        setTimeout(() => {
            props.setIsCourseEditClicked(!props.isCourseEditClicked)
        }, 100);

    }

    const handleDeleteBtn = (id) => {
        handleDeleteAlert(id)
    }

    const deleteCourse = async (id) => {
        const response = await fetch('/api/courses/' + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        if(response.ok){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setIsDeleted(!isDeleted)
        }
    }

    const handleDeleteAlert = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteCourse(id)
            } 
          });
    }

    useEffect(() => {
        getCourses()
        const adminCourses = document.getElementById('admin-courses')
        if (props.isCoursesClicked) {
            adminCourses.classList.remove('admin-courses-invisible')
            adminCourses.classList.add('admin-courses')
        } else {
            adminCourses.classList.remove('admin-courses')
            adminCourses.classList.add('admin-courses-invisible')
        }
    }, [props.isCoursesClicked, isDeleted])

    return (
        <div className='admin-courses-invisible' id='admin-courses'>
            <div className='admin-navigation-title'>Courses</div>
            <div className='admin-path'>Admin Panel / Course List</div>
            <div className='admin-courses-section'>
                <div className='admin-course add-new-course' onClick={handleAddNewCourseBtn}>
                    <MdLibraryAdd className='admin-course-add-icon' size={30} color='#359ADE' />
                </div>
                {courses.map((course, index) => (
                    <div className='admin-course'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        key={course._id}
                    >
                        <img src={courseImg} className='admin-course-img'></img>
                        <div className='admin-course-details-and-edit-delete'>
                            <div className='admin-course-details'>
                                <p className='admin-course-name'>{course.name}</p>
                                <p className='admin-course-title'>{course.title}</p>
                            </div>
                            <div className='admin-course-edit-delete'>
                                <FaEdit size={17} className='admin-course-icon' onClick={() => { handleEditBtn(course._id) }}></FaEdit>
                                <MdDeleteOutline size={19} className='admin-course-icon' onClick={() => { handleDeleteBtn(course._id) }}></MdDeleteOutline>
                            </div>
                        </div>
                        {/* {
                                isHovered &&
                                <div className='overlay'>
                                    <button className='admin-course-btn' onClick={()=>{handleEditBtn(course._id)}}>Edit</button>
                                    <button className='admin-course-btn'>Delete</button>
                                </div>
                            } */}
                    </div>
                ))}
            </div>
        </div>
    )
}
