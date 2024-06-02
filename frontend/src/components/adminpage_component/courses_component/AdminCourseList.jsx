import React, { useState } from 'react'
import AdminCourses from './courses/AdminCourses'
import './AdminCourseList.css'
import AddNewCourse from './add_new_course_component/AddNewCourse'
import EditCourse from './edit_course_component/EditCourse'


export default function AdminCourseList(props) {
    const [courseID, setCourseID] = useState()
    return (

        <div className='admin-courses-list'>

            <AdminCourses
                isCoursesClicked={props.isCoursesClicked}
                setIsCoursesClicked={props.setIsCoursesClicked}
                setCourseID={setCourseID}
                isCourseAddedClicked={props.isCourseAddedClicked}
                setIsCourseAddedClicked={props.setIsCourseAddedClicked}
                isCourseEditClicked={props.isCourseEditClicked}
                setIsCourseEditClicked={props.setIsCourseEditClicked}
            ></AdminCourses>

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

        </div>
    )
}
