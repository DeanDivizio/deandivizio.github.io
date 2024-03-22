import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContainerImg13Text23 from '../Components/containerImg13Text23';
import '../App.css';
import './aboutPage.css';
import ContainerFullWidthText from '../Components/containerFullWidthText';
import SkillCardContainer from '../Components/SkillCardContainer';
import TextBox from '../Components/textBox';

let card1Content = (`<h3>Creative</h3>
<p>Composition</p>
<p>UI & UX Design</p>
<p>Color Theory</p>
<p>Typography</p>
<p>Branding</p>
<p>Visual Storytelling</p>`);

let card2Content = (`<h3>Technical</h3>
<p>HTML, CSS, JavaScript</p>
<p>React</p>
<p>WordPress</p>
<p>Google Analytics</p>
<p>Generative AI</p>
<p>APIs</p>`);

let card3Content = (`<h3>Logistic</h3>
<p>Microsoft 365</p>
<p>Google Workspace</p>
<p>The Adobe Suite</p>
<p>Davinci Resolve</p>
<p>Figma</p>
<p>MacOS, Windows, Linux</p>`);

let card4Content = (`<h3>Media</h3>
<p>Video Production</p>
<p>Photography</p>
<p>Color Correction & Grading</p>
<p>3D Rendering</p>
<p>Basic Animation</p>
<p>Audio Engineering</p>`);


const AboutPage = ({ isVisible, imgURL, bgImage, section1Heading, section1Body, div2HeadingText, div2BodyText, experienceText }) => {

    return (
        <div className="about-page" style={{ backgroundImage: `url(${bgImage})` }}>
            <div animate={{ opacity: isVisible ? 0 : 1 }} className="about-page-container">
                <Header />
                <ContainerImg13Text23 color="redBG" sectionName="aboutSection1" sectionHeading={section1Heading} bodyText={section1Body} />
                <div className="about-section-2 fade-in-2">
                    <div className="about-skills">
                        <ContainerFullWidthText color="blueBG" heading={div2HeadingText} subheading={` <p> ${div2BodyText} </p>`} />
                        <SkillCardContainer card1Content={card1Content} card2Content={card2Content} card3Content={card3Content} card4Content={card4Content} />
                    </div>
                    <TextBox label="experienceBox" color="redBG" text={experienceText} />
                </div>
                <Footer big />
            </div>

        </div >
    );
};

export default AboutPage;