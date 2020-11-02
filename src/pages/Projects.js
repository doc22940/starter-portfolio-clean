import React from 'react';
import '../styles/fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSketch,
  faReact,
  faGithub,
  faPython,
  faApple,
  faJava,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import gaineys_preview from '../assets/images/gaineys_card_preview.png';
import blocksports_preview from '../assets/images/blocksports_card_preview.png';
import first_portfolio from '../assets/images/first_portfolio_card_preview.png';
import btt_preview from '../assets/images/btt_card_preview.png';
import travalabot_preview from '../assets/images/travalabot_card_preview.png';
import Card from '../components/Card';

const recentProject = 'Projects {';

const projectRowOne = [
  {
    image: gaineys_preview,
    mainTitle: 'Gaineys',
    link: 'https://www.gaineyshomeimprovement.com/',
    linkInfo: 'View Static Website ↗︎',
    description:
      'Designed using Sketch, built with ReactJS and Bulma CSS and deployed on Netlify.',
    stack: (
      <>
        <FontAwesomeIcon icon={faSketch} size='2x' color='#fdad00' />
        <FontAwesomeIcon
          icon={faReact}
          size='2x'
          color='#4faadb'
          className='ml-2'
        />
      </>
    ),
  },
  {
    image: blocksports_preview,
    mainTitle: 'Blockchain dApp Competiton: Blocksports',
    link: 'https://github.com/Zidious/Blocksports.io',
    linkInfo: 'View Github ↗︎',
    description:
      'Blocksports.io is a decentralized application that eliminates the reliance on similar third-party websites and applications that are vulnerable to centralization. It also adds an extra layer of incentivisation that helps spread adoption of the blockchain ecosystem and solves the problem of rigged competitions.',
    stack: (
      <>
        <FontAwesomeIcon icon={faSketch} size='2x' color='#fdad00' />
        <FontAwesomeIcon icon={faGithub} size='2x' className='ml-2' />
        <FontAwesomeIcon icon={faFilePdf} size='2x' className='ml-2' />
      </>
    ),
  },
  {
    image: btt_preview,
    mainTitle: 'TouchBar Buttons via BetterTouchTool',
    link: 'https://github.com/Zidious/BTT-TouchBarScript',
    linkInfo: 'View Github ↗︎',
    description:
      'Created Python scripts to pull data from CoinGeckos CryptoCurrency API utilised in BetterTouchTool(BTT)',
    stack: (
      <>
        <FontAwesomeIcon icon={faApple} size='2x' />
        <FontAwesomeIcon icon={faGithub} size='2x' className='ml-2' />
        <FontAwesomeIcon icon={faPython} size='2x' className='ml-2' />
      </>
    ),
  },
].map((project, index) => {
  return (
    <div className='column'>
      <Card
        key={`${project.mainTitle}`}
        recentProjectImageMain={project.image}
        mainTitle={project.mainTitle}
        projectLink={project.link}
        linkInfo={project.linkInfo}
        description={project.description}
        stack={project.stack}
      />
    </div>
  );
});

const projectRowTwo = [
  {
    image: first_portfolio,
    mainTitle: 'My Portfolio V1',
    link: 'https://github.com/Zidious/my-first-portfolio',
    linkInfo: 'View Github ↗︎',
    description:
      'Designed using Sketch, built with ReactJS and Tailwind CSS and deployed on Netlify.',
    stack: (
      <>
        <FontAwesomeIcon icon={faSketch} size='2x' color='#fdad00' />
        <FontAwesomeIcon
          icon={faReact}
          size='2x'
          color='#4faadb'
          className='ml-2'
        />
        <FontAwesomeIcon icon={faGithub} size='2x' className='ml-2' />
      </>
    ),
  },
  {
    image: travalabot_preview,
    mainTitle: 'Telegram BOT for Travala.com',
    link: 'https://t.me/travala',
    linkInfo: 'View on Telegram ↗︎',
    description:
      'A Telegram BOT built in Java hosted on my RaspberryPi. Code is private due to private information. The BOT has custom commands, a custom Poll generator with like and dislike feature as well as integrating Twitter API to post Travala.com tweets in real time',
    stack: (
      <>
        <FontAwesomeIcon icon={faGithub} size='2x' className='ml-2' />
        <FontAwesomeIcon icon={faJava} size='2x' className='ml-2' />
        <FontAwesomeIcon icon={faTelegram} size='2x' className='ml-2' />
      </>
    ),
  },
].map((project, index) => {
  return (
    <div className='column'>
      <Card
        key={`${project.mainTitle}`}
        recentProjectImageMain={project.image}
        mainTitle={project.mainTitle}
        projectLink={project.link}
        linkInfo={project.linkInfo}
        description={project.description}
        stack={project.stack}
      />
    </div>
  );
});

const Projects = () => (
  <React.Fragment>
    <div className='container pt-3'>
      <h1 className='title is-4  hero_title ml-4'>{recentProject}</h1>
      <div className='columns is-variable is-1-mobile is-3-tablet is-3-desktop is-8-widescreen is-2-fullhd mt-6 ml-4 mr-4'>
        {projectRowOne}
      </div>
      <div className='columns is-variable is-1-mobile is-3-tablet is-3-desktop is-8-widescreen is-2-fullhd mt-6 ml-4 mr-4'>
        {projectRowTwo}
      </div>
    </div>
  </React.Fragment>
);
export default Projects;
