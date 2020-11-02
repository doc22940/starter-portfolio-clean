import React from 'react';
import '../styles/fonts.css';
import gabe_about_me_photo from '../assets/images/gabe_about_me.jpg';

const AboutLayout = () => (
  <div class='columns'>
    <div class='column is-5 has-text-centered ml-4 mr-4'>
      <figure class='image is-3by5'>
        <img src={gabe_about_me_photo} alt='about_me_gabe' />
      </figure>
    </div>
    <div class='column ml-4 mr-4'>
      <div class='block'>
        <h1 className='title is-5 hero_title_body'>
          My name is Gabe Olesen, a student currently studying BSc Computing at
          Oxford Brookes University doing my final year.
        </h1>
      </div>
      <div class='block'>
        <h1 className='title is-5 hero_title_body'>
          I have a passion to design and create ideas that push me to learn
          something new.
        </h1>
      </div>
      <div class='block'>
        <h1 className='title is-5 hero_title_body'>
          One of my hobbies is coffee, learning how to dial in a near-perfect
          espresso is a science.
        </h1>
      </div>
    </div>
  </div>
);
export default AboutLayout;
