import React from 'react';
import '../styles/styles.css';

const ProjectCard = (props) => (
  <div className='card'>
    <div className='card-image'>
      <figure className='image is-4by3'>
        <img src={props.recentProjectImageMain} alt='Main Project Card' />
      </figure>
    </div>
    <div className='card-content'>
      <div className='media'>
        <div className='media-content'>
          <p className='title is-4'>{props.mainTitle}</p>
          <p className='subtitle is-6'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={props.projectLink}>
              {props.linkInfo}
            </a>
          </p>
        </div>
      </div>
      <div className='content'>{props.description}</div>
    </div>
    <div className='card-footer pt-4 pb-4 pl-4 pr-4'>{props.stack}</div>
  </div>
);

export default ProjectCard;
