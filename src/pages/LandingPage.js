import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageBackground from '../Components/PageBackground';
import './landingPage.css';
import ContainerTxt23Img13 from '../Components/ContainerTxt23Img13';

const LandingPage = ({ imgURL, bgImage, section1Heading, section1Body }) => {
    return (
        <div className="landing-page">
            <PageBackground imageHeight="100vh" bgImage={bgImage} />
            <div className="landing-page-container">
            <Header />
                <div className="landing-page-content">
                <ContainerTxt23Img13 sectionName="homeSection1" color="blueBG" imgURL={imgURL} sectionHeading={section1Heading} bodyText={section1Body} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;