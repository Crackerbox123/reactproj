import React, { useState } from 'react';
import { Validate } from '../utils/validate';

import "../styles/Form.css"

function Contact() {
  const [formState, setFormState] = useState(
    {name: '', email: '', message: ''}
  );

  const [nameErrMsg, setNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [messageErrMsg, setMessageErrMsg] = useState('');

  const { name, email, message } = formState;


  const submitHandler = e => {
    e.preventDefault();
  }





  const handleChange = e => {
      if (e.target.name === 'email') {
        const valid = Validate(e.target.value);
        if (!valid) {
          setEmailErrMsg('The email address is invalid. Please try again.');
        }
        else {
          setEmailErrMsg('');
        }
      }
      else if (e.target.name === 'name' && !e.target.value.length) {
        setNameErrMsg(`A name is required. Please enter a value.`);
      }
      else if (e.target.name === 'message' && !e.target.value.length)  {
        setMessageErrMsg('A message is required. Please enter a value.');
      }
      else {
        setNameErrMsg(''); 
        setEmailErrMsg('');
        setMessageErrMsg('');
      }
    


    if (!nameErrMsg && !emailErrMsg && !messageErrMsg) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };


  
  return (
    <div className='' id='contact'>
      <h2 className='section-title'>Contact </h2>
      <div className='centerform'>
      <form onSubmit={submitHandler}>
        <div >
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' aria-describedby='nameErrMsg' defaultValue={name} onBlur={handleChange} />
          {nameErrMsg && (
            <div id='nameErrMsg' className='form-text'>{nameErrMsg}</div>
          )}
        </div>
        <div >
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='form-control' aria-describedby='emailErrMsg' defaultValue={email} onBlur={handleChange} />
          {emailErrMsg && (
            <div id='emailErrMsg' className='form-text'>{emailErrMsg}</div>
          )}
        </div>
        <div >
          <label htmlFor='message'>Message</label> 
          <textarea name='message' rows='5' className='form-control' aria-describedby='messageErrMsg' defaultValue={message} onBlur={handleChange} />
          {messageErrMsg && (
            <div id='messageErrMsg' className='form-text'>{messageErrMsg}</div>
          )}
        </div>
        <button type='submit' className='pillbox'>Submit</button>
      </form>

      </div>

    </div>
  )
};

export default Contact;