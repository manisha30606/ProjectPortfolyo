import React from 'react'
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Portfolio from "../components/Portfolio";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
const MyPortfolio = () => {
  return (
    <>
    <Navbar/>
    <BreadCrumb title="MY WORKS"/>
    <Portfolio/>
    <ContactBox/>
    <Footer/>
    </>
  )
}

export default MyPortfolio;