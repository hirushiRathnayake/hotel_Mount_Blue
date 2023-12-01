import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Styles/Footer.css';
import footer from '../Assets/footer.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        <img src={footer} alt="Footer Background" />
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About us</h4>
          <p>Our Hotel Brands</p>
          <p>Mount-Blue Centre</p>
          <p>Rooms</p>
          <p>Foods</p>
          <p>Restaurant</p>
          <p>Events</p>
          <p>Prices</p>
          <p>Security</p>
        </div>
        <div className="footer-section">
          <h4>Get In Touch</h4>
          <p>Dehiwala Branch</p>
          <p>Galkissa Branch</p>
          <p>Kandy Branch</p>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p><FacebookIcon /></p>
          <p><TwitterIcon /></p>
          <p><LinkedInIcon /></p>
          <p><YouTubeIcon /></p>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2023 Your Hotel Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
