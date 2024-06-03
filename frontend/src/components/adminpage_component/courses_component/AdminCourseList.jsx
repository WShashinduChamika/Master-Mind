import React, { useState } from 'react'
import AdminCourses from './courses/AdminCourses'
import './AdminCourseList.css'
import AddNewCourse from './add_new_course_component/AddNewCourse'
import EditCourse from './edit_course_component/EditCourse'
import CourseDelete from './amin_course_delete_form_component/CourseDelete'


export default function AdminCourseList(props) {

    const [courseID, setCourseID] = useState()
    const [isDeleted,setIsDeleted] = useState(false)

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
                isDisplayCourseDeleteForm={props.isDisplayCourseDeleteForm}
                setIsDisplayCourseDeleteForm={props.setIsDisplayCourseDeleteForm}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
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
        
            <CourseDelete
                isDisplayCourseDeleteForm={props.isDisplayCourseDeleteForm}
                setIsDisplayCourseDeleteForm={props.setIsDisplayCourseDeleteForm}
                isCoursesClicked={props.isCoursesClicked}
                setIsCoursesClicked={props.setIsCoursesClicked}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
                courseID={courseID}
            ></CourseDelete>

        </div>
    )
}
