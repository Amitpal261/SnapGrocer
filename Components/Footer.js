// Footer.jsx
import React from "react";
import "./Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MyBrand</h2>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h4>Follow Us</h4>
            <ul className="socials">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} MyBrand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
