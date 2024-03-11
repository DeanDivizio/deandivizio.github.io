import React, { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling
import './siteCard.css'; // Assuming you have a CSS file for styling

const SiteCard = ({ image, title, text }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="siteCard greenBG" >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{__html:`<p>${text}</p>`}}/>
        </div>
    );
};

export default SiteCard;

// sites to use: Mine (link to github), ovrtone, midwest podiatry centers, capital podiatry, RPM, bark prod, 