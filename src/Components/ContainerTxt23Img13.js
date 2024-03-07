import React from 'react';
import '../App.css';

const ContainerTxt23Img13 = ({ sectionName, imgURL, sectionHeading, bodyText, color }) => {
    return (
        <div className={`txt23Img13 ${sectionName}`}>
            <div className={`text-box ${color}`}>
                <h1>{sectionHeading}</h1>
                <div dangerouslySetInnerHTML={{ __html: bodyText }} />
            </div>
            <div className="featured-image">
                <img src={imgURL} alt="Dean Portrait" />
            </div>
        </div>
    );
};

export default ContainerTxt23Img13;