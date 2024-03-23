import React from 'react'
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Bloglist from "../components/BlogLists";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
const BlogList = () => {
  return (
    <>
    <Navbar/>
    <BreadCrumb title="BLOG LIST"/>
    <Bloglist/>
    <ContactBox/>
    <Footer/>
    </>
  )
}

export default BlogList;