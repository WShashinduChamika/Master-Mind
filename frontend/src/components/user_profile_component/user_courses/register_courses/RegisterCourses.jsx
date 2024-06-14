import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import './RegisterCourses.css'
import courseImg from './images/course2.png'
import Swal from 'sweetalert2';


export default function RegisterCourses(props) {
  
  const [userID,setUserID] = useState([])
  const [courseID,setCourseID] = useState()
  const [courseIdList, setCourseIdList] = useState([])
  const [coursesList, setCoursesList] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDeleted,setIsDeleted] = useState(false)

    const getCourseIDs = async (id) => {
        const response = await fetch('/api/course_register/' + id, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()
        if (response.ok) {
          const list = json.map(courseRegister => ({ id: courseRegister.course_ID }));
          setCourseIdList(list);
          return list;
        }
        return [];
      }
    
      const getCourseList = async (courseIds) => {
        setLoading(true);
        const list = [];
        for (const courseID of courseIds) {
          const course = await getCourse(courseID.id);
          if (course !== null) {
            list.push(course);
          }
        }
        setCoursesList(list);
        setLoading(false);
      }
    
      const getCourse = async (id) => {
        const response = await fetch('/api/courses/' + id, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
        const json = await response.json()
        if (response.ok) {
          setCourseID(json._id)
          return json;
        } else {
          //alert("error");
          return null;
        }
      }

      const getUserID = ()=>{
        let data = localStorage.getItem('user')
        if (data) {
          let parssedData = JSON.parse(data)
          if (parssedData && parssedData.name) {
             setUserID(parssedData.uid)
            //props.setUserID(parssedData.uid)
            //alert(parssedData.uid)
          }
        }
        else {
        }
    }
    

  const deleteRegisterCourse = async (uid,course_ID) => {
      const response = await fetch('/api/course_register/course/',{
          method:'DELETE',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({uid,course_ID})
      })
      const json = await response.json()
      if(response.ok){
        Swal.fire({
          title: "Removed",
          text: "You successfully removed the course",
          icon: "success"
        });
        setIsDeleted(!isDeleted)
      }else{
          alert(json)
      }
  }
    const handleDeleteBtn = (courseID) => {
        // props.setIsDisplayRegisterCourseDeleteForm(!props.isDisplayRegisterCourseDeleteForm)
        // props.setCourseID(id)
        // props.setUserID(userID)
        handleDeleteAlert(userID,courseID)
        
    }

    const handleDeleteAlert = (uid,courseID)=>{
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
              deleteRegisterCourse(uid,courseID)
          } 
        });
  }


    useEffect(() => {

        const courses = document.getElementById('register-courses')
        if (props.isCoursesClicked) {
            courses.classList.remove('register-courses-invisible')
            courses.classList.add('register-courses')
        } else {
            courses.classList.remove('register-courses')
            courses.classList.add('register-courses-invisible')
        }
    
        getUserID()
        getCourseIDs(userID).then((courseIDs)=>getCourseList(courseIDs))
        
    }, [props.isCoursesClicked,isDeleted])

    return (

        <div className='register-courses-invisible' id='register-courses'>
            <div className='user-navigation-title'>My Courses</div>
            <div className='user-path'>User Account / My Courses</div>

            <div className='user-register-courses-section'>
                {coursesList.map((course,index)=>(
                    <div className='user-register-course'
                       key={index}
                    >
                        <img src={courseImg} className='user-register-course-img'></img>
                        <div className='user-register-course-details-and-edit-delete'>
                            <div className='user-register-course-details'>
                                <p className='user-register-course-name'>{course.name}</p>
                                <p className='user-register-course-title'>{course.title}</p>
                            </div>
                            <div className='user-register-course-edit-delete'>
                                <MdDeleteOutline size={23} className='admin-course-icon' onClick={() => { handleDeleteBtn(course._id) }}></MdDeleteOutline>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>

    )
}
