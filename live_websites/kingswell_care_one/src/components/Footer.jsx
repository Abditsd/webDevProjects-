import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Kingswell <span>Care</span></div>
      <p>Kingswell Care – High-quality, person-centred supported living for young people aged 16–18.</p>

      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/safeguarding">Safeguarding &amp; Referrals</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="footer-divider" />

      <p className="footer-info">
        📍 1 Poplars Court, Lenton Lane, Nottingham, NG7 2RR &nbsp;|&nbsp;
        ✉️ info@kingswellcareltd.co.uk &nbsp;|&nbsp;
        📞 07891 914 947
      </p>
      <p className="footer-copy">© {new Date().getFullYear()} Kyngswell Care Ltd. All rights reserved.</p>
    </footer>
  );
}
