import React, { useState } from "react";
/* eslint-disable */
function Header() {
  const [hambuger, setHambuger] = useState(false);
  return (
    <div className="header w-100">
      <nav className="navbar navbar-expand-sm py-4 navbar-dark  fixed-top w-100">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="" className="logo" /> Upscale
            Advisory
          </a>
          {
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"ttt
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={e=>setHambuger(!hambuger)}
            >
              {!hambuger ? (
                <span className="navbar-toggler-icon"></span>
              ) : (
                <span className="navbar-close-icon">x</span>
              )}
            </button>
          }
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item b-contact">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
