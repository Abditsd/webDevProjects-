import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="badge">About Kingswell Care</div>
        <h1>Who <span>We Are</span></h1>
        <p>
          Dedicated to delivering high-quality, person-centred supported living
          that empowers young people to thrive.
        </p>
      </section>

      {/* WHO WE ARE / OUR STORY */}
      <section className="section section-white">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">Our Identity</p>
              <h2>Who We Are</h2>
              <p>
                At Kingswell Care, we provide high-quality, person-centred supported
                living services tailored to the individual needs, preferences, and
                aspirations of each person we support.
              </p>
              <br />
              <p>
                We take a strengths-based approach, empowering individuals to develop
                independence while ensuring the right level of care, support, and risk
                management is in place.
              </p>
            </div>
            <div>
              <p className="section-label">Our Story</p>
              <h2>How We Began</h2>
              <p>
                Kingswell Care was established with a clear vision: to deliver care
                that is not only safe and compliant, but also meaningful, compassionate,
                and outcome-focused.
              </p>
              <br />
              <p>
                From day one, our commitment has been to provide a genuine alternative —
                a home environment where young people feel safe, heard, and supported to
                build their futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section section-white">
        <div className="container">
          <p className="section-label text-center">Our Purpose</p>
          <h2 className="text-center">Mission &amp; Vision</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '32px' }}>
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide person-centred care that promotes independence and positive
                outcomes for every young person we support, through compassionate and
                skilled practice.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be recognised as a trusted provider of supported living services,
                enabling every individual to thrive — whatever their background or
                starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-white">
        <div className="container">
          <p className="section-label">What Guides Us</p>
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-pill"><span>🛡️</span> Safeguarding First</div>
            <div className="value-pill"><span>🤝</span> Respect &amp; Dignity</div>
            <div className="value-pill"><span>💪</span> Empowerment</div>
            <div className="value-pill"><span>⚖️</span> Consistency &amp; Stability</div>
            <div className="value-pill"><span>🔗</span> Partnership Working</div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-navy">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>How We Work</p>
          <h2>Our Approach to Care</h2>
          <div className="two-col" style={{ marginTop: '32px' }}>
            <div>
              <h3>Personalised Support</h3>
              <p>
                We develop strengths-based, personalised support plans for each
                individual — flexible and responsive to their changing needs,
                preferences, and aspirations.
              </p>
              <br />
              <p>
                Our services are designed around the person, not the other way around.
                We adapt as young people grow, evolve, and progress toward independence.
              </p>
            </div>
            <div>
              <h3>Quality &amp; Collaboration</h3>
              <p>
                Our staff receive rigorous training in safeguarding, risk management,
                and therapeutic support approaches. We continuously review and improve
                our practice.
              </p>
              <br />
              <p>
                We work in close partnership with families, professionals, and local
                authorities to ensure every young person receives truly joined-up,
                effective support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white text-center">
        <div className="container">
          <h2>Want to Learn More?</h2>
          <p className="lead" style={{ margin: '0 auto 32px' }}>
            Get in touch with our team today and discover how Kingswell Care can
            support you. For recruitment opportunities, email us directly.
          </p>
          <div className="btn-group centered">
            <Link to="/contact" className="btn btn-navy">Get in Touch</Link>
            <a href="mailto:info@kingswellcareltd.co.uk" className="btn btn-outline-navy">Join Our Team</a>
          </div>
        </div>
      </section>
    </main>
  );
}
