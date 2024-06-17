import React from "react";
// import Typed from "typed.js";
import { ReactTyped } from "react-typed";

import { useEffect, useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import Porjects from "./Porjects";
import Contact from "./Contact";
import New_about from "./New_about";
import Footer from "./Footer";

function Copy_Home() {
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       "an Engineer",
  //       "a Web Developer",
  //       "a Data Analyst",
  //       "a Business Developer",
  //     ], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100,

  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div>
      <main class="main">
        <section class="home section" id="home">
          <div class="container1 mh mt-5">
            <div class="row justify-content-center w-100">
              {/* <div className="col"> */}
              {/* <div className="main_container"> */}
              {/* <img
                  className="purple_img"
                  //   src="./3229330.jpg"
                  src="3835-removebg-preview.png"
                  alt="img"
                /> */}
              {/* <div className="img_overlay text-center">
                  <img
                    className="my_pic"
                    src="./6E826537-6460-4731-BD48-960F37080930-removebg-preview.png"
                    width={250}
                  />
                </div> */}
              {/* <div className="img_overlay text-center">
                  <img
                    className="my_pic"
                    src="./icon.png"
                    width={250}
                  />
                </div> */}
              {/* </div> */}
              {/* </div> */}

              <div class="col  home_data ">
                {/* <div className="background">
                <div class="shape"></div>
                <div class="shape"></div>
              </div> */}

                <h1 class="home_title">Hi, I'm Abhishek</h1>
                <h3 class="home_subtitle">
                  {/* I am <span class="type" ref={el}></span> */}
                  I am{" "}
                  <span className="type">
                    <ReactTyped
                      strings={[
                        "an Engineer",
                        "a Web Developer",
                        "a Data Analyst",
                        "a Business Developer",
                      ]}
                      startDelay={300}
                      typeSpeed={100}
                      backSpeed={100}
                      backDelay={100}
                      loop
                    />
                  </span>
                </h3>

                <p class="home_description">
                  Web enthusiast and self learner, believes in the power of
                  community.
                </p>
                <div class="about_button ">
                  <a
                    download=""
                    href="./img/Abhishek_Reddy.pdf"
                    class="button button--flex"
                  >
                    Resume<i class="uil uil-file-download-alt button_icon"></i>
                  </a>
                </div>
                <div className="row mt-4">
                  <div className="d-inline">
                    <a
                      href="https://www.linkedin.com/in/abhishekrajreddy/"
                      class="home_social-icon"
                      target="_blank"
                    >
                      <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a
                      href="https://github.com/abhishekrajreddy"
                      class="home_social-icon"
                      target="_blank"
                    >
                      <i class="uil uil-github-alt"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/abhishekrreddy/"
                      class="home_social-icon"
                      target="_blank"
                    >
                      <i class="uil uil-instagram"></i>
                    </a>
                    <a
                      href="https://codepen.io/abhishekrajreddy"
                      class="home_social-icon"
                      target="_blank"
                    >
                      <i class="uil uil-cube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="home_scroll">
            <a href="#about" class="home_scroll-button button--flex">
              <i class="uil uil-mouse-alt home_scroll-mouse"></i>
              <span class="home_scroll-name">Scroll Down</span>
              <i class="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
          </div> */}
          </div>
        </section>
        {/* <About /> */}
        <New_about />
        <Skills />
        <Experience />
        {/* <Qualifications /> */}
        {/* <Porjects/> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Copy_Home;
