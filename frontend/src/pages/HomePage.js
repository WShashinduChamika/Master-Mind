import React from 'react'
import NavigationBar from '../components/home_components/navigation_bar/NavigationBar'
import HomePageSlide from '../components/home_components/home_page_design/HomePageSlide'
import WhyChoose from '../components/home_components/why_choose_part/WhyChoose'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  
  return (
    <div>
      <NavigationBar ></NavigationBar>
      <HomePageSlide></HomePageSlide>
      <WhyChoose></WhyChoose>
      <Footer></Footer>
    </div>
  )
}
