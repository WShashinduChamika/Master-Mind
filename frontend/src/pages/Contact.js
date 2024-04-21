import React from 'react'
import NavigationBar from '../components/home_components/navigation_bar/NavigationBar'
import ContactBody from '../components/contact_component/contact_body/contact_body'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <div>
        <div className='background_contact'>
        <NavigationBar></NavigationBar>
        <h1>Contact Us</h1>
        </div>
        <ContactBody></ContactBody>
        <Footer></Footer>

        
       
        
    </div>
  )
}

export default Contact