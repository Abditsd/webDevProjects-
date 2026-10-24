import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="hero">
        <div className="badge">Get in Touch</div>
        <h1>Contact <span>Kingswell Care</span></h1>
        <p>For referrals, placements, or general enquiries — our team is ready to help.</p>
      </section>

      {/* CONTACT DETAILS + CTA */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT – Details */}
            <div>
              <p className="section-label">Contact Details</p>
              <h2>Reach Our Team</h2>
              <br />

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@kingswellcareltd.co.uk">info@kingswellcareltd.co.uk</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:07891914947">07891 914 947</a><br />
                  <a href="tel:07932325010">07932 325 010</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>
                    1 Poplars Court, Lenton Lane<br />
                    Nottingham, NG7 2RR
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Monday – Friday: Office hours<br />Out of hours: Email or leave a message</p>
                </div>
              </div>
            </div>

            {/* RIGHT – Quick actions + map */}
            <div>
              <div className="contact-cta-box">
                <p className="section-label">Quick Actions</p>
                <h3>How Can We Help?</h3>
                <p>
                  Whether you're making a referral, enquiring about placements, or have
                  a general question — we're here.
                </p>
                <div className="cta-btns">
                  <a className="btn btn-gold"         href="mailto:info@kingswellcareltd.co.uk">✉️ Email Us</a>
                  <a className="btn btn-navy"         href="tel:07891914947">📞 Call Now</a>
                  <Link className="btn btn-outline-navy" to="/safeguarding">📋 Make a Referral</Link>
                </div>
              </div>

              <div className="map-placeholder">
                <div>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>📍</div>
                  <p>1 Poplars Court, Lenton Lane</p>
                  <span>Nottingham, NG7 2RR</span>
                  <a
                    href="https://maps.google.com/?q=1+Poplars+Court+Lenton+Lane+Nottingham+NG7+2RR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFERRAL CTA */}
      <section className="section section-navy text-center">
        <div className="container">
          <h2>Ready to Make a Referral?</h2>
          <p className="lead" style={{ margin: '0 auto 32px', color: 'rgba(255,255,255,0.8)' }}>
            Our referral process is straightforward and we respond to all enquiries promptly.
          </p>
          <Link to="/safeguarding" className="btn btn-gold">View Referral Process</Link>
        </div>
      </section>
    </main>
  );
}
