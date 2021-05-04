  
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-container" name="contact" id="contact">
      <div className="profile-image"></div>
      <h1 className="text-center  text-white">CONTACT ME</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text text-white">
            <span>Email</span>
          </div>
          <div className="contact-links text-white">
            <span>ninuvv032@gmail.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text text-white">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ninuvv/"
            >
              <i className="fab fa-github text-white" title="github" id="github"></i>
            </a>

            {/* facebook */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100041078220896"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a> */}

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ninu-vivek-82211a211/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

            {/* Twitter */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/Junaid084869/"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"></i>
            </a> */}

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/ninuvivek/"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text text-white">
            <span>Phone</span>
          </div>
          <div className="contact-links text-white">
            <span>(+966) 532734134</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;