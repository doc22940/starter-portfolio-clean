import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTop = () => (
  <React.Fragment>
    <ScrollToTop showUnder={160} duration={500}>
      <FontAwesomeIcon icon={faArrowUp} size='2x' />
    </ScrollToTop>
  </React.Fragment>
);
export default ScrollTop;
