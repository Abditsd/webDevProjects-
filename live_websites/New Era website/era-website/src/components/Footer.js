import { Link } from 'react-router-dom';
import Brand from './Brand.js';
import { contact } from '../data/company.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Brand label="NEW ERA Investment, home" />
            <p>Minerals, gold and oil &amp; gas investment consultancy, connecting investors and exploration companies with opportunities in Somaliland.</p>
          </div>
          <div>
            <h4>Firm</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4>Expertise</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/sectors">Sectors</Link></li>
              <li><Link to="/contact">Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{contact.director}, {contact.directorTitle}</li>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {contact.whatsapp}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>
                <address>{contact.ukAddress.join(', ')}</address>
              </li>
              <li><Link to="/contact">Book a call</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__base">
          <span>&copy; 2026 NEW ERA Investment. All rights reserved.</span>
          <span>Sheffield, United Kingdom · Hargeisa, Somaliland</span>
        </div>
      </div>
    </footer>
  );
}
