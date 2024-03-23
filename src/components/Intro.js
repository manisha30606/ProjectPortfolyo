import React from 'react'

const Intro = () => {
  return (
   <>
   {/* ============================INTRO PAGE SECTION=========================== */}
   <div className="intro_page" id='intro'>
  <div className="container">
    <div className="intro_bg" data-img-url="img/hero/4.jpg"></div>

    <div className="intro_title">
      <span className="image_logo">
        <img src="images/logo.png" alt="" />
        <span className="version">V 1.0</span>
      </span>
      <span>Modern CV / Resume / Portfolio Template</span>
    </div>
    <div className="demo">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <a href="index.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/home.png" alt="" />
            <h3 className="mini">Home</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="about_us.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/about.png" alt="" />
            <h3 className="mini">About</h3>
          </a>
        </div>
        
        <div className="col-sm-6">
          <a href="portfolio.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/portfolio.png" alt="" />
            <h3 className="mini">portfolio</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="portfolio_details.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/portfolio-details.png" alt="" />
            <h3 className="mini">portfolio Details</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="services.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/services.png" alt="" />
            <h3 className="mini">services</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="service_details.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/services-details.png" alt="" />
            <h3 className="mini">services details</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="blog_grid.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/blog.png" alt="" />
            <h3 className="mini">blog</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="blog_list.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/blog-list.png" alt="" />
            <h3 className="mini">blog list</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="blog_details.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/blog-details.png" alt="" />
            <h3 className="mini">Blog Details</h3>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="contact_us.html" target="_blank" className="demo-item" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>">
            <img src="/images/demo/contact.png" alt="" />
            <h3 className="mini">contact</h3>
          </a>
        </div>
      </div>
      <div className="coming"><h3>More are coming soon...</h3></div>
    </div>
  </div>
</div>

   </>
  )
}

export default Intro;