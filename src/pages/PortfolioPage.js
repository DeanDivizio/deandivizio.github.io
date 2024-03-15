import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';
import './portfolioPage.css';
import ContainerFullWidthText from '../Components/containerFullWidthText';
import ImageMasonryDisplay from '../Components/ImageMasonryDisplay';
import SiteCard from '../Components/SiteCard';

let imageArray = ["https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6946-Edit-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6942-Edit-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_5655-scaled.jpg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_5910-scaled.jpg",
    "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6876-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6898-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6606-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6596-Edit-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/IMG_6510-Large.jpeg",
    "https://api.deandivizio.com/wp-content/uploads/2024/02/0P7A1871-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/0P7A1419-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC06894-scaled.jpg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC05963-scaled.jpg", 
    "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC03877-Large.jpeg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC03521-scaled.jpg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC02829-scaled.jpg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC02822-scaled.jpg",
    "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC00194-scaled.jpg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC00163-scaled.jpg", "https://api.deandivizio.com/wp-content/uploads/2024/02/DSC03928-Large.jpeg",];

let repoLink = "https://github.com/DeanDivizio/deandivizio.github.io";
    const PortfolioPage = ({ bgImage }) => {
    return (
        <div className="portfolio-page" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="portfolio-page-container">
                <Header />
                <div className="portfolio-page-content fade-in-2">
                    <ContainerFullWidthText heading={`Video | `} subheading={`<p>My Demo Reel</p>`} color="blueBG" />
                    <div className="video-container" style={{ position: 'relative', paddingBottom: '45%', maxHeight: '65vh', overflow: 'hidden' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/qfta1fxUI7Q?si=iCKkEaUoYEOXeUW4?vq=1080"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <ContainerFullWidthText heading={`Photography | `} subheading={`<p>People, Places, and Things</p>`} color="greenBG" />
                    <ImageMasonryDisplay images={imageArray} />
                    <ContainerFullWidthText heading={`Web | `} subheading={`<p>Some Sites I've Worked On</p>`} color="blueBG" />
                    <div className="site-card-container">
                        <SiteCard image="https://api.deandivizio.com/wp-content/uploads/2024/03/DeanDiviziocom-Screencap.jpg" title="This Site!" text={`Built on React with minimalism in mind, this site is an example of a simple but elegant design, developed with a modern tech stack. <a href=${repoLink}> You can view the code here</a>.`} />
                        <SiteCard image="https://api.deandivizio.com/wp-content/uploads/2024/03/Screenshot-2024-03-13-at-8.59.57 AM-Large.jpeg" title="Capital Podiatry" text={`Originally designed and developed by me, this site is a great example of a modern 'less is more' approach. While no longer maintained by me, enough of my original design is still present to warrant <a href="https://capitalfeet.com">checking it out</a> if you're interested.`} />                   
                        <SiteCard image="https://api.deandivizio.com/wp-content/uploads/2024/03/Screenshot-2024-03-13-at-9.56.33 AM-Large.jpeg" title="RPM" text={`While not built by me, this site is a great example of a site I worked on and updated while maintaining the the original design language perfectly. I don't maintain it anymore, but my work was mostly on images and sign-up pages. <a href="https://rpmattorneys.com/">You can view the site here.</a>`} />
                        
                    </div>
                </div>
                <Footer big />
            </div>
        </div>
    );
}

export default PortfolioPage;
