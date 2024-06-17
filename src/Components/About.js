import React from "react";

function About() {
  return (
    <div>
      <section class="about section " id="about">
        <h2 class="section_title ">About Me </h2>
        <span class="section_subtitle ">My introduction</span>
        <div class="container-fluid  w-75">
          <div className="row  ">
            <div className="col  my-auto">
              <div class="home_img">
                <svg
                  class="home_blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      class="home_blob-img"
                      x="12"
                      y="8"
                      href="./img/icon.png"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="col">
              <img src="./assets/img/about.png" alt="" class="about_img" />
              <div class="about_data">
                {/* <p class="about_description ">
                  Hi!<span class="wave">👋 </span> */}
                  {/* My contributions consistently yielded exceptional results,
                  driving success in numerous cross-platform projects. With
                  extensive experience in Mobile App Development across three
                  companies, my achievements were underscored by earning the
                  prestigious Employee of the Month award at EkkBaz, a
                  recognition I received three times for my outstanding
                  contributions */}
                {/* </p> */}
                <p className="about_description">
                  Back in 2020, I decided to transition from my hardware
                  engineering background to software development and dove
                  headfirst into the world of coding and web technologies.
                  Fast-forward to today, and I've had the opportunity to build
                  software for various industries, including advertising
                  agencies, startups, large corporations, and digital product
                  studios. This journey has allowed me to explore applications,
                  web servers, and cloud technologies, and I've come to truly
                  enjoy the creativity and challenges of software development.
                </p>
                {/* <p className=" text-justify">
                  When I’m not at the computer, I’m usually playing sports such
                  as football, badminton, climbing, reading, hanging out with my
                  friends.
                </p> */}
                <div class="about_button">
                  <a
                    download=""
                    href="./assets/pdf/Abhishek-Resume.pdf"
                    class="button button--flex"
                  >
                    Resume<i class="uil uil-file-download-alt button_icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
