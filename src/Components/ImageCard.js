import React from 'react';

const ImageCard = ({ imageUrl }) => {
    return (
        <div className="imgCard">
            <img src={imageUrl} alt="image" />
        </div>
    );
};

export default ImageCard;