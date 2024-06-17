import React, { useRef } from "react";
import Scrollspy from "react-scrollspy";

function Header() {
  console.log(window.location.pathname);

  return (
    <div>
      <header class="header" id="header">
        <nav class="nav container1">
          <a href="#" class="nav_logo">
            Abhishek{" "}
          </a>
          <Scrollspy
            items={["home", "about", "skills", "contact"]}
            currentClassName="active"
          >
            <div class="nav_menu" id="nav-menu">
              <ul class="nav_list grid">
                <li class="nav_item">
                  <a
                    href="#"
                    class={
                      window.location.pathname === "/" ? "nav_link" : "nav_link"
                    }
                  >
                    <i class="uil uil-estate nav_icon"></i> Home
                  </a>
                </li>
                <li class="nav_item">
                  <a
                    href="#about"
                    class={
                      window.location.pathname === "/about"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                  >
                    <i class="uil uil-user nav_icon"></i> About
                  </a>
                </li>
                <li class="nav_item">
                  <a
                    href="#skills"
                    class={
                      window.location.pathname === "/#skills"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                  >
                    <i class="uil uil-file-alt nav_icon"></i> Skills
                  </a>
                </li>
                <li class="nav_item">
                  <a
                    href="#experience"
                    class={
                      window.location.pathname === "/experience"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                  >
                    <i class="uil uil-file-alt nav_icon"></i> Experience
                  </a>
                </li>
                {/* <li class="nav_item">
                <a href="#qualification" class="nav_link">
                  <i class="uil uil-graduation-cap nav_icon"></i> Qualifications
                </a>
              </li>
              <li class="nav_item">
                <a href="#projects" class="nav_link">
                  <i class="uil uil-scenery nav_icon"></i> Projects
                </a>
              </li> */}
                {/* <li class="nav_item">
                  <a
                    href="/contact"
                    class={
                      window.location.pathname === "/contact"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                  >
                    <i class="uil uil-message nav-icon nav_icon"></i> Contact Me
                  </a>
                </li> */}
              </ul>
              <i class="uil uil-times nav_close" id="nav-close"></i>
            </div>
          </Scrollspy>

          {/* <div class="nav_btns">
            <i class="uil uil-moon change-theme" id="theme-button"></i>

            <div class="nav_toggle" id="nav-toggle">
              <i class="uil uil-apps"></i>
            </div>
          </div> */}
        </nav>
      </header>
    </div>
  );
}

export default Header;
