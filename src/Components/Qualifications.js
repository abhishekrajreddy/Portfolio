import React from "react";

function Qualifications() {
  return (
    <div>
      {" "}
      <section class="qualification section" id="qualification">
        <h2 class="section_title">Qualifications</h2>
        <span class="section_subtitle">
          My Educational Qualification & Work Experience
        </span>

        <div class="qualification_container container">
          <div class="qualification_tabs">
            <div class="qualification_button button-flex" id="educationheader">
              <i class="uil uil-graduation-cap qualification_icon"></i>Education
            </div>

            <div class="qualification_button button-flex" id="workheader">
              <i class="uil uil-briefcase-alt qualification_icon"></i>Work
            </div>
          </div>

          <div class="qualification_sections">
            {/* <!-- Educational Qualification --> */}
            <div
              class="qualification_content qualification_active"
              data-content
              id="education"
            >
              {/* <!-- BTech IT --> */}
              <div class="qualification_data">
                <div>
                  <h3 class="qualification_title">
                    BTech Information Technology
                  </h3>
                  <span class="qualification_subtitle">Srm University</span>
                  <div class="qualification_calendar">
                    <i class="uil uil-calendar-alt"></i> 2020 - 2024
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

                <div>
                  <span class="qualification_circle"></span>
                  <span class="qualification_line"></span>
                </div>

                <div>
                  <h3 class="qualification_title">Senior Secondary School</h3>
                  <span class="qualification_subtitle">
                    New Era Public School, Dholpur
                  </span>
                  <div class="qualification_calendar">
                    <i class="uil uil-calendar-alt"></i> 2018 - 2020
                  </div>
                </div>
              </div>

              {/* <!-- School 1-10 --> */}
              <div class="qualification_data">
                <div>
                  <h3 class="qualification_title">Secondary School</h3>
                  <span class="qualification_subtitle">
                    New Era Public School, Dholpur
                  </span>
                  <div class="qualification_calendar">
                    <i class="uil uil-calendar-alt"></i> 2012 - 2015
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

export default Qualifications;
