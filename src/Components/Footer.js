import React from 'react';
import './footer.css';

const Footer = ({ fixed }) => {
  const footerClass = fixed ? 'footer fixed-footer' : 'footer';
  return (
    <footer>
      <div className={footerClass}>
        <h6>© 2024 Dean Divizio</h6>
      </div>
    </footer>
  );
};

export default Footer;
