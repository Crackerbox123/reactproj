import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, This is my React Portfolio</h2>
        <h3> Please Click the buttons above and below to navigate</h3>
        <div className='prompt'>
           <LinkedInIcon />
           <EmailIcon />
           <GitHubIcon />
        </div>
      </div>

    </div>
  )
}

export default Home