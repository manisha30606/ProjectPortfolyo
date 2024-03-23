import React from 'react'

const ContactUs = () => {
  return (
    <>
  {/* ================CONTACT US SECTION ==================== */}
<section className="contact_us pb_120 xs_pb_80" id='contact'>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="details_page_header mb-0">
          <h2 className="has-animation">
            You're launching a business and we can help you make it look pretty.
          </h2>
        </div>
      </div>
    </div>
    <div className="contact_header mt_110 xs_mt_70">
      <ul>
        <li>
          <span>Contact</span>
          <a href="callto:+18008450000">+1 800 845 00 00</a>
        </li>
        <li>
          <span>Email</span>
          <a href="mailto:petrix99@gmail.com">petrix99@gmail.com</a>
        </li>
        <li>
          <span>address</span>
          <p>750 St, Office 1138, San Francisco, CA 94108</p>
        </li>
      </ul>
    </div>
    <div className="contact_form">
      <h3 className="has-animation">
        By all means, send us an email and get in touch.
      </h3>
      <div className="row">
        <div className="col-md-6">
          <input type="text" placeholder="Name" />
        </div>
        <div className="col-md-6">
          <input type="email" placeholder="Email" />
        </div>
        <div className="col-xl-12">
          <textarea rows="7" placeholder="Message" />
          <button type="submit" className="common_btn">Send Me Quotes</button>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default ContactUs;