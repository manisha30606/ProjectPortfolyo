import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contactbox from './ContactBox';

//FOR SKILL COMPONENETS
const SkillComponent = ({ iconSrc, percentage, skillName }) => (
  <div className="col-xl-2 col-sm-4 col-lg-3">
    <div className="single_skills fade_left" data-trigerid="skills">
      <div className="text">
        <div className="icon">
          <img src={iconSrc} alt="skills" className="img-fluid" />
        </div>
        <h3><span className="counter">{percentage}</span>%</h3>
      </div>
      <p>{skillName}</p>
    </div>
  </div>
);


//FOR LIST ITEM
const ListItem = ({ duration, title, subtitle }) => (
  <li>
    <div className="title">
      <span>{duration}</span>
    </div>
    <div className="title">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </li>
);

const AboutUs = () => {

  const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'; //=====API LINK======
  const [aboutDescription, setAboutDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [testimonialData , setTestimonialData] = useState([]);

  // API FETCH FOR THE SECTIONS WHERE NEEDED
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { user } = response.data;
        
        if (user) {
          if (user.about) {
            setAboutDescription(user.about);
          } else {
            console.error('About data not found in response');
          }
          if (user.services) {
            setServiceData(user.services);
          } else {
            console.error('Services data not found in response');
          }
  
          if (user.timeline) {
            setExperienceData(user.timeline);
          } else {
            console.error('Timeline data not found in response');
          }
  
          if (user.skills) {
            setSkills(user.skills);
          } else {
            console.error('Skills data not found in response');
          }
          if (user.testimonials) {
            setTestimonialData(user.testimonials);
          } else {
            console.error('Testimonials data not found in response');
          }
        } else {
          console.error('User data not found in response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
   // Function to format date range
   const formatDateRange = (startDate, endDate) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = new Date(endDate).getFullYear();
    return `${startYear}-${endYear}`;
  }; 


  // STORE VALUE OF AWARD SECTION
  const awards = [
    { id: 1, title: 'Site Of The Day', category: 'CSS & Animation', year: 2018 },
    { id: 2, title: 'Best Business Model', category: 'New Strategy', year: 2019 },
    { id: 3, title: 'Motion Graphics', category: '3D & Visual Effects', year: 2020 },
    { id: 4, title: 'Video Design', category: 'CSS & Animation', year: 2021 }
  ];

  //STORE VALUE OF EDUCATION DATA
  const educationData = [
    { id: 1, duration: '2015 - 2017', course: 'Programming Course', institution: 'Harvard University' },
    { id: 2, duration: '2014 - 2015', course: 'Cognitive Sciences', institution: 'University of California' },
    { id: 3, duration: '2013 - 2014', course: 'Web Design Course', institution: 'Bigtown, England' }
  ];

  //STORE THE VALUE OF LOGO DATA
  const logoData = [
    'images/brand_logo_1.png',
    'images/brand_logo_2.png',
    'images/brand_logo_3.png',
    'images/brand_logo_4.png',
    'images/brand_logo_5.png'
  ];

  return (
   <>
   {/* ===========ABOUT SECTION START============ */}

   <section className="about" id="about" style={{ background: "url(images/golden_bg.jpg)" }}>
    <div className="section_heading">
      <div className="container-fluid">
        <h2>
          about me<span>about me</span>about me<span>about me</span>
        </h2>
      </div>
    </div>
    <div className="about_text_area pt_120 xs_pt_80 pb_120 xs_pb_80">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-6">
            <div className="about_img">
              <img src="images/about_img.png" alt="about" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 col-md-6">
            <div className="about_text">
              <p className="description text-anim">
              {aboutDescription.description}
              </p>
              <a className="common_btn btn_hover" data-trigerid="about" href="#">
                download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* ===================ABOUT SECTION ENDS================== */}


   {/* ====================SKILLS SECTION START==================== */}

    <section className="skills pt_105 xs_pt_65 pb_120 xs_pb_80" id="skills">
  <div className="container">
    <div className="row">
      <div className="col-xl-11 m-auto">
        <h2 className="has-animation">
          I craft wonderful digital experiences for brands
        </h2>
      </div>
    </div>
    <div className="row justify-content-between">
      {skills.map(skill => (
        <SkillComponent
          key={skill._id}
          iconSrc={skill.image.url}
          percentage={skill.percentage}
          skillName={skill.name}
        />
      ))}
    </div>
  </div>
</section>



  {/* ====================SKILLS SECTION ENDS===================== */}


 {/* ======================AWARD SECTION STARTS==================== */}
 <section className="award pb_120 xs_pb_80" id="award">
  <div className="section_heading section_heading_2">
    <div className="container-fluid">
      <h2>Awards<span>Awards</span>Awards<span>Awards</span></h2>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="award_text mt_115 xs_mt_75">
        <ul>
      {awards.map(award => (
        <li key={award.id} className="fade_bottom" data-trigerid="award">
          <span>{award.title}</span>
          <span>{award.category}</span>
          <span>{award.year}</span>
        </li>
      ))}
    </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ====================AWARD SECTION ENDS==================== */}


{/* =======================EXPERIENCE SECTION START========================= */}
<section className="experience pt_90 xs_pt_50 pb_120 xs_pb_80" id="experience">
  <div className="container">
   <div className="row">
      <div className="col-xl-6 col-lg-6">
        <div className="experience_text fade_left" data-trigerid="experience">
          <h2>
            <i className="fa-sharp fa-solid fa-graduation-cap"></i>
            <span className="has-animation">My Education</span>
          </h2>
          <ul>
            {educationData.map(item => (
              <ListItem
                key={item.id}
                duration={item.duration}
                title={item.course}
                subtitle={item.institution}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="experience_text fade_right" data-trigerid="experience">
          <h2>
            <i className="fa-solid fa-briefcase-blank"></i>
            <span className="has-animation">My Experience</span>
          </h2>
          <ul>
            {experienceData.map((item, index) => (
              <li key={index}>
                <div className="title">
                  <span>{formatDateRange(item.startDate, item.endDate)}</span>
                </div>
                <div className="title">
                  <h3>{item.jobTitle}</h3>
                  <p>{item.jobLocation}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==========================EXPERIENCE SECTION ENDS========================= */}



{/* ============================PORTFOLIO SECTION START================== */}

<section className="portfolio pb_120 xs_pb_80" id="portfolio">
  <div className="section_heading section_heading_2">
    <div className="container-fluid">
      <h2>
        PORTFOLIO<span>PORTFOLIO</span>PORTFOLIO<span>PORTFOLIO</span>
      </h2>
    </div>
  </div>
  <div className="container portfolio_items">
    <div className="row justify-content-between">
      <div className="col-xl-6 col-md-6">
        <a
          href="portfolio_details.html"
          className="portfolio_item mt_120 xs_mt_80 hover_img h-400"
          data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
        >
          <div className="img-box">
            <img
              src="images/portfolio_img_1.jpg"
              alt="portfolio"
              className="img-fluid"
            />
            <img
              src="images/portfolio_img_1.jpg"
              alt="portfolio"
              className="img-fluid img"
              data-speed="0.3"
            />
          </div>

          <div className="text">
            <span>Details</span>
            <p>UI/UX Design Mockup</p>
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
          className="portfolio_item mt_120 xs_mt_80 hover_img h-400 play_btn"
          data-cursor="<i class='fa-brands fa-youtube'></i>"
        >
          <div className="img-box">
            <img
              src="images/portfolio_img_2.jpg"
              alt="portfolio"
              className="img-fluid"
            />
            <img
              src="images/portfolio_img_2.jpg"
              alt="portfolio"
              className="img-fluid"
            />
          </div>
          <div className="text">
            <span>Youtube</span>
            <p>Custom design</p>
          </div>
        </a>
        <a
          href="images/portfolio_img_5.jpg"
          className="portfolio_item mt_120 xs_mt_80 hover_img h-600 image_popup"
          data-cursor='<i class="fa-sharp fa-regular fa-image"></i>'
        >
          <div className="img-box">
            <img
              src="images/portfolio_img_5.jpg"
              alt="portfolio"
              className="img-fluid"
            />
            <img
              src="images/portfolio_img_5.jpg"
              alt="portfolio"
              className="img-fluid img"
            />
          </div>

          <div className="text">
            <span>Image</span>
            <p>Product Mockup Design</p>
          </div>
        </a>
      </div>

      <div className="col-xl-6 col-md-6">
        <a
          href="https://vimeo.com/132528823"
          className="portfolio_item margin_left mt_120 xs_mt_80 h-600 hover_img play_btn"
          data-cursor="<i class='fa-brands fa-vimeo-v'></i>"
        >
          <div className="img-box">
            <img
              src="images/portfolio_img_6.jpg"
              alt="portfolio"
              className="img-fluid"
            />
            <img
              src="images/portfolio_img_6.jpg"
              alt="portfolio"
              className="img-fluid img"
            />
          </div>

          <div className="text">
            <span>Vimeo</span>
            <p>Box Mockup Design</p>
          </div>
        </a>
        <a
          href="https://w.soundcloud.com/player/?visual=true&amp;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&amp;show_artwork=true&amp;maxwidth=1020&amp;maxheight=1000&amp;auto_play=1"
          className="portfolio_item margin_left mt_120 xs_mt_80 hover_img h-400 play_btn"
          data-cursor='<i class="fa-brands fa-soundcloud"></i>'
        >
          <div className="img-box">
            <img
              src="images/portfolio_img_3.jpg"
              alt="portfolio"
              className="img-fluid"
            />
            <img
              src="images/portfolio_img_3.jpg"
              alt="portfolio"
              className="img-fluid img"
            />
          </div>

          <div className="text">
            <span>soundcloud</span>
            <p>Design Mockup</p>
          </div>
        </a>
        <a
          href="images/portfolio_img_4.jpg"
          className="portfolio_item margin_left mt_120 xs_mt_80 hover_img h-400 image_popup"
          data-cursor='<i class="fa-sharp fa-regular fa-image"></i>'
        >
          <div className="img-box">
            <img
              src="images/portfolio_img_4.jpg"
              alt="portfolio"
              className="img-fluid"
            />
            <img
              src="images/portfolio_img_4.jpg"
              alt="portfolio"
              className="img-fluid img"
            />
          </div>
          <div className="text">
            <span>Image</span>
            <p>Design Concept</p>
          </div>
        </a>
      </div>

      <div className="col-12 text-center mt_120 xs_mt_80">
        <a className="see_portfolio circle_btn" href="/myportfolio">
          <i className="fa-sharp fa-light fa-arrow-up-right"></i> See All Recent
          Projects
        </a>
      </div>
   

        </div>
      </div>
    </section>

{/* ==========================PORTFOLIO SECTION ENDS==================== */}


{/* ========================SERVICE SECTION START======================= */}
<section className="services pb_120 xs_pb_80" id="service">
      <div className="section_heading section_heading_2">
        <div className="container-fluid">
          <h2>SERVICES<span>SERVICES</span>SERVICES<span>SERVICES</span></h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services_text mt_105 xs_mt_65">
              <p className="text-anim">
                We specialize in the design and development of your Webflow,
                Shopify or WordPress powered website. Webhosting support through
                Webflow, WP Engine or equivalent. SEO best practices with a
                focus on page speed optimization. Familiarity with MySQL, PHP,
                JavaScript, Cloudflare, and WooCommerce.
              </p>
              <div className="mt_110 xs_mt_70 service_items">
      {serviceData.map(service => (
        <div key={service._id} className="service_item fade_bottom" data-triggerid="service">
          <h2>{service.name}</h2>
          <a
            href="serviceDetails"
            className="image-view"
            data-img-cursor={`<img src='${service.image} />`}
          ><i className="fas fa-eye"></i></a>
          
        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* ========================SERVICE SECTION ENDS====================== */}

{/* =======================TESTIMONIALS SECTION START===================== */}
<section className="testimonial pb_120 xs_pb_80 background_image">
  <div className="section_heading section_heading_2">
    <div className="container-fluid">
      <h2>
        testimonial<span>testimonial</span>testimonial<span>testimonial</span>
      </h2>
    </div>
  </div>
  <div className="container mt_120 xs_mt_80">
    <div className="row">
      <div className="col-xl-11 m-auto">
        <div className="testimonial_bg">
        <div className="row testi_slider" style={{ marginBottom: '4rem' }}>
  {testimonialData.map(testimonial => (
    <div key={testimonial._id} className="col-12">
      <div className="testimonial_content">
        <div className="testimonial_img">
          <img
            src={testimonial.image.url}
            alt={testimonial.name}
            className="img-fluid"
          />
        </div>
        <div className="testimonial_text">
          <p>{testimonial.review}</p>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.position}</span>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  </div>
  <div className="container mt_110 xs_mt_70" id="testimonial_brand">
    <div className="row">
      <div className="col-12">
        <div className="testimonial_brand">
          <p className="text-anim justify-content-center">
            More than 200+ companies trusted us worldwide
          </p>
          <ul>
      {logoData.map((logo, index) => (
        <li key={index}>
          <img
            src={logo}
            alt="brand"
            className="img-fluid"
          />
        </li>
      ))}
    </ul>
        </div>
      </div>
    </div>
  </div>
</section>
{/* =====================TESTIMONIALS SECTION ENDS=========================== */}

{/* ========================BLOG SECTION START=========================== */}
<section className="blog pb_125 xs_pb_85" id="blog">
  <div className="section_heading section_heading_2">
    <div className="container-fluid">
      <h2>Our News<span>Our News</span>Our News<span>Our News</span></h2>
    </div>
  </div>
  <div className="container mt_95 xs_mt_55">
    <div className="row">
      <div className="col-xl-4 col-md-6">
        <div className="single_blog fade_left" data-triggerid="blog">
          <h4>August 11, 2023</h4>
          <a className="title" href="/blogDetails">
            Fresh design ideas & inspiration for 2023
          </a>
          <p>
            Duis aute irure dolor in reprehenderit velit esse cillum dolore
            eu fugiat
          </p>
          <a
            href="/blogDetails"
            data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
            className="img hover_img"
          >
            <div className="img-box">
              <img
                src="images/blog_img_1.jpg"
                alt="blog"
                className="img-fluid" />
              <img
                src="images/blog_img_1.jpg"
                alt="blog"
                className="img-fluid" />
            </div>
          </a>
          <a className="read_btn" href="/blogDetails">read more</a>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="single_blog fade_left" data-triggerid="blog">
          <h4>August 11, 2023</h4>
          <a className="title" href="/blogDetails">
            What are the new trends in web design?
          </a>
          <p>
            Duis aute irure dolor in reprehenderit velit esse cillum dolore
            eu fugiat
          </p>
          <a
            href="/blogDetails"
            data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
            className="img hover_img"
          >
            <div className="img-box">
              <img
                src="images/blog_img_2.jpg"
                alt="blog"
                className="img-fluid" />
              <img
                src="images/blog_img_2.jpg"
                alt="blog"
                className="img-fluid" />
            </div>
          </a>
          <a className="read_btn" href="/blogDetails">read more</a>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="single_blog fade_left" data-triggerid="blog">
          <h4>August 11, 2023</h4>
          <a className="title" href="/blogDetails">
            Fresh design ideas & inspiration for 2023
          </a>
          <p>
            Duis aute irure dolor in reprehenderit velit esse cillum dolore
            eu fugiat
          </p>
          <a
            href="blog_details.html"
            data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
            className="img hover_img"
          >
            <div className="img-box">
              <img
                src="images/blog_img_3.jpg"
                alt="blog"
                className="img-fluid" />
              <img
                src="images/blog_img_3.jpg"
                alt="blog"
                className="img-fluid" />
            </div>
          </a>
          <a className="read_btn" href="/blogDetails">read more</a>
        </div>
      </div>
      <div className="col-12 text-center mt_60">
        <a className="common_btn btn_hover" href="/blogDetails">
          Explore Our Blog
        </a>
      </div>
    </div>
  </div>
</section>

{/* ======================BLOG SECTION ENDS===================== */}

{/* =================CONTACT BOX START=============== */}

<Contactbox/>

{/* =========================CONTACT BOX ENDS=================== */}
   
   </>
   )
}

export default AboutUs;