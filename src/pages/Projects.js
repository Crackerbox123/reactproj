import React from 'react';
// import individual projects

import ProjectItem from "../components/ProjectItem";
// import project images
import RentalRecap from '../assets/RentalRecap.png'
import Quiz from '../assets/Quiz.png'
import NodeGenny from '../assets/NodeGenny.png'
import WasteNot from '../assets/WasteNot.png'
import Weather from '../assets/Weather.png'
import TeamProfileGenny from '../assets/TeamProfileGenny.png'

import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects </h1>
      <div className='projectList'>   
        <ProjectItem name="Team Profile Generator" image={TeamProfileGenny}/>
        <ProjectItem name="Rental Recap" image={RentalRecap}/>
        <ProjectItem name="Quiz" image={Quiz}/>
        <ProjectItem name="Node Readme Generator" image={NodeGenny}/>
        <ProjectItem name="WasteNot" image={WasteNot}/>
        <ProjectItem name="Weather App" image={Weather}/>
        

      </div>
    </div>
  )
}

export default Projects;