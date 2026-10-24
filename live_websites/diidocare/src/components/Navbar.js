import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/components.css'
import Logo from './Logo.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/service', label: 'Services' },
  { to: '/contact', label: 'Contact' }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="DiidoCare home">
          <Logo />
        </Link>

        <button
          type="button"
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="main-menu" className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <li key={link.to} className="nav-item">
              <NavLink to={link.to} end className="nav-link">
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-item nav-item-cta">
            <Link to="/contact" className="btn btn-primary nav-cta">
              <i className="fas fa-phone"></i>
              Request Care
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
