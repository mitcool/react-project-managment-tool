import React from 'react'

const Hero = () => {
  return (
    <div className="hero_area">
    <header className="header_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  BigWing
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">About </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">Services </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"> Login</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  
    <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>
                      Start <br/>
                      Business with <br/>
                      Our Company
                    </h1>
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>
                      Start <br/>
                      Business with q <br/>
                      Our Company
                    </h1>
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>
                      Start <br/>
                      Business with <br/>
                      Our Company
                    </h1>
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    
  </div>
  )
}

export default Hero
