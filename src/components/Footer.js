import React, { useState } from 'react';
import './styles/Footer.css';

const Footer = () => {
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <div className="footer-container">
      <i className="flower divider-flower" />
      <div className="sub-footer-container">
      {phoneNumberVisible && (
              <div className="tooltip">+972 050-216-3020</div>
            )}
      {emailVisible && (
              <div className="tooltip">dekelmaz09@gmail.com</div>
            )}
        <div className="footer-title">
          <h1 className="footer-item-text">get in touch ! 💌</h1>
        </div>

        <div className="footer-items">
          <div
            className="footer-item footer-item-1"
            onMouseEnter={() => setPhoneNumberVisible(true)}
            onMouseLeave={() => setPhoneNumberVisible(false)}
          >
            <a rel="noreferrer" target="_blank" className='footer-link' href = "tel:+9720502163020">
            <h1 className="footer-item-text">phone</h1></a>

          </div>
          <span>/</span>
          <div className='footer-item footer-item-2' >
            <a rel="noreferrer" target="_blank" className='footer-link' href = "https://www.linkedin.com/in/dekelm/">
            <h1 className='footer-item-text'>linkedin</h1></a>
            </div>
            <span>/</span>
          <div
            className="footer-item footer-item-3"
            onMouseEnter={() => setEmailVisible(true)}
            onMouseLeave={() => setEmailVisible(false)}
          >
            <a rel="noreferrer" target="_blank" className='footer-link' href = "mailto: dekelmaz09@gmail.com">
            <h1 className="footer-item-text">email</h1></a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
