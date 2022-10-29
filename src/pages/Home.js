import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";


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
      <div className='skills'> 
      
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2> Front-end </h2>
          <span> frontend</span>
        </li>
            <li className='item'>
                <h2> Back-End </h2>
                <span> badsss</span>
              </li>
              <li className='item'>
  <h2> Languages </h2>
  <span> k,m</span>
</li> 
      </ol>
      
      </div>
    </div>
  )
}

export default Home