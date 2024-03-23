import React from 'react'

const ContactBox = () => {
  return (

    // =================CONTACT BOX ===============
    <section className="contact_box pb_120 xs_pb_80">
    <div className="section_heading section_heading_2">
      <div className="container-fluid">
        <h2>
          Let's talk<span>Let's talk</span>Let's talk
          <span>Let's talk</span>
        </h2>
      </div>
    </div>
    <div className="container mt_105 xs_mt_65">
      <div className="row">
        <div className="col-xl-10 col-md-10 m-auto">
          <div className="contact_box_text">
            <h2 className="has-animation">
              Do you have a question, an idea, or a project you need help
              with? Contact us!
            </h2>
            <a href="/contactUs" className="btn_hover contact_btn">Contact Form</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default ContactBox;