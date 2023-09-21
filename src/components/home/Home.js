import React from "react";
import "./Home.css";
import homeBannerBack from "../../images/home-banner-back.png";

function Home() {
  return (
    <>
      <section
        className="home_banner"
        style={{ backgroundImage: `url(${homeBannerBack})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="homebanner_content text-center">
                <div className="site-heading text-center">
                  <h4 className="sub-title">Welcome To</h4>
                  <h2 className="main-title">
                    Web. Digital. Work. <br/> Company
                  </h2>
                  <p>Our work ethos centers on creativity, merging design expertise with impactful <br/>results to deliver excellence in every project we undertake.</p>
                  {/* <div className="title_devider"></div> */}
                </div>

                {/* <div className="sub-title">
                  <span>Welcome To</span>
                </div>
                <div className="title_devider"></div>
                <h1 className="main-title mb-25 pb-10">Web. Digital. Work.</h1>
                <p>
                  Ensuring the best return on investment for your bespoke SEO
                  <br /> Campaign requirement.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
