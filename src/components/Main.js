import React from 'react'
import Aboutus from './AboutUs';
const Main = () => {
  return (
    <>

 {/* ========================BANNER START=================== */}
   <section className="banner" id='index'>
  <div className="container container_large">
    <div className="row">
      <div className="col-12">
        <div className="banner_img">
          <div className="banner_text">
            <div className="banner_text_top">
              <p>
                Hello, I’m David Petrix, UX/UI designer and front-end developer based in San Francisco.
              </p>
              <div className="banner_text_top_right">
                <a
                  className="play_btn circle_btn"
                  href="https://www.youtube.com/watch?v=B-ytMSuwbf8&ab_channel=EnvatoTuts%2B"
                >
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
                <span data-trigerid="work">Work Process</span>
              </div>
            </div>
            <div className="banner_text_center">
              <h1>I Love <span>Word</span>press</h1>
            </div>
            <div className="banner_text_bottom">
              <div className="text">
                <a className="scroll" href="#">
                  <i className="pt-icon-down"></i>
                </a>
                <span>Scroll Down</span>
              </div>
              <div className="text text_right">
                <p>
                  Feel Free to send me a message if you want to enhance your recruitment.
                </p>
                <ul className="d-flex flex-wrap">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Dribbble</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="img">
            <img
              src="images/banner_img.png"
              alt="banner"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* ======================BANNER ENDS======================= */}

{/* =========ABOUT US SECTION ====================== */}
<Aboutus/>




  </>
  )
}

export default Main;