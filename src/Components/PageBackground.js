import React from 'react';
import './pageBackground.css';

const PageBackground = ({ imageHeight, bgImage }) => {
  return (
    <div className="pageBackground">
      <img src={bgImage} style={{minWidth:"100vw", minHeight:imageHeight}} alt='background' />
    </div>
  );
};

export default PageBackground;
