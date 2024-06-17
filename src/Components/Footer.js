import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer_bg">
          <div class="footer_container container1 grid">
            <div>
              <h1 class="footer_title">Abhishek Reddy</h1>
            </div>

            <ul class="footer_links">
              <li>
                <a href="#about" class="footer_link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" class="footer_link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" class="footer_link">
                  Experience
                </a>
              </li>
            </ul>

            <div class="footer_socials">
              <a
                href="https://www.linkedin.com/in/abhishekrajreddy/"
                target="_blank"
                class="footer_social"
              >
                <i class="uil uil-linkedin-alt"></i>
              </a>

              <a
                href="https://www.instagram.com/abhishekrreddy/"
                target="_blank"
                class="footer_social"
              >
                <i class="uil uil-instagram"></i>
              </a>
            </div>
          </div>

          {/* <p class="footer_copy">&#169; Abhishek Reddy.</p> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
