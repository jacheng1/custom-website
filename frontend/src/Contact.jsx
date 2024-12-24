import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import './custom.scss';

function Contact() {
  return (
    <>
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
    </>
  );
}

export default Contact;
