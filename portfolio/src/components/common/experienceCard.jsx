import React from "react";
import "../../css/experienceCard.scss";
import flower from "../../assets/flower.png";
import send from "../..//assets/vector.png";

function ExperienceCard() {
  return (
    <div className="experienceCard-wrapper">
      <div className="left-wrapper">
        <img src={flower} alt="project thumbnail"></img>
      </div>
      <div className="right-wrapper">
        <p className="card-title">Rent Me</p>
        <p className="body-text">
          Worked on website for Olay. Olay is the product of P&G brand which
          sells products related to Beauty like facewash, Moisturiser, vitamin-c
          serum etc{" "}
        </p>
        <p className="body-text">
          <strong>Role :</strong> Worked as front end developer and Got exposure to
          UI-development, Github, Azure, GA-GTM Integrationand SEO Optimisation
        </p>
        <button className="button button-primary">
          Live site
          <img src={send} alt="send" />
        </button>
      </div>
    </div>
  );
}

export default ExperienceCard;
