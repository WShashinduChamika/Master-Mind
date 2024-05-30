import React, { useState } from 'react'
import AdminCourses from './courses/AdminCourses'
import './AdminCourseList.css'


export default function AdminCourseList(props) {
    const [courseID, setCourseID] = useState()
    return (

        <div className='admin-courses-list'>

            <AdminCourses
                isCoursesClicked={props.isCoursesClicked}
                setIsCoursesClicked={props.setIsCoursesClicked}
                setCourseID={setCourseID}
            ></AdminCourses>

        </div>
    )
}
