import React, { useState } from 'react'
import AdminCourses from './courses/AdminCourses'
import './AdminCourseList.css'
import EditCourse from './edit_course_component/EditCourse'
import AddNewCourse from './add_new_course_component/AddNewCourse'

export default function AdminCourseList(props) {

    const [courseID, setCourseID] = useState()
    const [isDeleted,setIsDeleted] = useState(false)

    return (

        <div className='admin-courses-list'>

            <AdminCourses
                isCoursesClicked={props.isCoursesClicked}
                setIsCoursesClicked={props.setIsCoursesClicked}
                isCourseEditClicked={props.isCourseEditClicked}
                setIsCourseEditClicked={props.setIsCourseEditClicked}
                setCourseID={setCourseID}
                isCourseAddedClicked={props.isCourseAddedClicked}
                setIsCourseAddedClicked={props.setIsCourseAddedClicked}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
            ></AdminCourses>

            {props.isCourseEditClicked ?
                <EditCourse
                    isCoursesClicked={props.isCoursesClicked}
                    setIsCoursesClicked={props.setIsCoursesClicked}
                    isCourseEditClicked={props.isCourseEditClicked}
                    setIsCourseEditClicked={props.setIsCourseEditClicked}
                    courseID={courseID}
                ></EditCourse>
                : <></>
            }

            {props.isCourseAddedClicked ?
                <AddNewCourse
                    isCoursesClicked={props.isCoursesClicked}
                    setIsCoursesClicked={props.setIsCoursesClicked}
                    isCourseAddedClicked={props.isCourseAddedClicked}
                    setIsCourseAddedClicked={props.setIsCourseAddedClicked}
                    courseID={courseID}
                ></AddNewCourse>
                : <></>
            }

        </div>
    )
}
