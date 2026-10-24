import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './images/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <Link to="/" className="logo">
          <img src={logo} alt="Kingswell Care Logo" className="logo-image" />
        </Link>

        <nav className="site-nav desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/safeguarding">Safeguarding</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/safeguarding" className="nav-cta">Make a Referral</NavLink>
        </nav>

        <button
          className={"hamburger" + (menuOpen ? " open" : "")}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={"mobile-overlay" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(false)} />
      <nav className={"mobile-nav" + (menuOpen ? " open" : "")}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/safeguarding">Safeguarding</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/safeguarding" className="mobile-cta">Make a Referral</NavLink>
      </nav>
    </>
  );
}
