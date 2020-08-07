import React from "react";
import "./script";
import esi from "./images/projects/rsz_esi-laptop.png";
import nwisi from "./images/projects/North West Investments Security Inc.png";
import tr from "./images/projects/true-radiance.png";
import nders from "./images/projects/Nders.png";

const Content = () => {
  return (
    <div className="container content">
      <div className="row about-me-content" id="about-me">
        <div className="col-md-12">
          <div className="heading">
            Some Words About Me
            <hr style={{ backgroundColor: "#000000" }} />
          </div>
        </div>
        <div className="col-md-6 mt-3 content">
          I am Devon Wintz, a Full Stack Web Developer and UI/UX enthusiast from
          Georgetown, Guyana. I create custom websites to help businesses and
          individuals do better online. I primarily use JavaScript and its
          associated libriaries and frameworks (both frontend & backend) such as
          Vue, React, Express, but picking up a new framework or language is not
          a problem.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Goal: </span>
          <span>
            To help start-ups, small businesses and individuals achieve high
            quality websites and expectional user experience.
          </span>
          <br />
          <button className="btn mt-5" style={{ borderColor: "#1c2331" }}>
            <a
              href="https://drive.google.com/file/d/1R0YeP2WiEFDYXr96UqSCSQVrzQfQ6u5h/view?usp=sharing"
              download
            >
              Download CV
            </a>
          </button>
        </div>
        <div className="col-md-6 about-me-progress mt-3">
          <div className="skills mt-4">
            Skills
            <hr style={{ backgroundColor: "#000000" }} />
          </div>
          <span>HTML</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "90%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>

          <span>CSS</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "85%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>

          <span>JavaScript</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "80%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>

          <span>CMS: WordPress, Drupal, Joomla</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "70%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
          <span>PhotoShop</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "50%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
      </div>

      <div className="row latest-work" id="my-work">
        <div className="col-md-12 mt-4">
          <div className="heading">
            My Work
            <hr style={{ backgroundColor: "#000000" }} />
          </div>
        </div>
        <a href="/#" className="col-md-4 sub-heading link">
          All
        </a>
        <a href="/#" className="col-md-4 sub-heading link">
          Websites
        </a>
        <a href="/#" className="col-md-4 sub-heading link">
          Flyers & Business Cards
        </a>

        <div className="row latest-work-img mt-5">
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <figure>
              <img src={esi} alt="esi-screen-of-website" width="80%" />
              <figcaption>Eco-solutions Furniture Inc.</figcaption>
            </figure>
          </div>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <figure>
              <img src={nwisi} alt="nwisi-flyer" width="80%" />
              <figcaption>North West Investments Security Inc.</figcaption>
            </figure>
          </div>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <figure>
              <img src={tr} alt="tr-business-card" width="80%" />
              <figcaption>True Radiance: Makeup Artist</figcaption>
            </figure>
          </div>

          <div className="col-md-6" style={{ textAlign: "center" }}>
            <figure>
              <img src={nders} alt="nders-logo" width="80%" />
              <figcaption>NDERS</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
