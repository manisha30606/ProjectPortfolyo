import React from 'react'
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import PortfolioDetail from "../components/PortfolioDetails";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
const MyPortfolioDetails = () => {
  return (
    <>
        <Navbar/>
        <BreadCrumb title="MOCKUP DESIGN"/>
        <PortfolioDetail/>
        <ContactBox/>
        <Footer/>
    </>
  )
}

export default MyPortfolioDetails;