import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import './custom.scss';

function Header() {
  React.useEffect(() => {
    const hue = document.getElementById("hue-effect");
    const handleMouseMove = (e) => {
      hue.style.left = `${e.pageX}px`;
      hue.style.top = `${e.pageY}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="hue-effect"></div>
      <nav className="navbar navbar-light bg-custom-blue p-4 fixed-top">
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
