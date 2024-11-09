import React from 'react'

function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">Your Website Name</h2>
          <p className="footer-description">
            Your website’s tagline or a brief description goes here. Describe your mission, vision, or values to connect with your visitors.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@yourwebsite.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 1234 Main St, City, Country</p>
        </div>

        
        

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default footer