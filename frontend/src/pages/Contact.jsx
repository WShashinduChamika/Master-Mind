import React from 'react'
import NavigationBar from '../components/home_components/navigation_bar/NavigationBar'
import ContactBody from '../components/contact_component/contact_body/contact_body'
import Footer from '../components/footer/Footer'
import Headroom from 'react-headroom'
import Contact_Slider from '../components/contact_component/contact_slider/Contact_Slider'

const Contact = () => {
  return (
    <div>
      
        <Headroom>
          <NavigationBar></NavigationBar>
        </Headroom>
        <Contact_Slider></Contact_Slider>
        <ContactBody></ContactBody>
        <Footer></Footer>
      
    </div>
  )
}

export default Contact