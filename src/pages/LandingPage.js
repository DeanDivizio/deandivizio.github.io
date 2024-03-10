import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './landingPage.css';
import ContainerTxt23Img13 from '../Components/ContainerTxt23Img13';

const LandingPage = ({ imgURL, bgImage, section1Heading, section1Body }) => {
    return (
        <div className="landing-page" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* <PageBackground imageHeight="101vh" bgImage={bgImage} /> */}
            <div className="landing-page-container">
                <Header />
                <div className="landing-page-content fade-in-2">
                    <ContainerTxt23Img13 sectionName="homeSection1" color="blueBG" imgURL={imgURL} sectionHeading={section1Heading} bodyText={section1Body} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;