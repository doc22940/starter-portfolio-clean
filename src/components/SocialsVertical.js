import React from 'react';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import twitter from 'react-useanimations/lib/twitter';
import instagram from 'react-useanimations/lib/instagram';

const SocialsVertical = () => (
  <React.Fragment>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://github.com/Zidious'>
      <UseAnimations animation={github} size={90} />
    </a>

    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/gabe-olesen-520281106/'>
      <UseAnimations animation={linkedin} size={90} />
    </a>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://twitter.com/gabeolesen'>
      <UseAnimations animation={twitter} size={90} />
    </a>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.instagram.com/gabeolesen/'>
      <UseAnimations animation={instagram} size={90} />
    </a>
  </React.Fragment>
);

export default SocialsVertical;
