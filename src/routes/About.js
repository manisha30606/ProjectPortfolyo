import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutus from '../components/AboutUs'
import BreadCrumb from "../components/BreadCrumb"
const About = () => {
  return (
   <>
   
   <Navbar/>
  <BreadCrumb title="ABOUT ME"/>
<Aboutus/>
<Footer/>
   </>
  )
}

export default About