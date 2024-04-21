import React from 'react'
import NavigationBar from '../components/home_components/navigation_bar/NavigationBar'
import About_Body from '../components/about_component/about_body/about_body'
import Community_Expert from '../components/about_component/community_expert/community_expert'
import Fotter from '../components/footer/Footer'
export default function AboutPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <About_Body></About_Body>
      <Community_Expert></Community_Expert>
      <div className='footer_about'>
      <Fotter></Fotter>
      </div>
     


      
    </div>
  )
}
