import React, { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling
import './SiteCard.css'; // Assuming you have a CSS file for styling

const SiteCard = ({ image, title, text }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            {!isFlipped ? (
                <div className="card-front">
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                </div>
            ) : (
                <div className="card-back">
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default SiteCard;

// sites to use: Mine (link to github), ovrtone, midwest podiatry centers, capital podiatry, RPM, bark prod, 