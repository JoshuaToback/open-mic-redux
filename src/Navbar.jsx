import React, { useState } from "react";
import { Link } from "react-scroll";

import OMS from "./assets/images/oms_temp.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const menuClass = `menu-links ${isMenuOpen ? "open" : ""}`;

  return (
    <>
      <nav id="desktop-nav">
        <ul className="nav-links">
          <li>
            <Link activeClass="active" smooth spy to="services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="clients">
              CLIENTS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="home">
              <img src={OMS} alt="OMS Logo" className="nav-logo" />
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <Link activeClass="active" smooth spy to="home">
          <img src={OMS} alt="OMS Logo" className="nav-logo" />
        </Link>
        <div className="hamburger-items">
          <div className="hamburger-menu">
            <div
              className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuClass}>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="services"
                  onClick={toggleMenu}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="clients"
                  onClick={toggleMenu}
                >
                  CLIENTS
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                  onClick={toggleMenu}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  onClick={toggleMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
