import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

let placeholderHeading = "Hey There!";
let placeholderBodyText = (`
<p>My name’s Dean (as you can probably guess). I’m a media technology and design professional with a strong focus on video, photography, and web.</p>
<p>In addition to my full-time work, I run a media production company named <a href="http://ovrtonemedia.com">OVRTONE Media Group</a>. Our the goal is to make high-end media solutions accessible to individuals and small businesses throughout Southwest Michigan. </p>
<p>This site is primarily meant to serve as a portfolio and contact card. For business inquiries, please visit <a href="http://ovrtonemedia.com">ovrtonemedia.com</a>. The team and I would love to hear from you! </p>
<p>Take care!</p>
<p>-Dean</p>`);
let bioImage = "https://ovrtonemedia.com/wp-content/uploads/2024/02/IMG_2529.jpg"; 
let bgImage = "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/DSC03928-Large.jpeg";
let bgImage2 = "https://deandiviziodev.wpengine.com/wp-content/uploads/2024/02/0A3A8310-scaled.jpg";

let experienceText = (`<h2>Experience Summary</h2>
<p>This is the first paragraph. About pre-western </p>
<p>Second paragraph. Talk about western, "marketing company", developing OVRTONE</p>
<p>Third Paragraph. Doing OVRTONE. Seeking fulltime employment</p>`);


 function App() {
   return (
    <Router>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300}>
      <Routes >
        <Route exact path="/" element={<LandingPage section1Body={placeholderBodyText} section1Heading={placeholderHeading} imgURL={bioImage} bgImage={bgImage} />} />
        <Route path="/contact" element={<ContactPage bgImage={bgImage}/>} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage section1Body={placeholderBodyText} section1Heading={placeholderHeading} imgURL={bioImage} bgImage={bgImage2} div2HeadingText={"Skills |"} div2BodyText={"Separated by Category"} experienceText={experienceText}/>} />
     </Routes>
     </CSSTransition>
     </TransitionGroup>
  </Router>
);
}
export default App;
