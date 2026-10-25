import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import ScrollToTop from './ScrollToTop.js';
import useReveal from '../hooks/useReveal.js';

export default function Layout() {
  const mainRef = useRef(null);
  const { pathname } = useLocation();
  useReveal(mainRef, pathname);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main" ref={mainRef} key={pathname} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
