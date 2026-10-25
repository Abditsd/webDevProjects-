import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';
import Logo from './Logo';
import { YOUTUBE_URL } from '../siteConfig';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Tighten the bar and add a shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="container navbar-container">
        <Link to="/" className="logo" aria-label="Afaan Oromo with Abdullah – Home">
          <Logo />
        </Link>

        <button
          type="button"
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
        </button>

        <ul id="primary-nav" className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
              <i className="fab fa-youtube" aria-hidden="true"></i> Watch Lessons
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
