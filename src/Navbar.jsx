import React from "react";
import { Link } from "react-scroll";

import OMS from "./assets/images/oms_temp.png";

export default function Navbar() {
  return (
    <nav>
      <ul>
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
  );
}
