import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Services = () => {
  const apiUrl = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'; //=====API LINK======
  const [services, setServices] = useState([]);

  //FETCH THE API 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { user } = response.data;
        
        if (user) {
          if (user.services) {
            setServices(user.services);
          } else {
            console.error('Services data not found in response');
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
  
//VALUE OF PACKAGES
  const packages = [
    { id: 1, name: 'Sliver Pack', price: '$100.00', description: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat' },
    { id: 2, name: 'Gold Pack', price: '$150.00', description: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat' },
    { id: 3, name: 'Platinum Pack', price: '$250.00', description: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat' }
  ];

  //VALUE OF ACCORDATIONITEMS
  const accordionItems = [
    {
      id: 1,
      question: 'What are project-based rates?',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatems sequi nesciunt. neque porro quisquam est, qui dolorem ipsum quia dolor consectetur adipisci velit, sed quia non numquam eius modi tempora'
    },
    {
      id: 2,
      question: 'Developing core web applications',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatems sequi nesciunt. neque porro quisquam est, qui dolorem ipsum quia dolor consectetur adipisci velit, sed quia non numquam eius modi tempora'
    },
    {
      id: 3,
      question: 'Design should enrich our day',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatems sequi nesciunt. neque porro quisquam est, qui dolorem ipsum quia dolor consectetur adipisci velit, sed quia non numquam eius modi tempora'
    }
  ];

  return (
    <>
    {/* SERVICE SECTION */}
    <section className="services_page pb_120 xs_pb_80" id='service'>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="details_page_header mb-0">
          <h2 className="has-animation">
            Refined branding and web design strategically created to tell
            your story, make a connection and establish a cutting- edge
            online and offline presence.
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
  {services.map(service => (
    <div key={service._id} className="col-xl-4 col-sm-6">
      <div className="single_services">
        <h3>{service.name}</h3>
        <p>{service.desc}</p>
        <a href="/serviceDetails">
              <i className="fa-sharp fa-light fa-arrow-up-right"></i>
            </a>
   
      </div>
    </div>
  ))}
</div>
  </div>
</section>

{/* 
PRICING SECTION */}

<section className="pricing pb_120 xs_pb_80" style={{ background: "url(images/golden_bg.jpg)" }}>
      <div className="section_heading section_heading_2">
        <div className="container-fluid">
          <h2>PRICING PLAN <span>PRICING PLAN</span> PRICING PLAN</h2>
        </div>
      </div>
      <div className="container pt_95 xs_pt_55">
        <div className="row">
      {packages.map(pkg => (
        <div key={pkg.id} className="col-xl-4 col-md-6">
          <div className={`single_pricing ${pkg.id === 2 ? 'active' : ''} fade_left`}>
            <h4>{pkg.name}</h4>
            <h2>{pkg.price}</h2>
            <span>Per/Month</span>
            <p>{pkg.description}</p>
            <a className={`common_btn btn_hover ${pkg.id === 2 ? 'price_btn' : ''}`} href="#">Start My Project Now</a>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>

{/* 
    FAQ SECTION */}

<section className="faq pt_100 xs_pt_60 pb_120 xs_pb_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title has-animation">Common Question</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 m-auto">
            <div className="faq_area">
            <div className="accordion" id="accordionExample">
      {accordionItems.map(item => (
        <div key={item.id} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${item.id === 1 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? 'true' : 'false'}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${item.id === 1 ? 'show' : ''}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </>
  )
}

export default Services;