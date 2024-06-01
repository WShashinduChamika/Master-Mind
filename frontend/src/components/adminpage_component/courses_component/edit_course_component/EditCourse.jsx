import React, { useEffect, useState } from 'react'
import './EditCourse.css'
import courseImg from './images/course.png'
import { MdDelete } from "react-icons/md";


export default function EditCourse(props) {

  const courseID = props.courseID
  const [course, setCourse] = useState([])
  const [courseSection, setCourseSection] = useState([])
  const [isCreated, setIsCreated] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const [editedCourseSection, setEditedCourseSection] = useState([])
  const [createdCourseSection, setCreatedCourseSection] = useState([])
  const [inputFields, setInputFields] = useState([]);
  const [courseName, setCourseName] = useState()
  const [courseTitle, setCourseTitle] = useState()
  const [courseOverview, setCourseOverview] = useState()

  const getCourse = async (id) => {
    const response = await fetch('/api/courses/' + id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await response.json()
    if (response.ok) {

      let course = json
      setCourse(course)
      setCourseName(course.name)
      setCourseTitle(course.title)
      setCourseOverview(course.overview)

    } else {
      alert('error')
    }
  }

  const updateCourse = async (id, name, title, overview) => {
    const response = await fetch('/api/courses/' + id, {
      method: 'PATCH',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, title, overview })
    })
    if (response.ok) {
      alert('success')
    } else {
      alert('error')
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

  const createCourseSection = async (title) => {
    const response = await fetch('/api/course_section/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, courseID })
    })
    if (response.ok) {
      alert("Created")
      setIsCreated(!isCreated)
    } else {
      alert("Error")
    }
  }

  const updateCourseSection = async (id, title) => {
    const response = await fetch('/api/course_section/' + id, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    })
    if (response.ok) {
      alert("success")
      setIsEdited(!isEdited)
    } else {
      alert("Error")
    }
  }

  const deleteCourseSection = async (id) => {
    const response = await fetch('/api/course_section/' + id, {
      method: 'DELETE',
      headers: { "Content-type": "application/json" },
    })
    setIsDeleted(!isDeleted)
  }
  //const updateCourse = async(id,)
  const handleAddField = () => {
    setInputFields([...inputFields, { id: inputFields.length, value: '' }]);
  }

  const handleRemoveAllField = () => {
    const updatedFields = [...inputFields];
    for (var i = 0; i <= inputFields.length + 1; i++) {
      updatedFields.pop();
    }
    setInputFields(updatedFields);
  }

  const handleRemoveField = () => {

    const updatedFields = [...inputFields];
    updatedFields.pop();
    setInputFields(updatedFields);

    const createdSection = [...createdCourseSection]
    createdSection.pop()
    setCreatedCourseSection(createdSection)

  }

  const handleDeleteCourse = (id) => {
    deleteCourseSection(id)
  }

  const method1 = () => {
    console.log(createdCourseSection)
    createdCourseSection.map((section) => {
      createCourseSection(section.value)
    })
    console.log(createdCourseSection)
  }

  const method2 = () => {
    editedCourseSection.map((section) => {
      updateCourseSection(section.id, section.value);
    })
  }

  const saveChanges = async () => {
    updateCourse(props.courseID, courseName, courseTitle, courseOverview)
    method1()
    method2()
    handleRemoveAllField()
    setCreatedCourseSection([])
    setEditedCourseSection([])
  }

  const goToCourses = () => {
    props.setIsCourseEditClicked(!props.isCourseEditClicked)
    props.setIsCoursesClicked(!props.isCoursesClicked)
  }

  useEffect(() => {

    getCourse(props.courseID)
    getCourseSections(props.courseID)
    console.log("sections" + createdCourseSection)
    console.log("input-fiels" + inputFields)

    const editCourse = document.getElementById('edit-course')

    if (props.isCourseEditClicked) {
      editCourse.classList.remove('edit-course-invisible')
      editCourse.classList.add('edit-course')
    } else {
      editCourse.classList.remove('edit-course')
      editCourse.classList.add('edit-course-invisible')
    }
  }, [props.isCourseEditClicked, isCreated, isEdited, isDeleted])

  return (
    <div className='edit-course-invisible' id='edit-course'>

      <div className='admin-navigation-title'>Edit Course</div>
      <div className='admin-path'>Admin Panel / <span onClick={goToCourses}>Courses List</span>/ Edit Course</div>

      <div className='edit-selected-course'>

        <div className='edit-course-detail-section'>
          <div className='edit-course-details'>
            <img src={courseImg} className='edit-course-img'></img>
            <input
              className="edit-course-details"
              placeholder={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            >
            </input>
            <input
              className="edit-course-details title"
              placeholder={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            >
            </input>

          </div>
          <div className='edit-course-overview'>
            <p className='edit-course-overview-title'>Course Overview</p>
            <textarea
              className='edit-course-overview-description'
              type='text'
              placeholder={courseOverview}
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
                <input
                  key={section._id} className='edit-course-section-input'
                  placeholder={section.title}
                  value={editedCourseSection[index]?.value || ''}
                  onChange={(e) => {
                    const updatedSections = [...editedCourseSection];
                    updatedSections[index] = { id: section._id, value: e.target.value };
                    setEditedCourseSection(updatedSections);
                  }}
                ></input>
                <MdDelete
                  onClick={() => { handleDeleteCourse(section._id) }}
                  size={20}
                  className='admin-courses-edit-delete-btn'
                />
              </div>
            )) : () => { }}
            {inputFields.map((field, index) => (
              <div key={field.id} className='add-course-section'>
                <input
                  className='edit-course-section-input new-section'
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
      </div>
      <button onClick={saveChanges} className='course-edit-save-change-btn'>Save</button>
    </div>
  )
}
