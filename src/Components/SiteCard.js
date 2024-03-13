import React from 'react';
import '../App.css'; 
import './siteCard.css'; 

const SiteCard = ({ image, title, text }) => {

    return (
        <div className="siteCard greenBG" >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{__html:`<p>${text}</p>`}}/>
        </div>
    );
};

export default SiteCard;
