import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

let landingHeading = "Hey There!";
let landingBodyText = (`
<p>My name’s Dean. I’m a media technology and design professional with a strong focus on video, photography, and web.</p>
<p>In addition to my full-time work, I run a media production company named <a href="http://ovrtonemedia.com">OVRTONE Media Group</a>. Our the goal is to make high-end media solutions accessible to individuals and small businesses throughout Southwest Michigan. </p>
<p>This site is primarily meant to serve as a portfolio and contact card. For business inquiries, please visit <a href="http://ovrtonemedia.com">ovrtonemedia.com</a>. The team and I would love to hear from you! </p>
<p>Take care!</p>
<p>-Dean</p>`);

let aboutHeading = "About Me";
let aboutBodyText = (`
<p><em> I'm a creative engineer that loves solving problems and helping others through the combination of media and technology.</em></p>
<p>I'm not a big fan of one-sentence summaries, but I think that works well.  </p>
<p>I've been interested in technology and various forms of media my entire life. Starting with an interest in music, I've grown to find real passions in photography, video production, graphic design, and most recently - web design and development. </p>
<p>My primary professional goal is to use my skills in these areas to help those around me. Doing what you love, to the benefit of others; what can be better than that?</p>
<p>In case you're interested, I've listed some relevant skills and a more in-depth bio below.</p>`);

let bioImage = "https://ovrtonemedia.com/wp-content/uploads/2024/02/IMG_2529.jpg"; 
let bgImage = "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC03928-Large.jpeg";
let bgImage2 = "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/0A3A8310-scaled.jpg";

let experienceText = (`<h2>Experience Summary</h2>
<p>Raised in the suburbs of Chicago, I was captivated by music from a very young age and started my journey into audio engineering at about 11 years old. 
By the time high school rolled around, my passion had changed into a professional ambition. I was determined to make that a reality.</p>
<p>Immersed in the arts, I spent my formative years honing the skills that would provide the foundation for my professional career. At 17, I decided I wanted to persue those goals further by attending Western Michigan University.</p>
<p>While at WMU, I discovered my passion for video production, leading to the formation of my company, <a href="https://ovrtonemedia.com"> OVRTONE Media Group</a>. 
Throughout my time at WMU and in the years following, my professional career has spanned the fields of live sound reinforcement & recording, video production, photography, marketing, design, web development, and more. 
My opporotunites across these varied fields have not only furthered my skills in those fields, but also served to shape my holistic approach to media and technology. </p>
<p>It's one thing to make great content. It's another to know how to implement it properly. It's an entire other third thing to know how to use these skills to help others and further business goals effectively. I've been fortunate enough to do all three.</p>
<p>Presently, I run OVRTONE with a friend of mine and am seeking my next professional opporitunity, where I hope to be able to put my skills and experience to good use.</p>
<p>Take care,</p>
<p>-Dean</p>`);

 function App() {
   return (
    <Router>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300}>
      <Routes >
        <Route exact path="/" element={<LandingPage section1Body={landingBodyText} section1Heading={landingHeading} imgURL={bioImage} bgImage={bgImage} />} />
        <Route path="/contact" element={<ContactPage bgImage={bgImage}/>} />
        <Route path="/portfolio" element={<PortfolioPage bgImage={bgImage2}/>} />
        <Route path="/about" element={<AboutPage section1Body={aboutBodyText} section1Heading={aboutHeading} imgURL={bioImage} bgImage={bgImage2} div2HeadingText={"Skills |"} div2BodyText={"Separated by Category"} experienceText={experienceText}/>} />
     </Routes>
     </CSSTransition>
     </TransitionGroup>
  </Router>
);
}
export default App;
