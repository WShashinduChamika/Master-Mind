import React, { useEffect, useState } from 'react'
import './CourseList.css'
import courseImg from './images/course2.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion'
import { fadein } from '../../../Variants'


export default function CourseList(props) {

  const [courseList, setCourseList] = useState([])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const getCourses = async () => {
    const response = await fetch('/api/courses/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json()
    setCourseList(json)
    console.log(json)
  }

  const handleViewBtn = (id) => {
    //alert(props.isCourseClicked)
    console.log(props.isCourseClicked)
    props.setIsCourseClicked(!props.isCourseClicked)
    //props.setIsCoursesClicked(!props.isCoursesClicked)
    props.setCourseID(id)
    const coursePage = document.getElementById('course-page')
    coursePage.style.opacity = '0.7'
  }
  useEffect(() => {

    // const courseList = document.getElementById('user-course-list')

    // if (!props.isCourseClicked) {
    //   courseList.classList.add('user-course-list')
    //   courseList.classList.remove('user-course-list-invisible')
    // } else {
    //   courseList.classList.add('user-course-list-invisible')
    //   courseList.classList.remove('user-course-list')
    // }

    getCourses()

  }, [props.isCourseClicked])

  return (
    <div className='user-course-list' id='user-course-list'>
      <motion.div
        variants={fadein('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='user-course-title-container'
      >
        <div className='user-course-title'>Our Popular Courses</div>
        <p className='user-course-title-text'>“Elevate your learning experience with us!
          Explore diverse courses tailored for success on our user-friendly online platform. Join today!"</p>
      </motion.div>

      <div className='user-courses-section'>


        < motion.div
           variants={fadein('left', 0.2)}
           initial='hidden'
           whileInView='show'
           viewport={{ once: true, amount: 0.7 }}
          className='user-courses-container'>

          <Carousel
            // showDots={true}
            responsive={responsive}
            arrows={props.isCourseClicked ? false : true}
          >
            {courseList.map((course, index) => (
              <div className='user-course'>
                <img src={courseImg} className='user-course-img'></img>
                <p className='user-course-name'>{course.name}</p>
                <p className='user-course-title'>{course.title}</p>
                <button className='user-course-btn' onClick={() => { handleViewBtn(course._id) }}>More Details</button>
              </div>
            ))}

          </Carousel>

        </motion.div>
      </div>
    </div>
  )
}

