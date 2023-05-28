import React from 'react'
import macbokWallpaper from '../assets/macbookwallapaper.png';
import send from '../assets/send.png';

function AboutMe() {
  return (
    <div className="aboutMe-wrapper">
    <div className="leftwrapper">
      <img src={macbokWallpaper} alt="macbook wallpaper" />
    </div>
    <div className="right-wrapper">
     <p className="sub-heading">ABOUT ME</p>
     <p className="body-text">Front end developer working in <strong>Mindtree</strong> having 2 years of industrial expertise in ReactJS. Proficient in big commerce, responsive web design & version control systems </p>
     <p className="body-text">As a part-time <p className='red'>YouTuber</p>, I grew my channel's audience from 0 to 8.5k+ within two years of span. I gained valuable skills in content creation, video editing, social media management, and audience engagement.</p>
     <p className="body-text">I make videos on technology gadgets and share experience with world thought Youtube vides</p>
     <button className='button button-primary'>Checkout Here<img src={send} alt='send'/></button>
     <div className="teckstack-wrapper">
      <h2>TECH STACKS</h2>
      <div className="stacks">
      <p className='subTitle'>Programming language</p>
      <ul>
        <li>BASIC C</li>
        <li>JAVASCRIPT</li>
      </ul>
      </div>
      <div className="stacks">
      <p className='subTitle'>TECHNOLOGIES & FRAMEWORK</p>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SASS/SCSS</li>
        <li>REACTJS</li>
        <li>REDUX</li>
        <li>BOOTSTRAP</li>
        <li>TAILWIND</li>
        <li>DATA STRUCTURES & ALGORITHMS</li>
      </ul>
      </div>
      <div className="stacks">
      <p className='subTitle'>TOOLS</p>
      <ul>
        <li>GITHUB</li>
        <li>AZURE</li>
        <li>FIGMA</li>
        <li>PHOTOSHOP</li>
      </ul>
      </div>


     </div>


    </div>
    </div>
  )
}

export default AboutMe