import React, { useState } from 'react'
import AdminContactUs from './contact_us/AdminContactUs'
import AdminContactUsForm from './contact_us_form/AdminContactUsForm'

export default function ContactUsList(props) {

  const [contactUsID,setContactUsID] = useState()

  return (
    <div className='admin-contact-us-list'>
      <AdminContactUs
         contactUsID={contactUsID}
         setContactUsID={setContactUsID}
         isContactUsClicked ={props.isContactUsClicked}
         setIsContactUsClicked={props.setIsContactUsClicked}
         isContactUsFormClicked={props.isContactUsFormClicked}
         setIsContactUsFormClicked={props.setIsContactUsFormClicked}
      ></AdminContactUs>
      {
        props.isContactUsFormClicked? 
        <AdminContactUsForm
         contactUsID={contactUsID}
         setContactUsID={setContactUsID}
         isContactUsFormClicked={props.isContactUsFormClicked}
         setIsContactUsFormClicked={props.setIsContactUsFormClicked}
         isDisplayContactDeleteForm={props.isDisplayContactDeleteForm}
         setIsDisplayContactDeleteForm={props.setIsDisplayContactDeleteForm}
        ></AdminContactUsForm>
        :<></>}

    </div>
  )
}
