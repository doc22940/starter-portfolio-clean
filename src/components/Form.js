import React from 'react';
import '../styles/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Form = () => (
  <React.Fragment>
    <form
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <input type='hidden' name='form-name' value='contact' />
      <div className='field request-get-in-touch-end'>
        <label className='label'>Name</label>
        <div className='control has-icons-left'>
          <input className='input' type='text' placeholder='Name' name='name' />
          <span className='icon is-small is-left'>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Email</label>
        <div className='control has-icons-left'>
          <input
            className='input'
            type='email'
            placeholder='Email'
            name='email'
          />
          <span className='icon is-small is-left'>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Message</label>
        <div className='control'>
          <textarea
            className='textarea'
            placeholder='Message'
            name='message'></textarea>
        </div>
      </div>

      <div className='field is-grouped is-pulled-right'>
        <div className='control'>
          <button className='button is-medium' type='submit'>
            Submit
          </button>
        </div>
      </div>
    </form>
  </React.Fragment>
);

export default Form;
