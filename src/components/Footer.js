import React from 'react'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // This will make the scrolling smooth
    });
  };


  return (
    // ===============FOOTER SECTION===================
    <footer id="footer" style={{ background: "url(images/golden_bg.jpg)" }}>
      <div className="footer_heading">
        <div className="container">
          <ul>
            <li>
              <a href="mailto:info@demo.com">info@demo.com</a>
            </li>
            <li>
              <p>14 tottenham road, london, england</p>
            </li>
            <li>
              <a href="callto:+1(0)987654321">+1(0) 987 654 321</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_link">
        <div className="container">
          <ul>
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-instagram"></i>'
                >My Instagram</a
              >
            </li>
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-behance"></i>'
                >My Behance</a
              >
            </li>
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-twitter"></i>'
                >My Twitter</a
              >
            </li>
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-linkedin-in"></i>'
                >My Linkedin</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="footer_copyright_text">
            <p>Copyright © 2023 Petrix. All rights reserved.</p>
            <ul>
              <li>
                <a href="#" className="text_hover_animaiton">Terms & Condition </a>
              </li>
              <li>
                <a href="#" className="text_hover_animaiton">Privacy Policy</a>
              </li>
            </ul>
            <a className="scroll_button" href="#" onClick={scrollToTop}>
              <i className="fa-light fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;