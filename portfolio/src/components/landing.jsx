import React from "react";
import LandingIcons from "./landingIcons";
import hand from "../assets/hand.png";
function Landing() {
  return (
    <section className="container">
      <div className="landing-container">
        <div className="landing-subContainer">
          <div className="left-container">
            <div className="subName sub-heading">
              Hey <img src={hand} alt="hand"></img>i'm
            </div>
            <h1 className="name">KUSHAL BARAGI</h1>
            <p className="desc body-text">
              a passionate front end Developer and Youtuber based in Bangalore,
              India
            </p>
            <button className="button button-primary">Hire Me</button>
            <button className="button button-secondary">Resume</button>
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
