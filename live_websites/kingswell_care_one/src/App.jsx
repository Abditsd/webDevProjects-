import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect }  from 'react';
import Header          from './components/Header';
import Footer          from './components/Footer';
import Home            from './pages/Home';
import About           from './pages/About';
import Services        from './pages/Services';
import Safeguarding    from './pages/Safeguarding';
import Contact         from './pages/Contact';
import './styles/global.css';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div style={{ paddingTop: '72px' }}>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/about"         element={<About />} />
          <Route path="/services"      element={<Services />} />
          <Route path="/safeguarding"  element={<Safeguarding />} />
          <Route path="/contact"       element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
