import '../styles/components.css'
import { Link } from 'react-router-dom'
import Logo from './Logo.js'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand-logo"><Logo variant="light" /></div>
            <p>Compassionate home care, supported living and dependable care staffing for families and care organisations across Ireland and the UK.</p>
          </div>

          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/service">Our Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/service#home-care">Home Care Support</Link></li>
              <li><Link to="/service#care-home-staffing">Care Home Staffing</Link></li>
              <li><Link to="/service#supported-living">Supported Living</Link></li>
              <li><Link to="/service#careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <a href="https://wa.me/353899895546" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  +353 89 989 5546 (IE)
                </a>
              </li>
              <li>
                <a href="https://wa.me/447496818734" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  +44 7496 818734 (UK)
                </a>
              </li>
              <li>
                <a href="mailto:info@diidocare.co.ie">
                  <i className="fas fa-envelope"></i>
                  info@diidocare.co.ie
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=77+Camden+Street+Lower,+Dublin,+D02+XE80,+Ireland" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-location-dot"></i>
                  77 Camden Street Lower, Dublin D02 XE80
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} DiidoCare. All rights reserved.</span>
          <span>Care and staffing services · Dublin, Ireland</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
