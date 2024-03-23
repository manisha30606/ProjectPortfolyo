import React from 'react'
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Bloggrid from "../components/BlogGrids";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
const BlogGrid = () => {
  return (
    <>
    <Navbar/>
    <BreadCrumb title="ARTICLES"/>
    <Bloggrid/>
    <ContactBox/>
    <Footer/>
    
    
    </>


  )
}

export default BlogGrid