import React from 'react'
import Contactbox from "./ContactBox"
const BlogDetail = () => {
  return (
    <>

    {/* ==================BREADCRUMB=================== */}
  <section className="breadcrumb breadcrumb_2">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <span>Design</span>
        <h1>Fresh design ideas & inspiration for 2023</h1>
        <ul>
          <li>By Admin</li>
          <li>August 11, 2023</li>
          <li>(0) Comment</li>
        </ul>
      </div>
    </div>
  </div>
</section>


{/* ===================BLOG DETAILS========================== */}
<section className="blog_details pb_120 xs_pb_80" id='blog'>
  <div className="container">
    <div className="blog_details_area">
      <div className="row">
        <div className="col-12">
          <div className="blog_det_large_img">
            <img
              src="images/portfolio_img_7.jpg"
              alt="blog"
              className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="blog_details_text">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum dolores sit quas molestias
              excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia fuga. harum quidem rerum facilis est
              et expedita distinctio. Nam libero tempore, cum soluta nobis
              est eligendi optio minus id quod maxime placeat facere
              possimus.
            </p>
            <p>
              Voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint
              et molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus
            </p>
            <div className="quot_text fade_up">
              <h5>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure some great pleasure. To take a trivial example,
              </h5>
              <h4>David Maklam</h4>
            </div>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled demoralized by pleasure the
              moment, so blinded by desire, that they cannot foresee the
              pain and trouble that are belongs those who fail in their duty
              through weakness of will, which is the same as saying through
              shrinking from toil and these cases are perfectly simple and
              easy to distinguish. In a free hour,
            </p>
          </div>
        </div>
      </div>
      <div className="row mt_30">
        <div className="col-12">
          <div className="blog_det_large_img fade_up">
            <img
              src="images/portfolio_img_9.jpg"
              alt="blog"
              className="img-fluid w-100" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="blog_det_large_img fade_up">
            <img
              src="images/portfolio_img_2.jpg"
              alt="blog"
              className="img-fluid w-100" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="blog_det_large_img fade_up">
            <img
              src="images/portfolio_img_3.jpg"
              alt="blog"
              className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="blog_details_text">
            <h2 className="has-animation">How to Update your Theme</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum dolores sit quas molestias
              excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia fuga. harum quidem rerum facilis est
              et expedita distinctio. Nam libero tempore, cum soluta nobis
              est eligendi optio minus id quod maxime placeat facere
              possimus.
            </p>
            <ul>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum
              </li>
              <li>
                Nor again is there anyone who loves or pursues or desires to
                obtain
              </li>
              <li>
                On the other hand, we denounce with righteous indignation
                and dislike
              </li>
            </ul>
          </div>
          <div className="blog_details_share">
            <ul className="tags">
              <li><span>Tags :</span></li>
              <li><a href="#">Design,</a></li>
              <li><a href="#">Creative,</a></li>
              <li><a href="#">Wordpress</a></li>
            </ul>
            <ul className="share">
              <li><span>Share This :</span></li>
              <li>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
          <div className="blog_details_comment">
            <h2 className="has-animation">Leave a comment</h2>
            <form action="#">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-xl-4 col-md-6">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="col-xl-4">
                  <input type="text" placeholder="Subject (Optional)" />
                </div>
                <div className="col-12">
                  <textarea rows="7" placeholder="Message"></textarea>
                  <button type="submit" className="common_btn btn_hover">
                    post comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Contactbox/>
    </>
  )
}

export default BlogDetail;