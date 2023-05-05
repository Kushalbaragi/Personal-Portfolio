import React from "react";
import youtube from '../assets/youtube 1.png';
import linkedIn from '../assets/linkedin 1.png';
import github from '../assets/github 1.png';

function LandingIcons(){
    return(
        <div className="landing-icon-container">
        <ul>
          <li>
            <img src={youtube} alt="youtube"></img>
          </li>
          <li>  <img src={linkedIn} alt="linkedIn"></img></li>
          <li>  <img src={github} alt="github"></img></li>
        </ul>
      </div>
    )
}
export default LandingIcons;