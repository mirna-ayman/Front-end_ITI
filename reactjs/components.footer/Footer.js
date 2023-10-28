import React from 'react';
import theImage from './icons/logo.png';
import './footer_logo.css';

function Footer() {
  return (
    <div className="footer-content">
      <div className="footer_logo">
        <img src={theImage} alt="company logo" />
      </div>
      <p>company name</p>  
    </div>
  );
}

export default Footer;