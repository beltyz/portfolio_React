import React from "react";
import "./footer.css";
import linkedIn from "../Assets/linkedin.svg"
import gitHub from "../Assets/github.svg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">DMYTRO</h2>
          <p className="footer-description">
          I'm a passionate Frontend Developer with a keen eye for detail and a love for creating engaging, intuitive web interfaces. With a solid foundation in modern web technologies like React, JavaScript, HTML, and CSS.<br></br>
          Feel free to reach out for any collaborations or inquiries!
          </p>
          <p className="footer-contact">
          <i className="fas fa-envelope"></i>
            <a className="mail" href="mailto:lusikdima4@gmail.com">lusikdima4@gmail.com</a>
            
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Link</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#portfolio">Resume</a></li>
            <li><a href="#experience">Contact</a></li>
          </ul>
        </div>

       

        <div className="footer-section">
          <h3 className="footer-title">Social Media</h3>
          <div className="footer-social-icons">
          <a href="https://www.linkedin.com/in/dmytro-lushchyk/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://github.com/beltyz" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
