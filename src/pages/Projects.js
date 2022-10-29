import React from 'react';
import ProjectItem from "../components/ProjectItem";
// import Img

import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects </h1>
      <div className='projectList'>   
        <ProjectItem />

      </div>
    </div>
  )
}

export default Projects;