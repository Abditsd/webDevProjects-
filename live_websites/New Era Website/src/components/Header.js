import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from './Brand.js';
import { Arrow } from './Icons.js';
import { navLinks } from '../data/company.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1061px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <Brand />
        <nav aria-label="Primary">
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn" to="/contact">
          Book a Consultation
        </Link>
        <button
          ref={btnRef}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
      <div className="mobile-panel" id="mobile-menu">
        <nav aria-label="Mobile">
          <ol>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>
        <Link className="btn" to="/contact" onClick={() => setOpen(false)}>
          Book a Consultation <Arrow />
        </Link>
      </div>
    </header>
  );
}
