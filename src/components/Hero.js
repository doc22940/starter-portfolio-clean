import React from 'react';
import '../styles/fonts.css';
import '../styles/styles.css';
import avatar from '../assets/images/gabe_avatar.png';
import SocialsVertical from './SocialsVertical';
import TitleAnimation from './TitleAnimation';

const title = 'Hi there {';
const titleEnd = '};';

const Hero = () => (
  <React.Fragment>
    <section className='hero is-fullheight-with-navbar'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered is-justify-content-center-is-mobile'>
            <div className='column is-5'>
              <h1 className='subtitle is-3 hero_title'>{title}</h1>
              <h1 className='title is-1 hero_title_body mt-1'>
                I am passionate about <TitleAnimation />
              </h1>
              <h1 className='subtitle is-3 hero_title mt-1'>{titleEnd}</h1>
            </div>
            <div className='column is-5'>
              <figure className='image'>
                <img src={avatar} alt='gabe_avatar' className='avatar_style' />
              </figure>
            </div>
            <div className='column is-1 mr-5 is-flex-mobile is-justify-content-center-is-mobile'>
              <SocialsVertical />
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
export default Hero;
