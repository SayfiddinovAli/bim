import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; // Bootstrap JS va CSS yuklanishi kerak
import { SiBrandfolder } from "react-icons/si";

const Header = () => {
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show"); // Collapse classini olib tashlaymiz
    }
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container ms-4 me-4">
        <a className="navbar-brand text-primary fw-bold" href="#">
          <span><SiBrandfolder size={42} /></span> Bilib ol
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Kurslar" onClick={handleLinkClick}>Kurslar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Maqolalar" onClick={handleLinkClick}>Maqolalar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
          <div className="">
            <Link to="/SignIn" className="btn btn-outline-primary me-2" onClick={handleLinkClick}>Sign In</Link>
            <Link to="/RegistrationForm" className="btn btn-primary" onClick={handleLinkClick}>Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
