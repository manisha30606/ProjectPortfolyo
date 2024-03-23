import React from 'react'

const BlogLists = () => {
 //STORE BLOG LISTS VALUE
  const blogPosts = [
    {
      date: 'August 11, 2023',
      title: 'Fresh design ideas & inspiration for 2023',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat excepteur sint occaecat cupidatat non proident,',
      imageUrl: 'images/portfolio_img_7.jpg'
    },
    {
      date: 'August 11, 2023',
      title: 'What are the new trends in web design?',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat excepteur sint occaecat cupidatat non proident,',
      imageUrl: 'images/portfolio_img_9.jpg'
    },
    {
      date: 'August 11, 2023',
      title: 'Fresh design ideas & inspiration for 2023',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat excepteur sint occaecat cupidatat non proident,',
      imageUrl: 'images/portfolio_img_12.jpg'
    },
    {
      date: 'August 11, 2023',
      title: 'What are the new trends in web design?',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat excepteur sint occaecat cupidatat non proident,',
      imageUrl: 'images/portfolio_img_11.jpg'
    }
  ];

  return (
    <>
{/* =================BLOG LIST SECTION======================= */}
<section className="blog_list pb_120 xs_pb_80" id="blog">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
       <div className="row">
      {blogPosts.map((post, index) => (
        <div className="col-xl-12" key={index}>
          <div className="blog_list_item fade_up">
            <h4>{post.date}</h4>
            <a className="title" href="/blogDetails">{post.title}</a>
            <p>{post.content}</p>
            <a href="/blogDetails" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>" className="img hover_img">
              <div className="img-box">
                <img src={post.imageUrl} alt="blog" className="img-fluid" />
                <img src={post.imageUrl} alt="blog" className="img-fluid" />
              </div>
            </a>
            <a className="read_btn" href="/blogDetails">read more</a>
          </div>
        </div>
      ))}
    </div>
        <div className="row">
          <div className="col-12">
            <ul className="pagination mt_35">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <i className="fa-light fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link active" href="#">1</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <i className="fa-light fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="sidebar" id="sticky_sidebar">
          <div className="sidebar_search">
            <form>
              <input type="text" placeholder="Search" />
              <button type="submit">
                <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="sidebar_services">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="/serviceDetails">Agency Solution</a>
              </li>
              <li><a href="/serviceDetails">Digital</a></li>
              <li><a href="/serviceDetails">Creative Agency</a></li>
              <li><a href="/serviceDetails">Software</a></li>
            </ul>
            </div>
            <div className="sidebar_post">
  <h3>Recent Posts</h3>
  <ul>
    <li>
      <div className="img">
        <img
          src="images/blog_img_5.jpg"
          alt="blog"
          className="img-fluid w-100"
        />
      </div>
      <div className="text">
        <p>August 19, 2023</p>
        <a href="/blogDetails">Fresh design ideas & inspiration for 2023</a>
      </div>
    </li>
    <li>
      <div className="img">
        <img
          src="images/blog_img_3.jpg"
          alt="blog"
          className="img-fluid w-100"
        />
      </div>
      <div className="text">
        <p>August 19, 2023</p>
        <a href="/blogDetails">Fresh design ideas & inspiration for 2023</a>
      </div>
    </li>
    <li>
      <div className="img">
        <img
          src="images/blog_img_2.jpg"
          alt="blog"
          className="img-fluid w-100"
        />
      </div>
      <div className="text">
        <p>August 19, 2023</p>
        <a href="/blogDetails">Fresh design ideas & inspiration for 2023</a>
      </div>
    </li>
  </ul>
</div>
<div className="sidebar_tags">
  <h3>Popular Tags</h3>
  <ul>
    <li><a href="#">Agency</a></li>
    <li><a href="#">Financials</a></li>
    <li><a href="#">Man</a></li>
    <li><a href="#">Branding</a></li>
    <li><a href="#">Creative</a></li>
    <li><a href="#">Digital</a></li>
  </ul>
</div>
</div>
          </div>
        </div>
      </div>
    </section>



    
    </>
  )
}

export default BlogLists;