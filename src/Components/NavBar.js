import React from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

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
                    <a className="nav-item px-3" href="#homepageLink">
                        <p className="nav-link text-light">Home</p>
                    </a>
                    <Link className="nav-item px-3" to="/swags">
                        <p className="nav-link text-light">Swags</p>
                    </Link>
                    <a className="nav-item px-3" href="#aboutusLink">
                        <p className="nav-link text-light">About Us</p>
                    </a>
                    <a className="nav-item px-3" href="#sponserLink">
                        <p className="nav-link text-light">Sponsors</p>
                    </a>
                    <a className="nav-item px-3" href="#">
                        <p className="nav-link text-light">FAQs</p>
                    </a>
                    <a className="nav-item px-3" href="#reg">
                        <p className="nav-link text-light">Register</p>
                    </a>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;
