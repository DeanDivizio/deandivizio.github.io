import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageBackground from '../Components/PageBackground';
import '../App.css';
import './portfolioPage.css';
import ContainerFullWidthText from '../Components/containerFullWidthText';
import ImageMasonryDisplay from '../Components/ImageMasonryDisplay';

let imageArray = ["https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6946-Edit-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6942-Edit-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_5655-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_5910-scaled.jpg",
    "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6876-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6898-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6606-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6596-Edit-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/IMG_6510-Large.jpeg",
    "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/0P7A1871-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/0P7A1419-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC06894-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC05963-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC03877-Large.jpeg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC03521-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC02829-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC02822-scaled.jpg",
    "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC00194-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC00163-scaled.jpg", "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC03928-Large.jpeg",];

const PortfolioPage = () => {
    return (
        <div>
            <PageBackground imageHeight="400vh" bgImage={"https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/0A3A8297-Large-2.jpeg"} />
            <div className="portfolio-page-container">
                <Header />
                <div className="portfolio-page-content fade-in-2">
                    <ContainerFullWidthText heading={`Video | `} subheading={`<p>My Demo Reel</p>`} color="blueBG" />
                    <div className="video-container" style={{ position: 'relative', paddingBottom: '45%', maxHeight: '65vh', overflow: 'hidden' }}>
                    <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                    src="https://www.youtube.com/embed/qfta1fxUI7Q?si=iCKkEaUoYEOXeUW4?vq=1080" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>

                    </iframe>
                    </div>
                    <ContainerFullWidthText heading={`Photography | `} subheading={`<p>People, Places, and Things</p>`} color="greenBG" />
                    <ImageMasonryDisplay images={imageArray} />
                    <ContainerFullWidthText heading={`Web | `} subheading={`<p>Some Sites I've Designed, Developed, or Helped Maintain</p>`} color="blueBG" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PortfolioPage;
