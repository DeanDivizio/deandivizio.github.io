import React, { useState } from 'react';
import './Card.css'; // Import your CSS file

function Card({ imageUrl }) {

  return (
    <div className={`card`}>
      <img
        className={`image`}
        // style={{ width: '100%' }}
        src={imageUrl}
        alt="alt"
      />
    </div>
  );
}

export default Card;