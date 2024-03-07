import React from 'react';
import '../App.css';
import '../pages/aboutPage.css';


const TextBox = ({color, label, text}) => {
    return (
        <div className={`text-box ${label} ${color}`}>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

export default TextBox;
