import React from 'react';
import '../App.css';

const SkillCard = ({ color, content }) => {
    return (
        <div className={`skill-card ${color}`}>
            <div dangerouslySetInnerHTML={{ __html: content}} />
        </div>
    );
};

export default SkillCard;
