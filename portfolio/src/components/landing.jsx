import React from "react";
import linkedIn from '../assets/ln.png';
import github from '../assets/git.png';
import youtube from '../assets/yt.png';
import hand from '../assets/hand.png';
import download from '../assets/download.svg';
import send from '../assets/vector.png'

function Landing() {
  return (
    <section className="landing-container">
      <div className="container">
        <div className="landing-subContainer">
          <div className="left-container">
            <div className="subName">
              Hey <img src={hand} alt="hand waving"></img>i'm
            </div>
            <h1 className="name">KUSHAL BARAGI</h1>
            <p className="desc body-text">
              a passionate front end Developer and Youtuber based in Bangalore,
              India
            </p>
            <button className="button button-primary">Hire Me<img src={send} alt='send'/></button>
            <button className="button button-secondary">Resume<img src={download} alt='send'/></button>
            <div className='icon-wrapper'>
              <a href='https://www.linkedin.com/in/kushal-baragi-3ba188186'><img src={linkedIn} alt='linkedIn'/></a>
              <a href='https://github.com/Kushalbaragi'><img src={github} alt='github'/></a>
              <a href='https://www.youtube.com/@KushalBaragi'><img src={youtube} alt='youtube'/></a>
            </div>
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
