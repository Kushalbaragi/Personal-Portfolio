import React from 'react'
import flower from '../../assets/flower.png';
import '../../css/projectCard.scss';
import git from '../../assets/github.png';
import live from '../../assets/livedemo.png'

function ProjectCard() {
  return (
    <div className='projectCard-wrapper'>
        <div className="left-wrapper">
            <img src={flower} alt='project thumbnail'></img>
        </div>
        <div className="right-wrapper">
            <p className="card-title">Rent Me</p>
            <p className="body-text">Lapsum was born from the collaboration between Antonio and Luigi, with the desire to share our ideal of musicality and melodyto share our ideal of musicality and melody to share our ideal of musicality and  </p>
            <div className="built-wrapper">
                <p className="body-text">Built with  |</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="bottom-wrapper">
                <div className='second'><span>Code</span><img src={git} alt='github icon'/></div>
                <div ><span>Live Demo</span><img src={live} alt='live demo icon'/></div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard