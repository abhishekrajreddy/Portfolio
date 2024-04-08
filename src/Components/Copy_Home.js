import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Experience from "./Experience";

function Copy_Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a Web", "an Android", "a Blockchain"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section class="home section" id="home">
        <div class="container mh">
          <div class="row">
            <div className="col">
              <div className="main_container">
                <img
                  className="purple_img"
                  //   src="./3229330.jpg"
                  src="3835-removebg-preview.png"
                  alt="img"
                />
                <div className="img_overlay text-center">
                  <img
                    className="my_pic"
                    src="./6E826537-6460-4731-BD48-960F37080930-removebg-preview.png"
                    width={250}
                  />
                </div>
              </div>
            </div>

            <div class="col home_data">
              <h1 class="home_title">Hi, I'm Abhishek</h1>
              <h3 class="home_subtitle">
                I am <span class="type" ref={el}></span> Developer
              </h3>

              <p class="home_description">
                Open-Source enthusiast and self learner, believes in the power
                of community.
              </p>
              <a href="#contact" class="button button--flex">
                Contact Me
                <i class="uil uil-message"></i>
              </a>
              <div className="row mt-4">
                <div className="d-inline">
                  <a
                    href="https://www.linkedin.com/in/abhityagi2912/"
                    class="home_social-icon"
                    target="_blank"
                  >
                    <i class="uil uil-linkedin-alt"></i>
                  </a>
                  <a
                    href="https://github.com/abhishektyagi2912"
                    class="home_social-icon"
                    target="_blank"
                  >
                    <i class="uil uil-github-alt"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/abhityagi2912/"
                    class="home_social-icon"
                    target="_blank"
                  >
                    <i class="uil uil-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/abhishektyagi2912"
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
      <About />
      <Skills />
      <Experience />
      <Qualifications />
    </div>
  );
}

export default Copy_Home;
