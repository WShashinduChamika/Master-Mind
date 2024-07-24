import React, { useEffect, useState } from 'react'
import './AddNewCourse.css'
import courseImg from './images/course2.png'
import Swal from 'sweetalert2';

export default function AddNewCourse(props) {
   
    const [courseSection, setCourseSection] = useState([])
    const [isCreated, setIsCreated] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const [createdCourseSection, setCreatedCourseSection] = useState([])
    const [inputFields, setInputFields] = useState([{ id: 0, value: '' }]);
    const [courseName, setCourseName] = useState()
    const [courseTitle, setCourseTitle] = useState()
    const [courseOverview, setCourseOverview] = useState()


    const createCourse = async (name, title, overview) => {
        const response = await fetch('/api/courses/', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ name, title, overview })
        })
        const json = await response.json()

        if (response.ok) {
            //alert('success')
            let courseID = json._id
            return courseID
           
        } else {
            Swal.fire({
                title: "Error",
                text: "There was an error updating your password. Please try again.",
                icon: "error",
                confirmButtonColor: "#359ADE",
              });
        }
    }


    const createCourseSection = async (title, courseID) => {
        const response = await fetch('/api/course_section/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, courseID })
        })
        if (response.ok) {
            handleRemoveField()
        } else {
            Swal.fire({
                title: "Error",
                text: "There was an error updating your password. Please try again.",
                icon: "error",
                confirmButtonColor: "#359ADE",
              });
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
   
    const handleAddField = () => {
        setInputFields([...inputFields, { id: inputFields.length, value: '' }]);
    }


    const handleRemoveField = () => {

        const updatedFields = [...inputFields];
        updatedFields.pop();
        setInputFields(updatedFields);

        const createdSection = [...createdCourseSection]
        createdSection.pop()
        setCreatedCourseSection(createdSection)

    }


    const saveChanges = async () => {

        console.log(createdCourseSection)
        let courseID = await createCourse(courseName, courseTitle, courseOverview)
        createdCourseSection.map((section) => {
            createCourseSection(section.value, courseID)
        })
        getCourseSections(courseID)
        setIsEdited(!isEdited)
        setIsCreated(!isCreated)
        setInputFields([])
        setCreatedCourseSection([])
        Swal.fire({
            title: "Course Created!",
            text: "This course is available in course list",
            icon: "success",
            confirmButtonColor: "#359ADE"
          }).then((result) => {
            if (result.isConfirmed) {
                props.setIsCourseAddedClicked(!props.isCourseAddedClicked)
                props.setIsCoursesClicked(!props.isCoursesClicked)
            }
          });
    }

    const goToCourses = () => {
        props.setIsCourseAddedClicked(!props.isCourseAddedClicked)
        props.setIsCoursesClicked(!props.isCoursesClicked)
    }
    
    useEffect(() => {
        const newCourse = document.getElementById('admin-courses-add-new-course')
        if (props.isCourseAddedClicked) {
            newCourse.classList.add('admin-courses-add-new-course')
            newCourse.classList.remove('admin-courses-add-new-course-invisible')
        } else {
            newCourse.classList.add('admin-courses-add-new-course-invisible')
            newCourse.classList.remove('admin-courses-add-new-course')
        }

    }, [props.isCourseAddedClicked])

    return (
        <div className='admin-courses-add-new-course-invisible' id='admin-courses-add-new-course'>
            <div className='admin-navigation-title'>Courses</div>
            <div className='admin-path'>Admin Panel / <span onClick={goToCourses}>Course List</span> /Add New Course</div>
            <div className='edit-selected-course'>

                <div className='edit-course-detail-section'>
                    <div className='edit-course-details'>
                        <img src={courseImg} className='edit-course-img'></img>
                        <input
                            className="admin-courses-add-new-course-details"
                            placeholder="Enter course name"
                            onChange={(e) => setCourseName(e.target.value)}
                        >
                        </input>
                        <input
                            className="admin-courses-add-new-course-details admin-courses-add-new-title"
                            placeholder="Enter course title"
                            onChange={(e) => setCourseTitle(e.target.value)}
                        >
                        </input>

                    </div>
                    <div className='edit-course-overview'>
                        <p className='edit-course-overview-title'>Course Overview</p>
                        <textarea
                            className='admin-courses-add-new-course-overview-description'
                            type='text'
                            placeholder="Enter course overview"
                            onChange={(e) => setCourseOverview(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>

                <div className='edit-course-sections-part'>
                    <p className='edit-course-sections-title'>This Course Includes</p>
                    <div className='edit-course-section-list'>
                        {courseSection != null ? courseSection.map((section, index) => (
                            <div className='edit-course-section'>
                                <div
                                    key={section._id} className='admin-courses-add-new-course-section'

                                > {section.title}</div>
                            </div>
                        )) : () => { }}
                        {inputFields.map((field, index) => (
                            <div key={field.id} className='add-course-section'>
                                <input
                                    className='edit-course-section-input'
                                    type="text"
                                    placeholder="Enter section"
                                    onChange={(e) => {
                                        const updatedSections = [...createdCourseSection];
                                        updatedSections[index] = { value: e.target.value };
                                        setCreatedCourseSection(updatedSections);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='edit-course-field-handle-btn-container'>
                        <button onClick={handleAddField} className='edit-course-field-handle-btn'>Add</button>
                        <button onClick={handleRemoveField} className='edit-course-field-handle-btn'>Remove</button>
                    </div>
                </div>
                <button onClick={saveChanges} className='course-edit-save-change-btn'>Save</button>
            </div>
        </div>
    )
}
