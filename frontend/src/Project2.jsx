import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "/logo.svg";
import project2 from "/project2.png";
import "./custom.scss";

function Project2() {
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

  // Helper function to handle scroll into view upon click
  const handleScrollIntoView = (e, id) => {
    // Prevents button from skipping scroll into view animation
    e.preventDefault();

    // Scroll to page section by id
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    // Remove button text highlight after click
    e.target.blur();
  };

  return (
    <body className="bg-custom-blue">
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
              href="https://github.com/jacheng1/search-engine"
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
            src={project2}
            className="project-img me-4 mb-5"
            alt="Project 2"
          />
          <h1 className="display-4 fw-bold text-light-gray">Zotsearch</h1>
          <h1 className="display-4 fw-bold text-gray">
            A search engine, built from the ground up, that utilizes a corpus of
            over 55,000 web pages and achieves results in less than 300 ms.
          </h1>
          <p className="text-gray">
            ● Developed full-stack search engine utilizing corpus of 55,000+ web
            pages with query response times under 300 ms
            <br />
            ● Implemented inverted index for efficient query processing,
            enabling partial disk loading to minimize memory usage
            <br />● Integrated ranked retrieval and tf-idf weighting scheme,
            enhancing relevance and accuracy of query results
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
              handleScrollIntoView(e, "project");
            }}
          />
          <p className="text-gray text-center mb-0">&copy; 2024 Jacky Cheng</p>
        </div>
      </div>
    </body>
  );
}

export default Project2;
