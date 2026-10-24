import { useState } from 'react';
import { Link } from 'react-router-dom';
import slider1 from '../components/images/slider1.jpg';
import slider2 from '../components/images/slider2.jpg';
import slider3 from '../components/images/slider3.jpg';
import slider4 from '../components/images/slider4.jpg';

const slides = [
  { src: slider1, alt: 'Kingswell supported living apartment' },
  { src: slider2, alt: 'Safe and welcoming shared lounge' },
  { src: slider3, alt: 'Bedroom designed for comfort and independence' },
  { src: slider4, alt: 'Outdoor space for relaxation and growth' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  const nextSlide = () => setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <main>
      <section className="slider-full">
        <div className="image-slider">
          <div className="slider-window">
            {slides.map((slide, index) => (
              <div key={slide.src} className={`slide ${index === activeSlide ? 'active' : ''}`}>
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
          <button className="slider-button prev" onClick={prevSlide} aria-label="Previous slide">‹</button>
          <button className="slider-button next" onClick={nextSlide} aria-label="Next slide">›</button>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="badge">Supported Living Services</div>
        <h1>Welcome to <span>Kingswell</span> Care</h1>
        <p className="tagline">Safe Homes. Strong Futures.</p>
        <p>
          At Kingswell Care, we provide high-quality, person-centred supported living
          services tailored to young people aged 16–18. Our focus is on safety,
          independence, and positive outcomes.
        </p>
        <div className="btn-group centered">
          <Link to="/contact" className="btn btn-gold">Contact Us</Link>
          <Link to="/safeguarding" className="btn btn-outline">Make a Referral</Link>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section section-white">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2>Supporting Young People to Grow &amp; Thrive</h2>
          <p>
            Explore our services and find out how Kingswell Care makes a difference
            in the lives of young people every day.
          </p>

          <div className="quick-links">
            <Link to="/services" className="ql-card">
              <div className="ql-icon">🏠</div>
              <div>
                <h3>Our Services</h3>
                <p>Explore how we support young people to develop independence and reach their potential.</p>
              </div>
            </Link>
            <Link to="/safeguarding" className="ql-card">
              <div className="ql-icon">🛡️</div>
              <div>
                <h3>Safeguarding</h3>
                <p>Learn how we protect and empower every individual in our care.</p>
              </div>
            </Link>
            <Link to="/safeguarding" className="ql-card">
              <div className="ql-icon">📋</div>
              <div>
                <h3>Referrals</h3>
                <p>How to refer a young person and join our supported living programmes.</p>
              </div>
            </Link>
            <Link to="/contact" className="ql-card">
              <div className="ql-icon">✉️</div>
              <div>
                <h3>Contact Us</h3>
                <p>Get in touch with our friendly team today for any enquiry.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section section-white text-center">
        <div className="container">
          <p className="section-label">Our Impact</p>
          <h2>Making a Real Difference</h2>
          <div className="outcomes-strip">
            <div className="outcome-item">
              <div className="num">16–18</div>
              <div className="label">Age Group Supported</div>
            </div>
            <div className="outcome-item">
              <div className="num">24/7</div>
              <div className="label">Round-the-Clock Support</div>
            </div>
            <div className="outcome-item">
              <div className="num">5</div>
              <div className="label">Core Values</div>
            </div>
            <div className="outcome-item">
              <div className="num">KINGS</div>
              <div className="label">Our Support Model</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-navy text-center">
        <div className="container">
          <p className="section-label">Ready to Get Started?</p>
          <h2>Let's Talk About How We Can Help</h2>
          <p style={{ margin: '0 auto 32px' }}>
            Whether you're a local authority, social worker, or family member, we're here
            to support you every step of the way.
          </p>
          <div className="btn-group centered">
            <Link to="/contact" className="btn btn-gold">Contact Us Today</Link>
            <Link to="/about"   className="btn btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
