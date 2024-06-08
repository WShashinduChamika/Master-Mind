import React, { useEffect, useState } from 'react'
import { IoEye } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import './AdminEndUserProfile.css'
import coursePicImg from './img/course2.png'

export default function AdminEndUserProfile(props) {

  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userMobileNo, setUserMobileNo] = useState()
  const [userImage, setUserImage] = useState()
  const [courseIdList, setCourseIdList] = useState([])
  const [coursesList, setCoursesList] = useState([])
  const [loading, setLoading] = useState(false)

  const getUser = async (id) => {
    const response = await fetch('/api/user/' + id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await response.json()
    console.log(json)
    if (response.ok) {
      setUserName(json.name)
      setUserEmail(json.email)
      setUserMobileNo(json.mobileNo)
      setUserImage(json.image)
    }
  }

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
      if (course !== 0) {
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
      return json;
    } else {
      //alert("error");
      return 0;
    }
  }

  const handleUserList = () => {
    props.setIsUsersClicked(!props.isUsersClicked)
    props.setIsUserProfileClicked(!props.isUserProfileClicked)
  }

  const handleEditProfile = () => {
    props.setIsUserEditClicked(!props.isUserEditClicked)
    props.setIsUserProfileClicked(!props.isUserProfileClicked)
  }

  useEffect(() => {
    const user = document.getElementById('admin-end-user-profile')
    if (props.isUserProfileClicked) {
      user.classList.remove('admin-end-user-profile-invisible')
      user.classList.add('admin-end-user-profile')
    } else {
      user.classList.remove('admin-end-user-profile')
      user.classList.add('admin-end-user-profile-invisible')
    }
    getUser(props.userID);
    getCourseIDs(props.userID).then(courseIds => getCourseList(courseIds));
  }, [props.isUserProfileClicked])

  return (
    <div className='admin-end-user-profile-invisible' id='admin-end-user-profile'>
      <div className='admin-navigation-title'>Users</div>
      <div className='admin-path'>Admin Panel /<span onClick={handleUserList}>User List</span> / User Profile</div>
      <div className='admin-user-profile-navigation-and-end-user-profile'>
        <div className='admin-user-profile-navigations'>
          <div className='admin-user-profile-navigation'>
            <IoEye className='admin-user-profile-view-icon active-profile-view-icon' size={20} />
            <div className='admin-user-view-profile-txt active-view-profile-text'>View Profile</div>
          </div>
          <div className='admin-user-profile-navigation' onClick={handleEditProfile}>
            <FaEdit className='admin-user-profile-view-icon' size={20} />
            <div className='admin-user-view-profile-txt'>Edit Profile</div>
          </div>
        </div>
        <div className='admin-end-user-profile-info'>
          <div className='admin-end-user-profile-title'>Account Information</div>
          <div className='admin-end-user-profile-pic-and-info'>
            <div className='admin-end-user-profile-pic'>
              <div className='admin-end-user-profile-pic-title'>
                Profile Picture
              </div>
              <div className='admin-end-user-profile-pic-img'>
                {!userImage ?
                  <div className='default-user-profile'>
                    N
                  </div> :
                  <img src={'http://localhost:4000/images/' + userImage}></img>
                }
              </div>
            </div>
            <div className='admin-end-user-profile-details'>
              <div className='admin-end-user-profile-pic-title'>
                Personal Information
              </div>
              <div className='admin-end-user-profile-info-types'>
                <div className='admin-end-user-info-type'>
                  <div className='admin-end-user-info-type-title'>Name</div>
                  <div className='admin-end-user-info-type-txt'>: {userName}</div>
                </div>
                <div className='admin-end-user-info-type'>
                  <div className='admin-end-user-info-type-title'>Email</div>
                  <div className='admin-end-user-info-type-txt'>: {userEmail}</div>
                </div>
                <div className='admin-end-user-info-type'>
                  <div className='admin-end-user-info-type-title'>Contact Number</div>
                  <div className='admin-end-user-info-type-txt'>: {userMobileNo}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='admin-end-user-registered-courses-info'>
            <div className='admin-end-user-registered-courses-title'>
              Registered Courses
            </div>
            <div className='admin-end-user-registered-courses-list'>
              {loading ? (
                <div>Loading...</div>
              ) : (
                coursesList.map((course, index) => (
                  <div className='admin-end-user-registered-course' key={index}>
                    <img className='admin-end-user-registered-course-img' src={coursePicImg} alt="Course" />
                    <p className='admin-end-user-registered-course-title'>{course.title}</p>
                    <p className='admin-end-user-registered-course-name'>{course.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
