import React from "react";

function Experience() {
  return (
    <div className="">
      <section class="qualification section" id="experience">
        <h2 class="section_title">Experience</h2>
        {/* <span class="section_subtitle">
          My Educational Qualification & Work Experience
        </span> */}
        <span class="section_subtitle">My Work Experience</span>

        <div class="qualification_container container">
          <div class="qualification_tabs"></div>

          <div class="qualification_sections">
            {/* <!-- Educational Qualification --> */}
            <div
              class="qualification_content qualification_active"
              data-content
              id="education"
            >
              {/* <!-- BTech IT --> */}
              <div class="qualification_data  p-2">
                <div className="  ">
                  <h3 class="qualification_title">Frontend Developer</h3>
                  <span class="qualification_subtitle">
                    Este Medical Group London
                  </span>
                  <div class="qualification_calendar text-uppercase ">
                    <i class="uil uil-calendar-alt "></i> 2023 - Present
                  </div>
                </div>

                <div>
                  <span class="qualification_circle"></span>
                  <span class="qualification_line"></span>
                </div>
              </div>

              {/* <!-- School 11-12 --> */}
              <div class="qualification_data">
                <div></div>

                <div className="">
                  <span class="qualification_circle"></span>
                  <span class="qualification_line"></span>
                </div>

                <div class="">
                  <h3 class="qualification_title ">React Frontend</h3>
                  <span class="qualification_subtitle">
                    Fugetron Corp Mumbai
                  </span>
                  <div class="qualification_calendar">
                    <i class="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>
              </div>

              {/* <!-- School 1-10 --> */}
              <div class="qualification_data p-2">
                <div className="">
                  <h3 class="qualification_title">Product Engineer</h3>
                  <span class="qualification_subtitle">
                    Space Enterprises Mumbai
                  </span>
                  <div class="qualification_calendar">
                    <i class="uil uil-calendar-alt"></i> 2018 - 2020
                  </div>
                </div>
                <div>
                  <span class="qualification_circle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
