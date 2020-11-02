import React from 'react';
import Typical from 'react-typical';

const TitleAnimation = () => (
  <Typical
    steps={[
      'design',
      1000,
      'creating',
      1000,
      'drinking a lot of coffee.',
      3000,
    ]}
    loop={Infinity}
  />
);
export default TitleAnimation;
