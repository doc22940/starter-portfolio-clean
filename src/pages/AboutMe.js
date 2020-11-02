import React from 'react';
import AboutLayout from '../components/AboutLayout';

const aboutMe = '{ About Me: 👋 }';
const AboutMe = () => (
  <React.Fragment>
    <div className='container is-max-desktop'>
      <h1 className='title is-4  hero_title ml-4'>{aboutMe}</h1>
      <AboutLayout />
    </div>
  </React.Fragment>
);

export default AboutMe;
