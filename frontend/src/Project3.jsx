import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "/logo.svg";
import project3 from "/project3.png";
import "./custom.scss";

function Project3() {
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
        <a
          className="my-4 text-decoration-none"
          href="mailto:chjack568@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="fs-4" />
        </a>
        <a
          className="my-4 text-decoration-none"
          href="https://linkedin.com/in/jacky-cheng-54516a1ab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="fs-4" />
        </a>
        <a
          className="my-4 text-decoration-none"
          href="https://github.com/jacheng1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="fs-4" />
        </a>
        <div className="vertical-line"></div>
      </div>
      <div className="fixed-right-sidebar d-flex flex-column align-items-center me-4">
        <div className="vertical-line"></div>
      </div>
      <nav
        className={`navbar navbar-light bg-custom-blue p-4 fixed-top ${scrollDirection === "down" ? "hide" : "show"} ${isScrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="container-fluid">
          <img
            src={logo}
            className="logo"
            alt="Initials logo"
            width="50"
            height="50"
          />
          <form className="d-flex ms-auto align-items-center">
            <Link
              className="btn btn-outline-success ms-3"
              to="/"
              rel="noopener noreferrer"
            >
              Back to Home
            </Link>
            <a
              className="btn btn-outline-success ms-3"
              href="https://github.com/jacheng1/inventory-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-outline-success ms-3"
              href="https://drive.google.com/file/d/15n2c06tI7ZQMvMnUexmJjzAaJ_TuJ4Rq/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </form>
        </div>
      </nav>
      <div
        id="project"
        className="intro-section bg-custom-blue text-start text-light pt-5 pb-5 mt-5"
      >
        <div className="container p-4">
          <img
            src={project3}
            className="project-img me-4 mb-5"
            width="100%"
            height="auto"
            alt="Project 3"
          />
          <h1 className="display-4 fw-bold text-light-gray">iManager</h1>
          <h1 className="display-4 fw-bold text-gray">
            A full-stack inventory management application that stores
            user-defined items, each configurable by name and quantity.
          </h1>
          <p className="text-gray">
            ● Developed a full-stack application that stores user-defined
            entries, each manageable via manual CRUD operations
            <br />● Integrated Llama 3 LLM via Groq API to generate recipe text
            based on documents stored in Firestore database
          </p>
        </div>
      </div>
      <div className="intro-section bg-custom-blue text-light d-flex align-items-center justify-content-center pt-5 pb-5">
        <div className="container text-center">
          <img
            src={logo}
            className="logo mb-5"
            alt="Initials logo"
            width="50"
            height="50"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" });
              e.target.blur();
            }}
          />
          <p className="text-gray text-center mb-0">&copy; 2024 Jacky Cheng</p>
        </div>
      </div>
    </>
  );
}

export default Project3;
