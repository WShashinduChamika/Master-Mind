import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import './AdminContactUsForm.css'

export default function AdminContactUsForm(props) {
  
  const [userName,setUserName] = useState()
  const [userEmail,setUserEmail] = useState()
  const [subject,setSubject] = useState()
  const [message,setMessage] = useState()

  const getContactUsInfo  = async(id)=>{
     
    const response = await fetch('/api/contact_us/'+id,{
       method:'GET',
       headers: {'Content-Type':'application/json'} 
    })

    const json = await response.json()
    if(response.ok){
        setUserName(json.userName)
        setUserEmail(json.email)
        setSubject(json.subject)
        setMessage(json.message)
    }
  }

  const handleClose = ()=>{
     props.setIsContactUsFormClicked(!props.isContactUsFormClicked)
  }
  
  useEffect(()=>{
     getContactUsInfo(props.contactUsID)
  },[props.isContactUsFormClicked])

  return (
    <div className='admin-contact-us-form'>
      <IoClose className='close-icon' onClick={handleClose} size={30}></IoClose>
      <div className='admin-contact-us-form-title'>Contact Us Information</div>
      <div className='admin-contact-us-form-row1'>
        <div className='admin-contact-us-form-details-type'>
          <p className='admin-contact-us-from-detail-title'>Name</p>
          <p className='admin-contact-us-from-detail-detail'>{userName}</p>
        </div>
        <div className='admin-contact-us-form-details-type'>
          <p className='admin-contact-us-from-detail-title'>Email</p>
          <p className='admin-contact-us-from-detail-detail'>{userEmail}</p>
        </div>
      </div>
      <div className='admin-contact-us-form-row2'>
          <div className='admin-contact-us-form-details-type'>
            <p className='admin-contact-us-from-detail-title'>Subject</p>
            <p className='admin-contact-us-from-detail-detail'>{subject}</p>
          </div>
        </div>
        <div className='admin-contact-us-form-row3'>
          <div className='admin-contact-us-form-details-type'>
            <p className='admin-contact-us-from-detail-title'>Name</p>
            <p className='admin-contact-us-from-detail-detail'>{message}</p>
          </div>
        </div>
    </div>
  )
}
