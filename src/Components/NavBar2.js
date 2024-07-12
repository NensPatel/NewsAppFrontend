import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg backdrop-blur">
        <div className="container justify-content-end text-center pointer">
          <div
            className="navbar-toggler"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <h1 className="pointer">
                <i className="fa-solid fa-times text-white  "></i>
              </h1>
            ) : (
              <h1>
                <i className="fa-solid fa-bars text-white  "></i>
              </h1>
            )}
          </div>
          <div
            className={`collapse navbar-collapse justify-content-center p-2 ${
              isMenuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={`/`}>
                  <h5 className="fw-bold navbar2">Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Entertainment`}>
                  <h5 className="fw-bold navbar2">Entertainment</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Technology`}>
                  <h5 className="fw-bold navbar2">Technology</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Sports`}>
                  <h5 className="fw-bold navbar2">Sports</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Business`}>
                  <h5 className="fw-bold navbar2">Business</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Health`}>
                  <h5 className="fw-bold navbar2">Health</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Science`}>
                  <h5 className="fw-bold navbar2">Science</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
