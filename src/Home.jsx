import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

import logo from "/logo.svg";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";

import "./custom.scss";

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
  useEffect(() => {
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

  // Handle experience section timeline
  const boxes = document.querySelectorAll(".box");

  // Activate timeline animation upon user scroll
  window.addEventListener("scroll", displayTimeline);
  displayTimeline();

  // Helper function to handle timeline animations
  function displayTimeline() {
    // Set animation trigger for window
    const bottomTrigger = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      // Retrieve box position relative to viewport
      const topBox = box.getBoundingClientRect().top;

      // If topBox < triggerBottom position, add box to timeline via slide-in animation. If not, remove box from timeline via slide-out animation
      if (topBox < bottomTrigger) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

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
            <button
              onClick={(e) => {
                handleScrollIntoView(e, "about");
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">01.</span> About
            </button>
            <button
              onClick={(e) => {
                handleScrollIntoView(e, "experience");
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">02.</span> Experience
            </button>
            <button
              onClick={(e) => {
                handleScrollIntoView(e, "projects");
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">03.</span> Projects
            </button>
            <button
              onClick={(e) => {
                handleScrollIntoView(e, "contact");
              }}
              className="btn btn-outline-light ms-3"
            >
              <span className="link-number">04.</span> Contact
            </button>
            <a
              className="btn btn-outline-success ms-3"
              href="https://drive.google.com/file/d/1-DSUUp6MKlAm36Q8WVq673cX09vbbviE/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </form>
        </div>
      </nav>
      <div
        id="about"
        className="intro-section bg-custom-blue text-start text-light p-5 mt-5"
      >
        <div className="container p-7 py-7">
          <p className="intro-text">Hi, my name is</p>
          <h1 className="display-4 fw-bold text-light-gray name-text">Jacky Cheng.</h1>
          <h1 className="display-4 fw-bold text-gray statement-text">
            I build web applications.
          </h1>
          <p className="text-gray py-3 description-text">
            I'm a computer science student at the <span className="description-text-name">University of California, Irvine</span>
            <br />
            looking to design and implement intuitive, user-centric web solutions.
          </p>
          <button
            className="btn btn-outline-success btn-custom mt-5 mb-5"
            onClick={(e) => {
              handleScrollIntoView(e, "projects");
            }}
          >
            Check out my work!
          </button>
        </div>
      </div>
      <div
        id="experience"
        className="intro-section bg-custom-blue text-start text-light pt-5 pb-5"
      >
        <div className="container p-4 d-flex align-items-center">
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text fw-light">02.</span> My Experience
          </h3>
          <div className="horizontal-line"></div>
        </div>
        <div className="container p-4 text-center">
          <section id="timeline" className="mb-5">
            <ul>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray timeline-title">
                    Information Technology Intern
                    <span className="intro-text">
                      {" "}
                      @ Southern California Edison (SCE)
                    </span>
                  </h3>
                  <p className="text-light-gray pb-1 timeline-dates">June 2025 - Present</p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Support transition from legacy systems by mapping old workflows to new front-end implementation of incident correction tool
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Propose and implement UI solutions to issues within legacy systems that reduce complexity and streamline user operations
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Integrate GraphQL APIs to manage incident data, ensuring seamless communication between front-end and grid database
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Conduct usability testing with business users to generate feedback, iterate on designs, and improve workflow efficiency
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray timeline-title">
                    Software Developer
                    <span className="intro-text">
                      {" "}
                      @ Ready Tutor
                    </span>
                  </h3>
                  <p className="text-light-gray pb-1 timeline-dates">Jan. 2025 - Present</p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Lead front-end development of Course Eater, a year-by-year course planning tool for 50+ UCI students
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Coordinate design of Figma prototype and implementation of user interface, improving the overall user experience
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Collaborate with back-end developers to ensure seamless connectivity between front-end and back-end functionality
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Migrate app from legacy PeterPortal API to Anteater API by refactoring API calls, ensuring maintainability
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray timeline-title">
                    Student Consultant, Software Development
                    <span className="intro-text">
                      {" "}
                      @ Open Avenues Career Pathways
                    </span>
                  </h3>
                  <p className="text-light-gray pb-1 timeline-dates">Sept. 2023 - Nov. 2023</p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Developed full-stack messenger application that allows a user to send custom SMS messages to a phone number
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Integrated Twilio REST API in backend, facilitating retrieval of recipient&apos;s phone number
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Utilized backend API endpoints, enabling create and read operations on PostgreSQL database
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray timeline-title">
                    Open-Source Software Engineering Intern
                    <span className="intro-text"> @ CodeDay</span>
                  </h3>
                  <p className="text-light-gray pb-1 timeline-dates">June 2023 - Aug. 2023</p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Consulted with clients from Mentors in Tech, determining project scope and requirements of the website rebuild
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Utilized Agile methodologies, Gitflow, and continuous
                    integration process to create design system via Atomic
                    Design principles and build front-end that sources data from
                    Contentful CMS and is distributed across a global CDN
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Modularized visual elements of original website into
                    reusable components, improving end user editability
                  </p>
                </div>
              </li>
              <li>
                <i className=""></i>
                <div className="box">
                  <h3 className="fw-bold text-light-gray timeline-title">
                    Teaching Assistant
                    <span className="intro-text">
                      {" "}
                      @ City College of San Francisco
                    </span>
                  </h3>
                  <p className="text-light-gray pb-1 timeline-dates">Jan. 2023 - May 2023</p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Analyzed program efficiency and correctness of 20+ student&apos;s weekly C++ assignments
                  </p>
                  <p className="text-gray timeline-description">
                    <IoMdArrowDropright className="timeline-arrow me-2" />
                    Collaborated with instructor to provide constructive feedback with regards to program efficiency
                    and algorithm optimization, resulting in ~93% of students passing with a C or higher
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <a
            className="btn btn-outline-success btn-custom mt-5"
            href="https://drive.google.com/file/d/1-DSUUp6MKlAm36Q8WVq673cX09vbbviE/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Resume
          </a>
        </div>
      </div>
      <div
        id="projects"
        className="intro-section bg-custom-blue text-start text-light pt-5 pb-5"
      >
        <div className="container p-4 d-flex align-items-center">
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text fw-light">03.</span> Projects I&apos;ve Built
          </h3>
          <div className="horizontal-line"></div>
        </div>
        <div className="container p-4 text-center">
          <section id="projects">
            <ul>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img
                    src={project4}
                    className="project-img me-4"
                    alt="Project 1"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">
                      Senior Sense Solutions
                    </h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4 projects-description-text">
                        A full-stack IoT application built and deployed on AWS EC2, enabling real-time biometric monitoring, fall detection, and wearable device location tracking.
                        The user can manage patients, monitor their vitals, and view time-based health data trends.
                      </p>
                    </div>
                    <div className="project-links">
                      <a
                        className="text-decoration-none ms-3"
                        href="https://github.com/PurelyBlank/Senior-Sense-Solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="fs-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img
                    src={project1}
                    className="project-img me-4"
                    alt="Project 2"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">
                      Fabflix
                    </h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4 projects-description-text">
                        A full-stack e-commerce application built and deployed
                        on AWS EC2, enabling users to browse, sort, and search
                        for movies.
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
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img
                    src={project2}
                    className="project-img me-4"
                    alt="Project 3"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zotsearch
                    </h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4 projects-description-text">
                        A search engine, built from the ground up, that utilizes
                        a corpus of over 55,000 web pages and achieves results
                        in less than 300 ms.
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
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="projects-box d-flex align-items-start">
                  <img
                    src={project3}
                    className="project-img me-4"
                    alt="Project 4"
                  />
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="intro-text pb-0">Featured Project</p>
                    </div>
                    <h3 className="fw-bold text-light-gray mt-1 pb-3">
                      iManager
                    </h3>
                    <div className="projects-description-box">
                      <p className="text-gray p-4 projects-description-text">
                        A full-stack inventory management application that
                        stores user-defined items, each configurable by name and
                        quantity.
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
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div
        id="contact"
        className="intro-section bg-custom-blue text-start text-light pt-5 pb-5"
      >
        <div className="container p-4 d-flex align-items-center justify-content-center">
          <div className="horizontal-line-contact"></div>
          <h3 className="fw-bold text-light-gray m-5">
            <span className="intro-text fw-light">04.</span> Contact Info
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
          <a
            className="btn btn-outline-success btn-custom mt-4 mb-5"
            href="mailto:chjack568@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              handleScrollIntoView(e, "about");
            }}
          />
          <p className="text-gray text-center mb-0">&copy; 2024 Jacky Cheng</p>
        </div>
      </div>
    </body>
  );
}

export default Home;
