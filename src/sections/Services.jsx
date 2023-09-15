import React from "react";

import mic from "../assets/images/mic.png";

const Services = () => {
  return (
    <div className="services">
      <h1 className="title">Services</h1>
      <div className="clients-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h3>What We Do</h3>
            <p>
              Using a numbered casting system, one person receives the auditions
              and removes any names from the file, but adds a number to it.
              Another casting director looks at the numbered audition files with
              the client and determines who’s the best fit. If the unnamed
              audition’s number is selected, it will be matched to the person
              who submitted!
            </p>
          </div>
          <div className="details-container">
            <h3>Who We Are</h3>
            <p>
              Open Mic Studios is an anonymous casting studio created with entry
              level voice actors at the forefront of the next great games,
              shorts, animations, and more!
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
        <h3>What We Offer</h3>
        <div className="about-containers">
          <div className="details-container">
            <h3>The Bronze Mic</h3>
            <p>
              <span className="bronzeIcon">
                <img src={mic} alt="bronzeMic" />
              </span>

              <p>
                The tier for voice actors starting out! If you are not sure
                about your setup or you're curious about voice acting, this tier
                offers workshops and coaching for everyone, with monthly
                competitions that include mock auditions, demo producing, and
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
              For people with the basic setups and are ready for the next step.
              These auditions are standard and have a low barrier of entry for
              all who are interested! This is for unpaid or around industry
              standard rates. The anonymous system is in effect to make sure the
              client is satisfied and the best voice is put forward over
              anything else.
            </p>
          </div>
          <div className="details-container">
            <h3>The Gold Mic</h3>
            <span className="goldIcon">
              <img src={mic} alt="goldMic" />
            </span>
            <p>
              The apex of what we offer! Anonymous casting and a private casting
              call for people on the mailing list! For Gold Casting Calls we
              will provide feedback for every audition sent in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
