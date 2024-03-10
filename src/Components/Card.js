import React from 'react';
import './Card.css'; 

function Card({ imageUrl }) {

  return (
    <div className={`card`}>
      <img
        className={`image`}
        src={imageUrl}
        alt="alt"
      />
    </div>
  );
}

export default Card;