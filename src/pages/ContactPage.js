import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './contact.css';
import ContainerFullWidthText from '../Components/containerFullWidthText';

const ContactPage = ({bgImage}) => {
    return (
        <div className="contact-page" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className= "contact-page-container">
            <Header />
                <div className="contact-page-content fade-in-2">
                <ContainerFullWidthText heading={`Contact Me `} subheading={`<p>If you have any questions or would like to get in touch, please feel free to email me at
                        <span className="email"> <a href="mailto:contact@deandivizio.com"> contact@deandivizio.com</a></span></p>`} color="blueBG" style={{display:'block', padding:'2rem'}}/>
                </div>
                <Footer fixed />
            </div>   
        </div>
    );
}

export default ContactPage;
