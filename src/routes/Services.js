import React from 'react'
import MyServices from "../components/MyServices";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import ContactBox from "../components/ContactBox";

const Services = () => {
  return (
    <>
     <Navbar/>
     <BreadCrumb title="SERVICES"/>
     <MyServices/>
     <ContactBox/>
     <Footer/>
    </>
  )
}

export default Services;