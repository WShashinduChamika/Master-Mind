import React, { useEffect, useState } from 'react'
import './CourseRegister.css'
import { IoClose } from "react-icons/io5";
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';

export default function CourseRegister(props) {

    const courseID = props.courseID
    const [userID, setUserID] = useState()
    const [courseName, setCourseName] = useState('')
    const [courseTitle, setCourseTitle] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')

    const [swalProps, setSwalProps] = useState({});

    const getUser = () => {
        let data = localStorage.getItem('user')
        if (data) {
            let parssedData = JSON.parse(data)
            if (parssedData && parssedData.uid) {
                setUserID(parssedData.uid)
                setUserName(parssedData.name)
                setEmail(parssedData.email)
                //alert(email)
            }
        }
        else {
            //alert("Please login")
        }
    }

    const getCourse = async (id) => {
        const response = await fetch('/api/courses/' + id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()

        if (response.ok) {

            setCourseName(json.name)
            setCourseTitle(json.title)
        }
        else {
            //alert('error')
        }
    }

    const sendRegistserMail = async (courseName,email) => {
        const response = await fetch('/api/course_register_email/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({courseName,email})
        })
        const json = await response.json()
        if (response.ok) {
            alert('Email sent')
        }
        else {
            alert('error')
        }
    }

    const createCourseRegistration = async (name, email, contact_Number, course_ID, user_ID) => {
        const response = await fetch('/api/course_register/', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ name, email, contact_Number, course_ID, user_ID, })
        })
        const json = await response.json()
        if (response.ok) {
            props.setIsCourseRegisterClicked(!props.isCourseRegisterClicked)
            await sendRegistserMail(courseName,email)
            Swal.fire({
                title: "Course Registration Success!",
                text: "Course registration process is successfully done.",
                icon: "success",
                confirmButtonColor:"#359ADE"
            }).then((result)=>{
                setUserName('')
                setEmail('')
                setContactNumber('')
                handleCloseCourse()
             })
        } else {
            alert(json.error)
        }
    }
    
    const sendEmail = async()=>{
        const response = await fetch('/api/course_register_email/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:{}
        })
    }
    const handleRegisterCourse = (e) => {

        if (userID) {
            createCourseRegistration(userName, email, contactNumber, courseID, userID)
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Sorry..!",
                text: "You should have an user account for registering a course",
                confirmButtonColor:"#359ADE"
              }).then((result)=>{
                 setUserName('')
                 setEmail('')
                 setContactNumber('')
                 handleCloseCourse()
              })
        }
    }

    useEffect(() => {

        getUser();
        getCourse(courseID)

        const registerForm = document.getElementById('user-course-register-form')

        if (props.isCourseRegisterClicked) {
            registerForm.classList.remove('user-course-register-form-invisible')
            registerForm.classList.add('user-course-register-form')
        } else {
            registerForm.classList.remove('user-course-register-form')
            registerForm.classList.add('user-course-register-form-invisible')
        }

    }, [props.isCourseRegisterClicked])

    const handleCloseCourse = () => {
        props.setIsCourseRegisterClicked(!props.isCourseRegisterClicked)
        const coursePage = document.getElementById('course-page')
        coursePage.style.opacity = '1'
    }

    return (
        <div className='user-course-register-form-invisible' id='user-course-register-form'>
            <SweetAlert2 {...swalProps}></SweetAlert2>
            <IoClose size={40} className='user-course-register-close-icon' onClick={handleCloseCourse} />
            <p className='user-course-form-haeding'>Register for Course</p>
            <p className='user-couse-form-details'>Here, you can add a new course for the application by filling this form</p>
            <input
                className='user-form-input-field'
                type='text'
                value={userName}
                placeholder={!userName?"Enter your name":userName}
                onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input
                className='user-form-input-field'
                type='text'
                value={email}
                placeholder={!email?"Enter your email":email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
                className='user-form-input-field'
                type='text'
                value={contactNumber}
                placeholder={!contactNumber?"Enter contact number":contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
            ></input>
            <div className='user-form-buttons'>
                <button onClick={handleRegisterCourse} className='user-form-button' id='user-course-add-button'>Register</button>
            </div>
        </div>
    )
}
