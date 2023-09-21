import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='fixed-top'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2">
                    <div className="logo">
                        <h1>Web Digital <span>Work</span></h1>
                    </div>
                </div>
                <div className="col-lg-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            <li><NavLink className="nav-link" to="website-design">Website Design</NavLink></li>
                                            <li><NavLink className="nav-link" to="/website-development">Website Development</NavLink></li>
                                            <li><NavLink className="nav-link" to="/seo">Search Engine Optimization</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-2">
                    <div className="header_btn">
                        <a className="site-btn" href="/contact-us">Get a Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
