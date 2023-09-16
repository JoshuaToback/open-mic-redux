import React from "react";

import mic from "../assets/images/mic.png";

const Services = () => {
  return (
    <div className="services">
      <h1 className="title">Services</h1>
      <div className="about-containers">
          <div className="details-container">
            <h3>What We Do</h3>
            <p>
              Using a numbered casting system, one person receives the auditions
              and removes any names from the file, but adds a number to it.
              Another casting director looks at the numbered audition files with
              the client and determines who’s the best fit. If the unnamed
              audition’s number is selected, it will be matched to the person who
              submitted!
            </p>
          </div>
          <div className="details-container">
            <h3>Who We Are</h3>
            <p>
              Open Mic Studios is an anonymous casting studio created with entry
              level voice actors at the forefront of the next great games, shorts,
              animations, and more!
            </p>
            <p>
              Founded by Joshua Toback, this studio was created by voice actors,
              for voice actors. Stage fright doesn’t exist with Open Mic, as
              anyone can walk into the spotlight and shine!
            </p>
          </div>
          <div className="details-container">
            <h3>The Steps</h3>
            <ol>
              <li>Person auditions: CHARACTER_USER</li>
              <li>
                Director A receives the file, renames it, and duplicates it.
              </li>
              <li>
                Files A (17_CHARACTER_USER) are stored so that Files B (17) are
                reviewed by the casting directors and client.
              </li>
              <li>
                Everyone reviews the auditions and selects the best number, then
                matches the number with the audition.
              </li>
            </ol>
          </div>
        </div>
      <div className="clients-details-container">
        <h3>The Mic System</h3>
        <div className="about-containers">
          <div className="details-container">
            <h3>The Bronze Mic</h3>
            <p>
              <span className="bronzeIcon">
                <img src={mic} alt="bronzeMic" />
              </span>

              <p>
                The starting tier that gets access to workshops, coaching and
                more!
              </p>
            </p>
          </div>
          <div className="details-container">
            <h3>The Silver Mic</h3>
            <span className="silverIcon">
              <img src={mic} alt="silverIcon" />
            </span>
            <p>
              The next level for people with verified setups! They get exclusive
              access to casting calls from both us and our clients!
            </p>
          </div>
          <div className="details-container">
            <h3>The Gold Mic</h3>
            <span className="goldIcon">
              <img src={mic} alt="goldMic" />
            </span>
            <p>
              For professional voice actors who are established and ready to
              reach the stars! Gold Mics get feedback on every audition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
