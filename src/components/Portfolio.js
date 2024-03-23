import React from 'react'

const Portfolio = () => {
  //STORE VALUE OF PORTFOLIO DATA
  const portfolioData = [
    { id: 1, type: 'Portfolio Details', link: 'portfolio_details.html', image: 'images/portfolio_img_7.jpg', title: 'MOCKUP Design', year: '2023', cursor: "<i class='fa-sharp fa-light fa-arrow-up-right'></i>" },
    { id: 2, type: 'Video', link: 'https://www.youtube.com/watch?v=B-ytMSuwbf8', image: 'images/portfolio_img_11.jpg', title: 'Youtube Video', year: '2023', cursor: "<i class='fa-brands fa-youtube'></i>" },
    { id: 3, type: 'Video', link: 'https://vimeo.com/132528823', image: 'images/portfolio_img_9.jpg', title: 'Vimeo Video', year: '2023', cursor: "<i class='fa-brands fa-vimeo-v'></i>" },
    { id: 4, type: 'Audio', link: 'https://w.soundcloud.com/player/?visual=true&amp;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&amp;show_artwork=true&amp;maxwidth=1020&amp;maxheight=1000&amp;auto_play=1', image: 'images/portfolio_img_10.jpg', title: 'soundcloud Audio', year: '2023', cursor: "<i class='fa-brands fa-soundcloud'></i>" },
    { id: 5, type: 'Image', link: 'images/portfolio_img_11.jpg', image: 'images/portfolio_img_11.jpg', title: 'Image view', year: '2023', cursor: "<i class='fa-sharp fa-regular fa-image'></i>" }
  ];

  return (
    <>

    {/* ==================FORTFOLIO SECTION==================== */}
    <section className="portfolio_page pb_120 xs_pb_80" id='portfolio'>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="details_page_header">
          <h2 className="has-animation">
            We create resonant brands and digital experiences that amplify
            your influence to effect change.
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      {portfolioData.map(item => (
        <div key={item.id} className="col-12">
          <div className="portfolio_large fade_up">
            <a
              href={item.link}
              className={item.type === 'Image' ? 'image_popup' : item.type === 'Portfolio Details' ? 'portfolio_large_img' : 'play_btn'}
              data-cursor={item.cursor}
            >
              <img
                src={item.image}
                alt="portfolio"
                className="img-fluid w-100"
              />
            </a>
            <div className="portfolio_large_text">
              <h2 className="has-animation">{item.title} <span>{item.type}</span></h2>
              <p className="has-animation">{item.type} - {item.year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Portfolio;