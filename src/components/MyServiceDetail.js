import React from 'react'

const MyServiceDetail = () => {
  return (
    <>
    {/* =====================SERVICE DETAILS ===================== */}
    <section className="service_details pb_120 xs_pb_80" id='service'>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="service_details_img fade_up">
          <img
            src="images/service_details_img.jpg"
            alt="services"
            className="img-fluid w-100"
          />
        </div>
        <div className="service_details_text">
          <h2 className="has-animation">Business Website Development</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam voluptatem.
          </p>
          <p>
            Quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem fugiat quo voluptas
            nulla pariatur?
          </p>
          <h2 className="has-animation">Service Features</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration some form, by injected
            humour, or randomised words which don't look even slightly
            believable. passage Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the text. All the generators on
            the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a
            dictionary of over words,
          </p>
          <div className="row mb_55">
            <div className="col-6">
              <div className="service_details_small_img fade_up">
                <img
                  src="images/service_det_img_small_1.jpg"
                  alt="Services"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="service_details_small_img fade_up">
                <img
                  src="images/service_det_img_small_2.jpg"
                  alt="Services"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration some form, by injected
            humour, or randomised words which don't look even slightly
            believable. passage Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the text. All the generators on
            the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a
            dictionary of over words,
          </p>
        </div>
        <div className="service_det_faq mt_45">
          <h3 className="has-animation">Frequently Asked Questions</h3>
          <div className="faq_area">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What are project-based rates?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatems sequi
                      nesciunt. neque porro quisquam est, qui dolorem ipsum
                      quia dolor consectetur adipisci velit, sed quia non
                      numquam eius modi tempora
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Developing core web applications
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatems sequi
                      nesciunt. neque porro quisquam est, qui dolorem ipsum
                      quia dolor consectetur adipisci velit, sed quia non
                      numquam eius modi tempora
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Design should enrich our day
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatems sequi
                      nesciunt. neque porro quisquam est, qui dolorem ipsum
                      quia dolor consectetur adipisci velit, sed quia non
                      numquam eius modi tempora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
  <div className="sidebar" id="sticky_sidebar">
    <div className="sidebar_services">
      <h3>service list</h3>
      <ul>
        <li><a href="/serviceDetails">Web Development</a></li>
        <li><a href="/serviceDetails">UI/UX Design</a></li>
        <li><a href="/serviceDetails">Sound Design</a></li>
        <li><a href="/serviceDetails">Game Design</a></li>
        <li><a href="/serviceDetails">Branding Design</a></li>
        <li><a href="/serviceDetails">Digital Marketing</a></li>
      </ul>
    </div>
    <div className="sidebar_contact">
      <div className="sidebar_contact_img">
        <img
          src="images/sidebar_add_img.jpg"
          alt="add"
          className="img-fluid w-100"
        />
        <div className="overlay">
          <a href="/contactUs">Let's Talk</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    </section>
    </>
  )
}

export default MyServiceDetail;