import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header>
        <div className="container">
            <div className="row">
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
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/">Link</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
