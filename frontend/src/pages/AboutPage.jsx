import React from 'react'
import NavigationBar from '../components/home_components/navigation_bar/NavigationBar'
import About_Body from '../components/about_component/about_body/about_body'
import Community_Expert from '../components/about_component/community_expert/community_expert'
import Fotter from '../components/footer/Footer'
import Headroom from 'react-headroom'
export default function AboutPage() {
  return (
    <div>
      <Headroom>
        <NavigationBar></NavigationBar>
      </Headroom>
      <About_Body></About_Body>
      <Community_Expert></Community_Expert>
      <Fotter></Fotter>
    </div>
  )
}
