import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import logo from '/logo.svg';
import project1 from '/project1.png';
import project2 from '/project2.png';
import project3 from '/project3.png';
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

  // Handle experience section timeline
  const boxes = document.querySelectorAll(".box");

  // Activate timeline animation upon user scroll
  window.addEventListener("scroll", DisplayContent);
  DisplayContent();

  // Helper function to handle timeline animations
  function DisplayContent() {
    // Set animation trigger for window
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      // Retrieve box position relative to viewport
      const topBox = box.getBoundingClientRect().top;

      // If topBox < triggerBottom position, add box to timeline via slide-in animation. If not, remove box from timeline via slide-out animation
      if (topBox < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    })
  }

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
      <div className="fixed-right-sidebar d-flex flex-column align-items-center me-4">
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
            <a className="btn btn-outline-success ms-3" href="https://drive.google.com/file/d/15n2c06tI7ZQMvMnUexmJjzAaJ_TuJ4Rq/view" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
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
          <button 
            className="btn btn-outline-success btn-custom mt-5 mb-5"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
              e.target.blur();
            }}
          >
            Check out my work!
          </button>
        </div>
      </div>
      <div id="experience" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4 d-flex align-items-center">
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text">02.</span> My Experience
          </h3>
          <div className="horizontal-line"></div>
        </div>
        <div className="container p-4 text-center">
          <section id="timeline" className="mb-5">
            <ul>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray title">Student Consultant, Software Development
                    <span className="intro-text"> @ Open Avenues Career Pathways</span>
                  </h3>
                  <p className="text-gray pb-1">Sep. 2023 - Nov. 2023</p>
                  <p className="text-gray pb-3 pe-1">
                  • Developed full-stack messenger application that allows a user to send custom SMS messages to a phone number
                  <br />
                  • Integrated Twilio REST API in backend, facilitating retrieval of recipient&apos;s phone number
                  <br />
                  • Utilized backend API endpoints, enabling create and read operations on PostgreSQL database
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray title">Labs Intern
                    <span className="intro-text"> @ CodeDay</span>
                  </h3>
                  <p className="text-gray pb-1">June 2023 - Aug. 2023</p>
                  <p className="text-gray pb-3 pe-1">
                  • Consulted with clients from Mentors in Tech, determining project scope and coordinating all visual and technical requirements of the website rebuild
                  <br />
                  • Utilized Agile methodologies, Gitflow, and continuous integration process to create design system via Atomic Design principles and build front-end that sources data from Contentful CMS and is distributed across a global CDN
                  <br />
                  • Modularized visual elements of original website into reusable components, improving end user editability
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray title">Teaching Assistant
                    <span className="intro-text"> @ City College of San Francisco</span>
                  </h3>
                  <p className="text-gray pb-1">Jan. 2023 - May 2023</p>
                  <p className="text-gray pb-3 pe-1">
                  • Analyzed program efficiency and correctness of 20+ student&apos;s weekly C++ assignments
                  <br />
                  • Collaborated with instructor to provide constructive feedback with regards to program efficiency
                  and algorithm optimization, resulting in ~93% of students passing with a C or higher
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray title">Cohort Student
                    <span className="intro-text"> @ Mission Bit</span>
                  </h3>
                  <p className="text-gray pb-1">Sep. 2020 - Dec. 2020</p>
                  <p className="text-gray pb-3 pe-1">
                  • Worked in a team of three students to develop a COVID-19 mental health research and resources website that visualizes data and statistics by using JavaScript, HTML, and CSS
                  <br />
                  • Virtually presented final project to Mission Bit associates, receiving the “Most Significant Impact” award
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <a className="btn btn-outline-success btn-custom mt-5" href="https://drive.google.com/file/d/15n2c06tI7ZQMvMnUexmJjzAaJ_TuJ4Rq/view" target="_blank" rel="noopener noreferrer">View Full Resume</a>
        </div>
      </div>
      <div id="projects" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4 d-flex align-items-center">
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text">03.</span> Projects I&apos;ve Built
          </h3>
          <div className="horizontal-line"></div>
        </div>
        <div className="container p-4 text-center">
          <section id="projects">
            <ul>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img 
                    src={project1}
                    className="project-img me-4"
                    alt="Project 1"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">Fabflix</h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4">
                        A full-stack e-commerce application built and deployed on AWS EC2, 
                        enabling users to browse, sort, and search for movies.
                      </p>
                    </div>
                    <div className="project-links">
                      <a 
                        className="text-decoration-none ms-3" 
                        href="https://github.com/jacheng1/fabflix" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="fs-4" />
                      </a>
                      <Link
                        className="text-decoration-none ms-3"
                        to="/fabflix"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="fs-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img 
                    src={project2}
                    className="project-img me-4" 
                    alt="Project 2"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">Zotsearch</h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4">
                        A search engine, built from the ground up, that utilizes a corpus of over 55,000 web pages and achieves results in less than 300 ms.
                      </p>
                    </div>
                    <div className="project-links">
                      <a 
                        className="text-decoration-none ms-3" 
                        href="https://github.com/jacheng1/search-engine" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="fs-4" />
                      </a>
                      <Link
                        className="text-decoration-none ms-3"
                        to="/zotsearch"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="fs-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img 
                    src={project3}
                    className="project-img me-4" 
                    alt="Project 3"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">iManager</h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4">
                        A full-stack inventory management application that stores user-defined items, each configurable by name and quantity.
                      </p>
                    </div>
                    <div className="project-links">
                      <a 
                        className="text-decoration-none ms-3" 
                        href="https://github.com/jacheng1/inventory-manager" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="fs-4" />
                      </a>
                      <Link
                        className="text-decoration-none ms-3"
                        to="/imanager"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="fs-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div id="contact" className="intro-section bg-custom-blue text-start text-light pt-5 pb-5">
        <div className="container p-4 d-flex align-items-center justify-content-center">
          <div className="horizontal-line-contact"></div>
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text">04.</span> Contact Info
          </h3>
          <div className="horizontal-line-contact"></div>
        </div>
        <div className="container p-4 text-center">
          <h2 className="text-light-gray">Let&apos;s connect!</h2>
          <p className="text-gray">
              Currently open to project work, internship role inquiries, 
              <br />
              and related opportunities.
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
            className="logo mb-5" 
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