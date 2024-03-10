import React from 'react';
import '../App.css';
import '../pages/aboutPage.css';

const ContainerImg13Text23 = ({ color, sectionName, imgURL, sectionHeading, bodyText }) => {
    return (
        <div className={`img13Text23 ${sectionName} fade-in-2`}>
            <div className="featured-image">
                <img src={imgURL} alt="Dean Portrait" />
            </div>
            <div className={`text-box ${color}`}>
                <h1>{sectionHeading}</h1>
                <div dangerouslySetInnerHTML={{ __html: bodyText }} />
            </div>
        </div>
    );
};

export default ContainerImg13Text23;