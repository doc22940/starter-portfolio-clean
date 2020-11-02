import React from 'react';
import Typical from 'react-typical';

const TitleAnimation = () => (
  <Typical
    steps={['design', 1000, 'creating', 1000, 'coffee.', 3000]}
    loop={Infinity}
  />
);
export default TitleAnimation;
