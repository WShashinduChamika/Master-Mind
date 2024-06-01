import React, { useEffect, useState } from 'react'
import './AddNewCourse.css'
import courseImg from './images/course.png'


export default function AddNewCourse(props) {

    const [courseSection, setCourseSection] = useState([])
    const [isCreated, setIsCreated] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
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
            let courseID = json._id
            return courseID
        } else {

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
        setTimeout(() => {
            goToCourses()
        }, 1000);
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
           
           <div className='admin-navigation-title'>Add New Course</div>
            <div className='admin-path'>Admin Panel / <span onClick={goToCourses}>Courses List</span>/ Add New Course</div>
            <div className='add-selected-course'>

                <div className='add-course-detail-section'>
                    <div className='add-course-details'>
                        <img src={courseImg} className='add-course-img'></img>
                        <input
                            className="admin-courses-add-new-course-details"
                            placeholder="Enter course name"
                            onChange={(e) => setCourseName(e.target.value)}
                        >
                        </input>
                        <input
                            className="admin-courses-add-new-course-details"
                            placeholder="Enter course title"
                            onChange={(e) => setCourseTitle(e.target.value)}
                        >
                        </input>

                    </div>
                    <div className='add-course-overview'>
                        <p className='add-course-overview-title'>Course Overview</p>
                        <textarea
                            className='add-course-overview-description'
                            type='text'
                            placeholder="Enter course overview"
                            onChange={(e) => setCourseOverview(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>

                <div className='add-course-sections-part'>
                    <p className='add-course-sections-title'>This Course Includes</p>
                    <div className='add-course-section-list'>
                        {courseSection != null ? courseSection.map((section, index) => (
                            <div className='add-course-section'>
                                <div
                                    key={section._id} className='add-courses-add-new-course-section'

                                > {section.title}</div>
                            </div>
                        )) : () => { }}
                        {inputFields.map((field, index) => (
                            <div key={field.id} className='add-course-section'>
                                <input
                                    className='add-course-section-input'
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
                    <div className='add-course-field-handle-btn-container'>
                        <button onClick={handleAddField} className='add-course-field-handle-btn'>Add</button>
                        <button onClick={handleRemoveField} className='add-course-field-handle-btn'>Remove</button>
                    </div>
                </div>
                <button onClick={saveChanges} className='course-add-save-change-btn'>Save</button>
            </div>
        </div>
    )
}
