import React from "react";
import preffesional from "../assets/proffesional.png";
import Title from "../components/common/title";
import SubTitle from "./common/SubTitle";

function AboutMe() {
  return (
    <div className="container">
      <div className="aboutMe-wrapper">
        <Title title="About Me" />
        <div class="slider"></div>
        <div className="img-wrapper">
          <img src={preffesional} alt="preffesional"></img>
        </div>
        <SubTitle subTitle='Profesional'/>
        <div className="body-text">
          Front end developer working in Mindtree having 2 years of industrial
          expertise in ReactJS. Proficient in big commerce, responsive web
          design & version control systems
        </div>

        <SubTitle subTitle='Tech Stacks'/>
        <div className="stack-wrapper">
            <ul class='stack-1'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul class='stack-2'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
