import React from 'react'
import MyServicesDetails from "../components/MyServiceDetail";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import ContactBox from "../components/ContactBox";

const ServicesDetails = () => {
  return (
    <>
    <Navbar/>
    <BreadCrumb title="UI/UX DESIGN"/>
    <MyServicesDetails/>
    <ContactBox/>
    <Footer/>
    
    </>
  )
}

export default ServicesDetails