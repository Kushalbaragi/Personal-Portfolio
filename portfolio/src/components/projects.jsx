import React, { useState } from 'react'
import Title from './common/title';
import '../css/projects.scss';
import Personal from './common/personal';
import Experience from './common/experience';


function Projects() {
  let [pers, setPers]=useState(true);
  let[exp,setExp]=useState(false);
  let [load, setLoad]=useState(true);

  function perosnalHandler(){
    setExp(false);
    setPers(true);
    setLoad(true);
  }
  function expHandler(){
    setExp(true);
    setPers(false);
    setLoad(false);
  }
  return (
    <section className="project-wrapper">
    <div className="container">
      <p className="sub-heading">PROJECTS</p>
      <div className="switch-wrapper">
        <div className="switch">
          <span className={`personal ${pers ? 'active' : ''}`} onClick={perosnalHandler}>Personal</span>
          <span className={`experience ${exp ? 'active' : ''}`} onClick={expHandler}>Experience</span>
        </div>
        <div className="project-card-wrapper">
          {
            load ? <Personal/>  : <Experience/>
          }
        </div>
      </div>
      </div>
      </section>
  )
}

export default Projects;