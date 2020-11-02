import React from 'react';
import '../styles/fonts.css';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSketch,
  faReact,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import gaineys_preview from '../assets/images/gaineys_card_preview.png';
import blocksports_preview from '../assets/images/blocksports_card_preview.png';

const recentProject = 'Recent Projects {';

const gaineysMainTitle = 'Gaineys';
const gaineysLink = 'https://www.gaineyshomeimprovement.com/';
const gaineysLinKInfo = 'View Static Website ↗︎';
const gaineysDescription =
  'Designed using Sketch, built with ReactJS and Bulma CSS and deployed on Netlify.';
const gaineysStack = (
  <>
    <FontAwesomeIcon icon={faSketch} size='2x' color='#fdad00' />
    <FontAwesomeIcon
      icon={faReact}
      size='2x'
      color='#4faadb'
      className='ml-2'
    />
  </>
);

const blocksportsMainTitle = 'Blockchain dApp Competiton: Blocksports';
const blocksportsLink = 'https://github.com/Zidious/Blocksports.io';
const blocksportsLinkInfo = 'View Github ↗︎';
const blocksportsDescription =
  'Blocksports.io is a decentralized application that eliminates the reliance on similar third-party websites and applications that are vulnerable to centralization. It also adds an extra layer of incentivisation that helps spread adoption of the blockchain ecosystem and solves the problem of rigged competitions.';

const blocksportsStack = (
  <>
    <FontAwesomeIcon icon={faSketch} size='2x' color='#fdad00' />
    <FontAwesomeIcon icon={faGithub} size='2x' className='ml-2' />
    <FontAwesomeIcon icon={faFilePdf} size='2x' className='ml-2' />
  </>
);

const RecentProjects = () => (
  <div
    className='section mb-6'
    style={{ backgroundColor: 'rgba(90, 90, 133, 17)' }}>
    <div class='container is-max-desktop'>
      <div className='columns is-vcentered'>
        <div className='column has-text-left mt-4 '>
          <h1 className='title is-4 has-text-white hero_title'>
            {recentProject}
          </h1>
        </div>
      </div>
      <div className='columns mt-5 is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-2-fullhd'>
        <div className='column '>
          <Card
            recentProjectImageMain={gaineys_preview}
            mainTitle={gaineysMainTitle}
            projectLink={gaineysLink}
            linkInfo={gaineysLinKInfo}
            description={gaineysDescription}
            stack={gaineysStack}
          />
        </div>
        <div className='column'>
          <Card
            recentProjectImageMain={blocksports_preview}
            mainTitle={blocksportsMainTitle}
            projectLink={blocksportsLink}
            linkInfo={blocksportsLinkInfo}
            description={blocksportsDescription}
            stack={blocksportsStack}
          />
        </div>
      </div>
    </div>
  </div>
);
export default RecentProjects;
