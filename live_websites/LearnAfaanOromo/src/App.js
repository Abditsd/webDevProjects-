import React, { useEffect } from 'react';
// Global styles load first so page stylesheets can override them
import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import useScrollReveal from './useScrollReveal';

// Start each new page at the top and set up its scroll animations
const RouteEffects = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useScrollReveal(pathname);
  return null;
};

function App() {
  return (
    <Router>
      <RouteEffects />
      <div className="app">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
