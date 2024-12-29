import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from '/logo.svg';
import './custom.scss';

function Home() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect for handling navbar appearing/disappearing on scroll
  useEffect(() => {
    // Track latest Y-direction of scroll
    let lastScrollY = window.scrollY;

    // Set scrollDirection to "down" if scrolling down, to "up" if scrolling up
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Track latest Y-direction of scroll
      lastScrollY = window.scrollY;

      // set isScrolled to true, if user scrolls away from top of page
      setIsScrolled(window.scrollY > 0);
    };

    // Add event listener to call handleScroll upon scrolling
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect for hue that moves with mouse cursor
  React.useEffect(() => {
    // Reference .scss element #hue-effect
    const hue = document.getElementById("hue-effect");

    // Track X and Y-coordinate of mouse cursor
    const handleMouseMove = (e) => {
      hue.style.left = `${e.pageX}px`;
      hue.style.top = `${e.pageY}px`;
    };

    // Add event listener to call handleMouseMove when moving mouse cursor
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="hue-effect"></div>
      <div className="fixed-left-sidebar d-flex flex-column align-items-center ms-4">
        <a className="my-4 text-decoration-none" href="mailto:chjack568@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="fs-4" />
        </a>
        <a className="my-4 text-decoration-none" href="https://linkedin.com/in/jacky-cheng-54516a1ab" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="fs-4" />
        </a>
        <a className="my-4 text-decoration-none" href="https://github.com/jacheng1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="fs-4" />
        </a>
        <div className="vertical-line"></div>
      </div>
      <nav className={`navbar navbar-light bg-custom-blue p-4 fixed-top ${scrollDirection === "down" ? "hide" : "show"} ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-fluid">
          <img src={logo} className="logo" alt="Initials logo" width="50" height="50" />
          <form className="d-flex ms-auto align-items-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                e.target.blur();
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">01.</span> About
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
                e.target.blur();
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">02.</span> Experience
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                e.target.blur();
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">03.</span> Projects
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                e.target.blur();
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">04.</span> Contact
            </button>
            <Link to="/resume" className="btn btn-outline-success ms-3">
              Resume
            </Link>
          </form>
        </div>
      </nav>
      <div id="about" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5 mt-5">
        <div className="container p-4">
          <p className="intro-text">Hi, my name is</p>
          <h1 className="display-4 fw-bold text-light-gray">Jacky Cheng.</h1>
          <h1 className="display-4 fw-bold text-gray">I build full-stack applications.</h1>
          <p className="text-gray">
            I am a computer science student at the University of
            <br />
            California, Irvine looking to design and implement
            <br />
            intuitive, user-centric solutions.
          </p>
          <Link to="/resume" className="btn btn-outline-success btn-custom mt-5 mb-5">
            Check out my work!
          </Link>
        </div>
      </div>
      <div id="experience" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4 d-flex align-items-center">
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text">02.</span> Experience
          </h3>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <div id="projects" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4 d-flex align-items-center">
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text">03.</span> Projects
          </h3>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <div id="contact" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4 d-flex align-items-center justify-content-center">
          <div className="horizontal-line-contact"></div>
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text">04.</span> Contact
          </h3>
          <div className="horizontal-line-contact"></div>
        </div>
        <div className="container p-4 text-center">
          <h2 className="text-light-gray">Let's connect.</h2>
          <p className="text-gray">
              Currently open to new projects, internship role inquiries, 
              <br />
              or other opportunities.
          </p>
          <a className="btn btn-outline-success btn-custom mt-4 mb-5" href="mailto:chjack568@gmail.com" target="_blank" rel="noopener noreferrer">
            Send Message
          </a>
        </div>
      </div>
      <div className="intro-section bg-custom-blue text-light d-flex align-items-center justify-content-center pt-5 pb-5">
        <div className="container text-center">
          <img 
            src={logo} 
            className="logo mb-3" 
            alt="Initials logo" 
            width="50" 
            height="50"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              e.target.blur();
            }}
          />
          <p className="text-gray text-center mb-0">&copy; 2024 Jacky Cheng</p>
        </div>
      </div>
    </>
  );
}

export default Home;