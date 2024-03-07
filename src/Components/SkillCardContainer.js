import React from 'react';
import '../App.css';
import SkillCard from './SkillCard';

const SkillCardContainer = ({ card1Content, card2Content, card3Content, card4Content }) => {
    return (
        <div className="SkillCardContainer">
            <SkillCard color="greenBG" content={card1Content} />
            <SkillCard color="greenBG" content={card4Content} />
            <SkillCard color="greenBG" content={card2Content} />
            <SkillCard color="greenBG" content={card3Content} />            
        </div>
    )
}

export default SkillCardContainer;
