import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = (path) => {
    setIsLoading(true);
    try {
      window.location.href = path; 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

    {/* ==================NAVBAR SECTION==================== */}
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container container_large">
          <Link className='navbar-brand' to="/" onClick={() => handleLinkClick("/")}>
            <img src="images/logo.png" alt="Petrix" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-sharp fa-sharp fa-regular fa-bars menu_icon_bar"></i>
            <i className="fa-regular fa-xmark close_icon_close"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className='nav-link active text_hover_animaiton' to="/" onClick={() => handleLinkClick("/")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text_hover_animaiton' to="/about" onClick={() => handleLinkClick("/about")}>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text_hover_animaiton' to="/myportfolio" onClick={() => handleLinkClick("/myportfolio")}>
                  Portfolio <i className="far fa-angle-down"></i>
                </Link>
                <ul className="droap_menu">
                  <li><Link to="/myportfolio" onClick={() => handleLinkClick("/myportfolio")}>Portfolio</Link></li>
                  <li><Link to="/myportfolioDetails" onClick={() => handleLinkClick("/myportfolioDetails")}>Portfolio Details</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className='nav-link text_hover_animaiton' to="/services" onClick={() => handleLinkClick("/services")}>
                  Services <i className="far fa-angle-down"></i>
                </Link>
                <ul className="droap_menu">
                  <li><Link to="/services" onClick={() => handleLinkClick("/services")}>Services</Link></li>
                  <li><Link to="/serviceDetails" onClick={() => handleLinkClick("/serviceDetails")}>Service Details</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className='nav-link text_hover_animaiton' to="/blogGrid" onClick={() => handleLinkClick("/blogGrid")}>
                  Blog <i className="far fa-angle-down"></i>
                </Link>
                <ul className="droap_menu">
                  <li><Link to="/blogGrid" onClick={() => handleLinkClick("/blogGrid")}>Blog Grid</Link></li>
                  <li><Link to="/blogList" onClick={() => handleLinkClick("/blogList")}>Blog List</Link></li>
                  <li><Link to="/blogDetails" onClick={() => handleLinkClick("/blogDetails")}>Blog Details</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_hover_animaiton" to="/contactUs" onClick={() => handleLinkClick("/contactUs")}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="right_menu">
              <Link to="/contactus" className="btn_hover" onClick={() => handleLinkClick("/contactUs")}>Let's Talk</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
