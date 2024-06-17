import React from "react";

function Porjects() {
  return (
    <>
      <div>Porjects</div>
      {/* <!-- Portfolio --> */}
      <section class="portfolio section" id="projects">
        <h2 class="section_title">Projects</h2>
        <span class="section_subtitle">Most recent work</span>

        <div class="portfolio_container container1 swiper-container swiper mySwiper">
          <div class="swiper-wrapper">
            {/* <!-- Project 4 --> */}
            <div class="portfolio_content grid swiper-slide">
              <img src="./assets/img/" alt="" class="portfolio_img" />

              <div class="portfolio_data">
                <h3 class="portfolio_title">Personal Portfolio Website</h3>
                <p class="portfolio_description">
                  My Personal Portfolio Website made using only HTML, CSS and JS
                  with a clean and minimal UI.
                </p>
                <a
                  href="#"
                  class="button button-flex button-small portfolio_button"
                  target="_blank"
                >
                  Check out
                  <i class="uil uil-arrow-right button_icon"></i>
                </a>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div class="portfolio_content grid swiper-slide">
              <img src="#" alt="" class="portfolio_img" />

              <div class="portfolio_data">
                <h3 class="portfolio_title">Some Project</h3>
                <p class="portfolio_description">
                  A UI Clone made using only HTML, CSS & JS.
                </p>
                <a
                  href="#"
                  class="button button-flex button-small portfolio_button"
                  target="_blank"
                >
                  Check out
                  <i class="uil uil-arrow-right button_icon"></i>
                </a>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div class="portfolio_content grid swiper-slide">
              <img src="#" alt="" class="portfolio_img" />

              <div class="portfolio_data">
                <h3 class="portfolio_title">Some Project</h3>
                <p class="portfolio_description">
                  A UI Clone made using only HTML, CSS & JS.
                </p>
                <a
                  href="#"
                  class="button button-flex button-small portfolio_button"
                  target="_blank"
                >
                  Check out
                  <i class="uil uil-arrow-right button_icon"></i>
                </a>
              </div>
            </div>

            {/* <!-- Project 1 --> */}
            <div class="portfolio_content grid swiper-slide">
              <img src="#" alt="" class="portfolio_img" />

              <div class="portfolio_data">
                <h3 class="portfolio_title">Some Project</h3>
                <p class="portfolio_description">
                  A UI Clone made using only HTML, CSS & JS.
                </p>
                <a
                  href="#"
                  class="button button-flex button-small portfolio_button"
                  target="_blank"
                >
                  Check out
                  <i class="uil uil-arrow-right button_icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Arrows --> */}
          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          {/* <!-- Pagination --> */}
          <div class="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}

export default Porjects;
