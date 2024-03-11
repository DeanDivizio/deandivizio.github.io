import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = ({ fixed, big }) => {
  const footerClass = fixed ? 'footer fixed-footer' : 'footer';

  return (
    <footer>
      <div className={footerClass}>
        <h6>© 2024 Dean Divizio</h6>
        {big ? (
          <div className='bottomNav'>
            <h6><Link to="/">Home</Link></h6>
            <h6><Link to="/about">About</Link></h6>
            <h6><Link to="/portfolio">Portfolio</Link></h6>
            <h6><Link to="/contact">Contact</Link></h6>
          </div>
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
