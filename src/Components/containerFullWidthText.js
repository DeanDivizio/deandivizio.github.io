import React from 'react';
import '../App.css';

const ContainerFullWidthText = ({ heading, subheading, color, style}) => {
    return (
        <div className={`container-full-width-text ${color}`} style={style}>
            <h2>{heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: subheading}} />
        </div>
    );
};

export default ContainerFullWidthText;
