import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Service from './pages/Service.js'
import Contact from './pages/Contact.js'
import './styles/index.css'

// Scroll to the top on page change, or to the #section when the link has one
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

// Fade content in as it scrolls into view
const REVEAL_SELECTOR = '.section-head, .card, .service-card, .audience-card, .step, .split-media, .split-body, .mvv-card, .value-tile, .trust-item'

function RevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Also reveal anything already scrolled past (e.g. after a fast scroll or #link jump)
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          const el = entry.target
          el.classList.add('revealed')
          observer.unobserve(el)
          // Hand back to the element's own transitions (e.g. card hover) once done
          setTimeout(() => {
            el.classList.remove('reveal', 'revealed')
            el.style.transitionDelay = ''
          }, 1100)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      // Stagger siblings in the same grid slightly
      const index = Array.prototype.indexOf.call(el.parentElement.children, el)
      el.style.transitionDelay = `${Math.min(index, 4) * 80}ms`
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <RevealOnScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <a
        href="https://wa.me/353899895546"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DiidoCare on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </BrowserRouter>
  )
}

export default App
