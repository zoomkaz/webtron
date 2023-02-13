import './Gallery.css'

export default function Gallery() {
  return (
    <div id='Gallery' className='gallery'>
      <h2>Gallery</h2>
      <div className="gallery_container">
        <div className="gallery_left">
          <p>
            By the end of this course, you will be able to develop and publish your very own Google Chrome extension!
            In this course we will focus on coding exercises and projects.
          </p>
          <div className="gallery_left-img"></div>
        </div>
        <div className="gallery_right">
          <div className="gallery_right-top">
            <div className="gallery_right-top__left"></div>
            <div className="gallery_right-top__right">
              <div className="gallery_right-top__right-top"></div>
              <div className="gallery_right-top__right-bottom"></div>
            </div>
          </div>
          <div className="gallery_right-bottom">
            <p>
              If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course!
              Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials!
              This course was designed to be extremely beginner friendly.
              We will begin with the very basics of HTML and build a simple web page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}