import React, { useState } from "react";

function Skills() {
  const [lanToggle, setLanToggle] = useState(true);
  const [libToggle, setLibToggle] = useState(false);
  const [toolToggle, setToolToggle] = useState(false);

  return (
    <div className="">
      <section class="skills section" id="skills">
        <h1 class="section_title">Skills</h1>
        <span class="section_subtitle">My Technical Skills</span>
        <div class="skills_container container1 grid">
          {/* <!-- Skill Set 1 --> */}
          <div
            class={
              lanToggle
                ? "skill skills_content skills_open"
                : "skill skills_content"
            }
          >
            <div class="skills_header" onClick={() => setLanToggle(!lanToggle)}>
              <i class="uil uil-arrow skills_icon"></i>

              <div>
                <h1 class="skills_title">Languages</h1>
                <span class="skills_subtitle">
                  Languages that I have picked up over the years
                </span>
              </div>

              <i class="uil uil-angle-down skills_arrow"></i>
            </div>

            <div class="skills_list grid">
              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-js-square"></i>
                  </span>
                  <h3 class="skills_name">JavaScript</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-python"></i>
                  </span>
                  <h3 class="skills_name">Python</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-html5"></i>
                  </span>
                  <h3 class="skills_name">HTML</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-css3-alt"></i>
                  </span>
                  <h3 class="skills_name">CSS</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-sass"></i>
                  </span>
                  <h3 class="skills_name">SASS</h3>
                </div>
                <div class="skills_bar"></div>
              </div>
            </div>
          </div>

          {/* <!-- Skill Set 2 --> */}
          <div
            class={
              libToggle
                ? "skill skills_content skills_open"
                : "skill skills_content"
            }
          >
            <div class="skills_header" onClick={() => setLibToggle(!libToggle)}>
              <i class="uil uil-brackets-curly skills_icon"></i>

              <div>
                <h1 class="skills_title">Libraries & Frameworks</h1>
                <span class="skills_subtitle">
                  Libraries and Frameworks that I prefer to work with
                </span>
              </div>

              <i class="uil uil-angle-down skills_arrow"></i>
            </div>

            <div class="skills_list grid">
              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-react"></i>
                  </span>
                  <h3 class="skills_name">ReactJS</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-bootstrap"></i>
                  </span>
                  <h3 class="skills_name">Bootstrap</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon external-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 54 33"
                    >
                      <g clip-path="url(#prefix__clip0)">
                        <path
                          fill="#6E57E0"
                          fill-rule="evenodd"
                          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                          clip-rule="evenodd"
                        />
                      </g>
                      <defs>
                        <clipPath id="prefix__clip0">
                          <path fill="#fff" d="M0 0h54v32.4H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <h3 class="skills_name">Tailwind CSS</h3>
                </div>
                <div class="skills_bar"></div>
              </div>
            </div>
          </div>

          {/* <!-- Skill Set 3 --> */}
          <div
            class={
              toolToggle
                ? "skill skills_content skills_open"
                : "skill skills_content"
            }
          >
            <div
              class="skills_header"
              onClick={() => setToolToggle(!toolToggle)}
            >
              <i class="uil uil-wrench skills_icon"></i>

              <div>
                <h1 class="skills_title">Tools</h1>
                <span class="skills_subtitle">
                  Tools that I know and use on a daily basis
                </span>
              </div>

              <i class="uil uil-angle-down skills_arrow"></i>
            </div>

            <div class="skills_list grid">
              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-git-alt"></i>
                  </span>
                  <h3 class="skills_name">Git</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <h3 class="skills_name">GitHub</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon external-logo">
                    <img src="./img/Firebase.png" alt="" />
                  </span>
                  <h3 class="skills_name">Firebase</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon">
                    <i class="fab fa-figma"></i>
                  </span>
                  <h3 class="skills_name">Figma</h3>
                </div>
                <div class="skills_bar"></div>
              </div>

              <div class="skills_data">
                <div class="skills_titles">
                  <span class="single_skill_icon external-logo">
                    <svg
                      viewBox="0 0 240 234"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
                        fill="#6e57e0"
                      />
                      <g fill="#fff">
                        <path d="M126.2 61.5l-30 49.5 32 52.5c.2.4.3.8.2 1.2s-.5.1-1.1.2h-22.9c-1.6 0-2.7-.1-3.4-1.1-2.1-4.2-4.3-8.3-6.4-12.5-2.1-4.1-4.4-8.3-6.8-12.6s-4.8-8.6-7.2-13h-.2c-2.1 4.3-4.4 8.6-6.7 12.9s-4.6 8.6-6.8 12.8c-2.3 4.2-4.6 8.5-6.9 12.6-.4 1-1.2 1.1-2.3 1.1h-22c-.4 0-.7.2-.7-.3-.1-.4 0-.8.2-1.1l31.1-51L36 61.4c-.3-.4-.4-.8-.2-1 .2-.3.6-.4 1-.4h22.7c.5 0 1 .1 1.4.2.4.2.7.5 1 .9 1.9 4.3 4.1 8.6 6.4 12.9 2.4 4.3 4.7 8.5 7.2 12.7 2.4 4.2 4.6 8.4 6.7 12.7h.2c2.1-4.4 4.3-8.7 6.5-12.9s4.5-8.4 6.8-12.6 4.5-8.5 6.7-12.6c.1-.4.3-.8.6-1 .4-.2.8-.3 1.3-.2h21.1c.5-.1 1 .2 1.1.7.1.1-.1.5-.3.7zM172.4 167c-7.4.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8.5 0 1.2 0 2.1.1s1.9.1 3.1.2V52.4c0-.7.3-1.1 1-1.1h20.3c.5-.1.9.3 1 .7v95.4c0 1.8.1 3.8.2 6 .2 2.1.3 4.1.4 5.8 0 .7-.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5.1.9-10.2 1.4-15.4 1.4zm9.8-20v-44c-.9-.2-1.8-.4-2.7-.5-1.1-.1-2.2-.2-3.3-.2-3.9 0-7.8.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-.1 3.5.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7.9 5.5 1.3 8.3 1.3 1.5 0 2.9-.1 4.2-.2 1.3.1 2.4-.1 3.6-.5z" />
                      </g>
                    </svg>
                  </span>
                  <h3 class="skills_name">Adobe XD</h3>
                </div>
                <div class="skills_bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
