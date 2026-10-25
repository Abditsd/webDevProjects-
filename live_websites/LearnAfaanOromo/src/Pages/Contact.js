import React, { useState } from 'react';
import '../assets/css/Contact.css';
import { CONTACT, SOCIAL_LINKS } from '../siteConfig';
import usePageTitle from '../usePageTitle';
import PageHeader from '../Components/PageHeader';

const emptyForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  usePageTitle('Contact');
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // There is no backend, so hand the message to the visitor's email app
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <div className="contact-page">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Questions about lessons, tutoring or anything else? I'd love to hear from you."
      />

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in touch</h2>
              <p className="contact-intro">Reach out directly, or send a message using the form.</p>
              <div className="contact-details">
                <div className="contact-item card">
                  <div className="icon-chip">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>{CONTACT.address}</p>
                  </div>
                </div>
                <div className="contact-item card">
                  <div className="icon-chip">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Telephone</h3>
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
                  </div>
                </div>
                <div className="contact-item card">
                  <div className="icon-chip">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email Address</h3>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>
              </div>
              <div className="social-links">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <i className={social.icon} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form card">
              <h2>Send a message</h2>
              {sent && (
                <p className="form-notice" role="status">
                  <i className="fas fa-check-circle" aria-hidden="true"></i> Your email app should now be open with
                  your message ready to send. If it didn't open, email us directly at{' '}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="form-control" autoComplete="name"
                      value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" className="form-control" autoComplete="email"
                      value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" className="form-control"
                    value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" className="form-control" rows="5"
                    value={form.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  <i className="fas fa-paper-plane" aria-hidden="true"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Location</span>
            <h2>Based in Sheffield</h2>
          </div>
          <div className="map-container">
            <iframe
              title="Map of Sheffield, United Kingdom"
              src="https://maps.google.com/maps?q=Sheffield%2C%20United%20Kingdom&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
