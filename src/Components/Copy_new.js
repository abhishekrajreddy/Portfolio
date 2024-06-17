import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import Porjects from "./Porjects";
import Contact from "./Contact";

function Copy_new() {
  const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "an Engineer",
//         "a Web Developer",
//         "a Data Analyst",
//         "a Business Developer",
//       ], // Strings to display
//       // Speed settings, try diffrent values untill you get good results
//       startDelay: 300,
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 100,
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []);
  return (
    <>
      <main class="main">
        {/* <!-- Home --> */}
        <section class="home section" id="home">
          <div class="home_container container1 grid">
            <div class="home_content grid">
              <div class="home_social">
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
                  href="https://twitter.com/abhityagi29120"
                  class="home_social-icon"
                  target="_blank"
                >
                  <i class="uil uil-twitter-alt"></i>
                </a>

                <a
                  href="https://www.instagram.com/abhityagi2912/"
                  class="home_social-icon"
                  target="_blank"
                >
                  <i class="uil uil-instagram"></i>
                </a>
              </div>

              <div class="home_img">
                <svg
                  class="home_blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
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
                      href="./assets/img/icon.png"
                    />
                  </g>
                </svg>
              </div>

              <div class="home_data">
                <h1 class="home_title">Hi, I'm Abhishek</h1>
                <h3 class="home_subtitle">
                  I am <span class="type"></span> Developer
                </h3>

                <p class="home_description">
                  Open-Source enthusiast and self learner, believes in the power
                  of community.
                </p>
                <a href="#contact" class="button button--flex">
                  Contact Me
                  <i class="uil uil-message"></i>
                </a>
              </div>
            </div>

            <div class="home_scroll">
              <a href="#about" class="home_scroll-button button--flex">
                <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                <span class="home_scroll-name">Scroll Down</span>
                <i class="uil uil-arrow-down home_scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Copy_new;
