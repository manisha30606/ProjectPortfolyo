import React from 'react'
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Contactus from "../components/ContactUs";
import Footer from "../components/Footer";

const ContactMe = () => {
  return (
    <>
    <Navbar/>
    <BreadCrumb title ="CONTACT ME"/>
    <Contactus/>
    <Footer/>
    
    </>
  )
}

export default ContactMe;