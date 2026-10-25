import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import Logo from './Logo';
import { CONTACT, SOCIAL_LINKS, YOUTUBE_URL } from '../siteConfig';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Afaan Oromo with Abdullah – Home">
              <Logo variant="light" />
            </Link>
            <p>
              Free, easy-to-follow lessons in Afaan Oromo, your gateway to the language and
              culture of the Oromo people.
            </p>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="footer-yt">
              <i className="fab fa-youtube" aria-hidden="true"></i>
              <span>
                <small>Watch on</small>
                YouTube
              </span>
            </a>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p><i className="fas fa-map-marker-alt" aria-hidden="true"></i> {CONTACT.address}</p>
            <p>
              <i className="fas fa-phone" aria-hidden="true"></i>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </p>
            <p>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </div>

          <div className="footer-social">
            <h3>Follow</h3>
            <div className="social-icons">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Afaan Oromo with Abdullah. All rights reserved.</p>
          <p className="footer-motto" lang="om">Afaan keenya, aadaa keenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
