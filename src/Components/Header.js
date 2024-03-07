import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
     <div className="header-container">
      <div className='float-left'>
        <p><Link to="/">Home</Link></p>
        </div>
        <div className='float-right'>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/portfolio">Portfolio</Link></p>
        <p><Link to="/contact">Contact</Link></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
