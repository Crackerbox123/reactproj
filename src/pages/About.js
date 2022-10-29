import React from 'react';
import avatar from '../assets/default.jpg';

function About() {
  return (
    <article id='about'>
      <h2>
        Hello, My name is Kalin
      </h2>
      <div>
        <img src={avatar} style={{ width: "250px" }} alt="avatar image"/>
        <p>
            I am a Wisconsin resident who's spent most of his adult life in the contruction and trucking industry, just getting by.

            I'm here today making a React portfolio app.
        <br/>
        </p>
      </div>
    </article>
  )
}

export default About;