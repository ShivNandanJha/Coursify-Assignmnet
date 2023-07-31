  // components/Footer.js

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          {/* Add other contact details */}
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#job-seekers">For Job Seekers</a></li>
            <li><a href="#companies">For Companies</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          {/* Add other relevant links */}
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
          {/* Add other social media links */}
        </div>
        <div className="footer-section">
          <h3>Subscribe to Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
