import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link smooth spy to="about">
                ABOUT
              </Link>
            </li>

            <li>
              <Link smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link smooth spy to="experience">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link smooth spy to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Joshua Toback. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
