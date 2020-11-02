import React from 'react';
import Form from '../components/Form';
import Hero from '../components/Hero';
import '../styles/fonts.css';
import RecentProjects from '../components/RecentProjects';

const Home = () => (
  <React.Fragment>
    <Hero />
    <RecentProjects />
    <div className='container mt-6 mb-6'>
      <h1 className='title is-2 hero_title_body has-text-centered '>
        Get In Touch
      </h1>
      <div className='columns is-justify-content-center pl-4 pr-4 mb-6'>
        <div className='column is-two-thirds'>
          <Form />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Home;
