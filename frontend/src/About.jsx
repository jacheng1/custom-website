import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from '/logo.svg';
import './custom.scss';

function Header() {
  const [scrollDirection, setScrollDirection] = useState("up");

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
      <nav className={`navbar navbar-light bg-custom-blue p-4 fixed-top ${scrollDirection === "down" ? "hide" : "show"}`}>
        <div className="container-fluid">
          <img src={logo} className="logo" alt="Initials logo" width="50" height="50" />
          <form className="d-flex ms-auto align-items-center">
            <Link to="/" className="btn btn-outline-light ms-3">
              <span className="link-number">01.</span> About
            </Link>
            <Link to="/experience" className="btn btn-outline-light ms-3">
              <span className="link-number">02.</span> Experience
            </Link>
            <Link to="/projects" className="btn btn-outline-light ms-3">
              <span className="link-number">03.</span> Projects
            </Link>
            <Link to="/contact" className="btn btn-outline-light ms-3">
              <span className="link-number">04.</span> Contact
            </Link>
            <Link to="/resume" className="btn btn-outline-success ms-3">
              Resume
            </Link>
          </form>
        </div>
      </nav>
      <div className="intro-section bg-custom-blue text-start text-light pt-5 pb-5 mt-5">
        <div className="container p-4">
          <p className="intro-text">Hi, my name is</p>
          <h1 className="display-4 fw-bold text-light-gray">Jacky Cheng.</h1>
          <h1 className="display-4 fw-bold text-gray">I build full-stack applications.</h1>
          <p className="text-gray">
            I am a computer science student at the University of California, Irvine
            <br />
            looking to design and implement intuitive, user-centric solutions.
          </p>
          <Link to="/resume" className="btn btn-outline-success btn-custom mt-5 mb-5">
            Check out my work!
          </Link>
        </div>
      </div>
      <div className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4">
          <p className="text">Pending.</p>
        </div>
      </div>
    </>
  );
}

export default Header;
