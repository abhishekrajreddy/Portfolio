import React from "react";

function Contact() {
  return (
    <div className="">
      <section class="contact section" id="contact">
        <h1 class="section_title">Contact Me</h1>
        <span class="section_subtitle">
          Want to connect? My inbox is always open!
        </span>

        <div class="contact_container container1 grid">
          <div>
            <a href="mailto:abhishekrajreddy@gmail.com" target="_blank">
              <div class="contact_info">
                <i class="uil uil-envelope-alt contact_icon"></i>
                <div>
                  <h3 class="contact_title">Email</h3>
                  <span class="contact_subtitle">
                    abhishekrajreddy@gmail.com
                  </span>
                </div>
              </div>
            </a>

            {/* <a href="https://twitter.com/abhityagi29120" target="_blank">
              <div class="contact_info">
                <i class="uil uil-twitter-alt contact_icon"></i>
                <div>
                  <h3 class="contact_title">Twitter</h3>
                  <span class="contact_subtitle">@abhityagi29120</span>
                </div>
              </div>
            </a> */}

            <a
              href="https://www.google.co.uk/maps/place/London/@51.5281798,-0.4312316,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu"
              target="_blank"
            >
              <div class="contact_info">
                <i class="uil uil-location-point contact_icon"></i>
                <div>
                  <h3 class="contact_title">Location</h3>
                  <span class="contact_subtitle">London, United Kingdom</span>
                </div>
              </div>
            </a>
          </div>

          <form
            action="£"
            class="contact_form grid"
            id="contact-form"
            method="POST"
          >
            <div id="alert" class="alert_style"></div>
            <div class="contact_inputs grid">
              <div class="contact_content">
                <label class="contact_label">Name</label>
                <input
                  type="text"
                  name="name"
                  class="contact_input"
                  id="name"
                  required
                />
              </div>
              <div class="contact_content">
                <label for="email" class="contact_label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  class="contact_input"
                  id="email"
                  required
                />
              </div>
            </div>
            <div class="contact_content">
              <label for="subject" class="contact_label">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                class="contact_input"
                id="subject"
                required
              />
            </div>
            <div class="contact_content">
              <label for="message" class="contact_label">
                Message
              </label>
              <textarea
                name="message"
                // id=""
                cols="0"
                rows="3"
                class="contact_input message"
                id="message"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" class="button button-flex">
                Send Message
                <i class="uil uil-message button_icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
