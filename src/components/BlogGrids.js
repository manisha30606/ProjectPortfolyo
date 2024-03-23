import React from 'react'

const BlogGrids = () => {

  //FOR BLOG POSTS
  const BlogPost = ({ date, title, imageUrl, imageAlt, content }) => (
    <div className="col-xl-4 col-md-6">
      <div className="single_blog fade_up">
        <h4>{date}</h4>
        <a className="title" href="/blogDetails">{title}</a>
        <p>{content}</p>
        <a href="/blogDetails" data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>" className="img hover_img">
          <div className="img-box">
            <img src={imageUrl} alt={imageAlt} className="img-fluid" />
            <img src={imageUrl} alt={imageAlt} className="img-fluid" />
          </div>
        </a>
        <a className="read_btn" href="/blogDetails">read more</a>
      </div>
    </div>
  );

  //STORE THE VALUE OF BLOG POSTS
  const blogPosts = [
    {
      id: 1,
      date: 'August 11, 2023',
      title: 'Fresh design ideas & inspiration for 2023',
      imageUrl: 'images/blog_img_1.jpg',
      imageAlt: 'blog',
      content: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat',
    },
    {
      id: 2,
      date: 'August 11, 2023',
      title: 'What are the new trends in web design?',
      imageUrl: 'images/blog_img_2.jpg',
      imageAlt: 'blog',
      content: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat',
    },
    {
      id: 3,
      date: 'August 11, 2023',
      title: 'Fresh design ideas & inspiration for 2023',
      imageUrl: 'images/blog_img_3.jpg',
      imageAlt: 'blog',
      content: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat',
    },
    {
      id: 4,
      date: 'August 11, 2023',
      title: 'Fresh design ideas & inspiration for 2023',
      imageUrl: 'images/blog_img_4.jpg',
      imageAlt: 'blog',
      content: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat',
    },
    {
      id: 5,
      date: 'August 11, 2023',
      title: 'What are the new trends in web design?',
      imageUrl: 'images/blog_img_5.jpg',
      imageAlt: 'blog',
      content: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat',
    },
    {
      id: 6,
      date: 'August 11, 2023',
      title: 'Fresh design ideas & inspiration for 2023',
      imageUrl: 'images/blog_img_6.jpg',
      imageAlt: 'blog',
      content: 'Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat',
    },
    
  ];
  
  
  return (
   <>

   {/* ====================BLOG GRID SECTION ===================== */}
<section className="blog_grid pb_120 xs_pb_80" id="blog">
  <div className="container">
  <div className="row">
      {blogPosts.map(post => (
        <BlogPost
          key={post.id}
          date={post.date}
          title={post.title}
          imageUrl={post.imageUrl}
          imageAlt={post.imageAlt}
          content={post.content}
        />
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
</section>

   
   </>
  )
}

export default BlogGrids;