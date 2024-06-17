import React from "react";

function New_about() {
  return (
    <div>
      {" "}
      <section class="about section" id="about">
        <h2 class="section_title">About Me</h2>
        <span class="section_subtitle">My introduction</span>
        <div class="about_container  container1">
          {/* <img src="img/about.png" alt="" class="about_img" /> */}
          {/* <div className="about_img1 ">
            <img src="img/icon.png" alt="" class="about_img" />

            <div class="home_img mx-auto">
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
          </div> */}
          <div class="about_data text-center mb-5">
            <p class="about_description">
              Back in 2020, I decided to transition from my hardware engineering
              background to software development and dove headfirst into the
              world of coding and web technologies. Fast-forward to today, and
              I've had the opportunity to build software for various industries,
              including advertising agencies, startups, large corporations, and
              digital product studios. This journey has allowed me to explore
              applications, web servers, and cloud technologies, and I've come
              to truly enjoy the creativity and challenges of software
              development.
            </p>
            <p className=" about_description">
              When I’m not at the computer, I’m usually playing sports such as
              football, badminton, climbing, reading, hanging out with my
              friends.⚽
            </p>
            <div class="about_button text-center ">
              <a
                download=""
                href="./img/Abhishek_Reddy.pdf"
                class="button button--flex"
              >
                Resume<i class="uil uil-file-download-alt button_icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default New_about;
