import React from "react";
import Title from "./common/title";
import "../css/experience.scss";

function Experience() {
  return (
    <section className="experience-wrapper">
      <div className="container">
        <p className="sub-heading">EXPERIENCE</p>
        <h2>2+ year experienced Front end developer</h2>
        <ul>
          <li>
            Joined <strong>Mindtree</strong>, a service based MNC in Bangalore
            as campus mind in april 30 2021
          </li>
          <li>
            Trained on MERN Stack development on campus training for 3 months
          </li>
          <li>
            Worked as Big Commerce developer for P&G Client and got ‘Spot on
            Award” for successfully delivering the project on time.
          </li>
          <li>
            Worked as front end developer for{" "}
            <strong>3 development project for P&G client</strong> which are
            e-commerce and are live on internet now.
          </li>
          <li>
            Took major role in UI development(SCSS) , SEO Optimisation, GAGTM
            Integration, Performance improvement, third party integration, Rest
            API, Email templates, Responsive design, CI/CD Deployment for Azure,
            Github.
          </li>
        </ul>
        <a href="#">Detail Project Experience</a>
        <h2>ACHIEVEMENTS</h2>
        <ul className='achievements'>
          <li>
            Gained 8.5k+ subscribers on <span className="red">Youtube</span> ,
            making videos on technology since 2020
          </li>
          <li>
            Participated in final round of 16 people out of 97 in
            Hack2Future(Mindtree internal Hackathon)
          </li>
          <li>
            Got <strong>'Spot on coder'</strong> Reward in Mindtree for
            consistent two years
          </li>
          <li>
            Completed <strong>'30 days Javascript Challenge"</strong> conducted
            by leetcode
          </li>
          <li>HTML,CSS & Javascript - Certification' from HackerRank</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
