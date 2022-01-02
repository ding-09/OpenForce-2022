import React from "react";
import "./styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <img src="./images/Logo.svg" alt="/" />
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item px-3">
            <a className="nav-link text-light" href="/">
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-light" href="/">
              Swags
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-light" href="/">
              About Us
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-light" href="/">
              Sponsors
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-light" href="/">
              FAQs
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link text-light" href="/">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
