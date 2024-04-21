import React, { useEffect, useState } from 'react'

import CourseAdd from './admin_form_components/CourseAdd'
import CourseUpdate from './admin_form_components/CourseUpdate'
import AdminCoursesList from './courses_component/AdminCoursesList'
import CourseDelete from './admin_form_components/CourseDelete'

export default function DashBoard(props) {

    const [courseID, setCourseID] = useState('')

    const [isAdded, setIsAdded] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const [isDisplayAddForm, setIsDisplayAddForm] = useState(false)
    const [isDisplayUpdateForm, setIsDisplayUpdateForm] = useState(false)
    const [isDisplayDeleteForm, setIsDisplayDeleteForm] = useState(false)

    return (
        <div style={{display:'flex'}}>
            <AdminCoursesList
                isDashboardClicked={props.isDahsboardClicked}
                courseID={courseID}
                setCourseID={setCourseID}
                isAdded={isAdded}
                isUpdated={isUpdated}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
                isDisplayAddForm={isDisplayAddForm}
                setIsDisplayAddForm={setIsDisplayAddForm}
                isDisplayUpdateForm={isDisplayUpdateForm}
                setIsDisplayUpdateForm={setIsDisplayUpdateForm}
                isDisplayDeleteForm={isDisplayDeleteForm}
                setIsDisplayDeleteForm={setIsDisplayDeleteForm}
            >
            </AdminCoursesList>

            <CourseAdd
                isAdded={isAdded}
                setIsAdded={setIsAdded}
                isDisplayAddForm={isDisplayAddForm}
                setIsDisplayAddForm={setIsDisplayAddForm}
            >
            </CourseAdd>

            <CourseUpdate
                isDashboardClicked={props.isDahsboardClicked}
                courseID={courseID}
                isDisplayUpdateForm={isDisplayUpdateForm}
                setIsDisplayUpdateForm={setIsDisplayUpdateForm}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
            >
            </CourseUpdate>

            <CourseDelete
               courseID={courseID}
               isDeleted={isDeleted}
               setIsDeleted={setIsDeleted}
               isDisplayDeleteForm={isDisplayDeleteForm}
               setIsDisplayDeleteForm={setIsDisplayDeleteForm}
            >   
            </CourseDelete>
        </div>
    )
}
