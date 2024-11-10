import React from 'react'

function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">PriceProphet</h2>
          <p className="footer-description">
<<<<<<< HEAD:src/components/footer.jsx
          Welcome to PriceProphet, your trusted source for cryptocurrency value predictions! Our mission is to empower crypto enthusiasts, investors, and traders by providing reliable insights and projections on the future value of various digital assets.
=======
            Your website's tagline or a brief description goes here. Describe your mission, vision, or values to connect with your visitors.
>>>>>>> cb0a77cc436d8091fa14cf5baeea71d4ff4d93c9:frontend/src/components/footer.jsx
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: saisankar1110@gmail.com</p>
          <p>Phone: +91 9515865264</p>
          <p>Address:IIITM Gwalior, Madhya Pradesh, India</p>
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