import { useState } from 'react'
import '../styles/pages.css'
import heroImg from '../assets/images/photos/carer-laughing.jpg'

const EMAIL = 'info@diidocare.co.ie'

const subjects = {
  'care-services': 'Care Services Enquiry',
  'home-care': 'Home Care Services',
  'staffing': 'Staffing for my Organisation',
  'supported-living': 'Supported Living',
  'job-inquiry': 'Job Enquiry / Registration',
  'general': 'General Enquiry'
}

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' }

function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const contactMethods = [
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp (Ireland)',
      content: '+353 89 989 5546',
      link: 'https://wa.me/353899895546',
      details: 'Monday–Friday, 9am–6pm',
      external: true
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp (UK)',
      content: '+44 7496 818734',
      link: 'https://wa.me/447496818734',
      details: 'Available for urgent enquiries',
      external: true
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: EMAIL,
      link: `mailto:${EMAIL}`,
      details: 'We reply within 24 hours'
    },
    {
      icon: 'fas fa-location-dot',
      title: 'Office',
      content: '77 Camden Street Lower, Dublin D02 XE80',
      link: 'https://www.google.com/maps/search/?api=1&query=77+Camden+Street+Lower,+Dublin,+D02+XE80,+Ireland',
      details: 'Ireland',
      external: true
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // No backend yet: open the visitor's email app with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `${subjects[formData.subject] || 'Website Enquiry'} – ${formData.name}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      '',
      formData.message
    ].filter((line) => line !== false).join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setFormData(emptyForm)
  }

  return (
    <>
      <section className="page-hero">
        <img src={heroImg} alt="" className="page-hero-bg" fetchpriority="high" />
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow">Contact us</span>
            <h1>We’re here to help</h1>
            <p>Whether you need care for a loved one, staff for your organisation, or want to join our team, get in touch and a member of our friendly team will respond quickly.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container contact-layout">
          <div className="contact-info">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2>Talk to a real person</h2>
              <p style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>Choose whichever way suits you best. WhatsApp is usually the fastest.</p>
            </div>
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                className="contact-item"
                {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <i className={method.icon}></i>
                <div>
                  <strong>{method.title}</strong>
                  <span className="value">{method.content}</span>
                  <small>{method.details}</small>
                </div>
              </a>
            ))}
          </div>

          <div className="form-card">
            <h2>Send us a message</h2>
            <p>Fill in the form and we’ll get back to you within 24 hours.</p>

            {sent && (
              <div className="form-success" role="status">
                <i className="fas fa-circle-check"></i>
                <span>Your email app should now be open with your message ready. Just press send. If nothing opened, email us directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" autoComplete="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="optional">(optional)</span></label>
                  <input type="tel" id="phone" name="phone" placeholder="+353 8X XXX XXXX" autoComplete="tel" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">I’m enquiring about</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select an option…</option>
                    {Object.entries(subjects).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us a little about the support you’re looking for…" rows="6" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
                <i className="fas fa-paper-plane"></i>
                Send message
              </button>
              <p className="form-note">For urgent staffing requests, please WhatsApp us for the fastest response.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Find us</span>
            <h2>Our Dublin office</h2>
            <p>77 Camden Street Lower, Dublin D02 XE80, Ireland</p>
          </div>
          <iframe
            className="map-embed"
            title="Map showing DiidoCare office at 77 Camden Street Lower, Dublin"
            src="https://www.google.com/maps?q=77+Camden+Street+Lower,+Dublin+D02+XE80,+Ireland&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
