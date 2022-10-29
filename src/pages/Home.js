import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is kalin</h2>
        <div className='prompt'>
           <p>a student</p>
           <LinkedInIcon />
           <EmailIcon />
           <GitHubIcon />
        </div>
      </div>
      <div className='skills'></div>
    </div>
  )
}

export default Home