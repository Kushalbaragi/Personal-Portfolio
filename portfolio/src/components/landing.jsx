import React from "react";
import LandingIcons from "./common/landingIcons";
import hand from '../assets/hand.png';
import resume from '../assets/resume.pdf';
function Landing() {
  return (
    <section className="landing-container">
      <div className="container">
        <div className="landing-subContainer">
          <div className="left-container">
            <div className="subName sub-heading">
              Hey <img src={hand} alt="hand waving"></img>i'm
            </div>
            <h1 className="name">KUSHAL BARAGI</h1>
            <p className="desc body-text">
              a passionate front end Developer and Youtuber based in Bangalore,
              India
            </p>
            <button className="button button-primary">Hire Me</button>
            <a href={resume} download='kushal resume'><button className="button button-secondary">Resume</button></a>
            <LandingIcons />
          </div>
          <div className="right-container">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
