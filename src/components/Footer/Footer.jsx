import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Welcome to Dairy Farm<br /> where we are dedicated to sustainable dairy farming practices.<br />
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            Address: Bihar , Bhagalpur ,813206 <br />
            Phone: +1 234 567 890 <br />
            Email: info@dairyfarm.com
          </p>
        </div>
        
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <p> social media profiles:</p>
          <div className="icon">
            <i className="fa-brands fa-instagram"></i><br />
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Dairy Farm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;