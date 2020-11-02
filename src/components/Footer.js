import React from 'react';
import '../styles/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSketch, faReact } from '@fortawesome/free-brands-svg-icons';
const Footer = () => (
  <footer className='footer pb-3' style={{ backgroundColor: 'transparent' }}>
    <div className='content has-text-centered'>
      <p>
        <strong className='pb-0 pt-0 hero_title'>© Gabe Olesen</strong>
      </p>
      <p className='pb-0 hero_title'>
        Designed with{' '}
        <FontAwesomeIcon icon={faSketch} size='1x' color='#fdad00' /> Built with
        <FontAwesomeIcon
          icon={faReact}
          size='1x'
          color='#4faadb'
          className='ml-2'
        />
      </p>
    </div>
  </footer>
);
export default Footer;
