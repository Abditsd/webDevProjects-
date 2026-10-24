import { Link } from 'react-router-dom'
import '../styles/pages.css'
import heroImg from '../assets/images/photos/hero-nurse-resident.jpg'
import homeCareImg from '../assets/images/photos/home-care.jpg'
import careHomeImg from '../assets/images/photos/care-home-activities.jpg'
import supportedLivingImg from '../assets/images/photos/supported-living.jpg'
import introImg from '../assets/images/photos/activity-coloring.jpg'
import handsImg from '../assets/images/photos/holding-hands.jpg'

function Home() {
  const trustPoints = [
    { icon: 'fas fa-user-shield', title: 'Fully vetted staff', text: 'Background & reference checked' },
    { icon: 'fas fa-graduation-cap', title: 'Trained & certified', text: 'Ongoing professional development' },
    { icon: 'fas fa-clock', title: '24/7 availability', text: 'Including urgent, same-day cover' },
    { icon: 'fas fa-location-dot', title: 'Ireland & UK', text: 'Based in Dublin' }
  ]

  const services = [
    {
      id: 'home-care',
      icon: 'fas fa-house-chimney-medical',
      image: homeCareImg,
      alt: 'A carer and an older man looking through a photo album together at home',
      title: 'Home Care Support',
      description: 'Help with personal care, meals, medication and household tasks, plus genuine companionship, so your loved one can stay safe and comfortable in their own home.'
    },
    {
      id: 'care-home-staffing',
      icon: 'fas fa-hospital-user',
      image: careHomeImg,
      alt: 'A care worker leading a knitting activity with residents in a care home',
      title: 'Care Home Staffing',
      description: 'Trained Healthcare Assistants, Support Workers and Senior Carers to keep your facility safely staffed, from a single night shift to long-term placements.'
    },
    {
      id: 'supported-living',
      icon: 'fas fa-people-group',
      image: supportedLivingImg,
      alt: 'A young man using a wheelchair relaxing in his own kitchen',
      title: 'Supported Living',
      description: 'Personalised support for adults with disabilities, autism or mental health needs, building independence, confidence and connection with the community.'
    }
  ]

  const reasons = [
    {
      icon: 'fas fa-clipboard-list',
      title: 'Care plans built around the person',
      description: 'We take time to learn each person’s routine, preferences and history, then shape support around their choices, not the other way round.'
    },
    {
      icon: 'fas fa-user-nurse',
      title: 'Staff who are ready from day one',
      description: 'Every team member meets the standards required to work in care in Ireland and has completed comprehensive training in compassionate, person-centred support.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Fast, reliable response',
      description: 'Our pool of pre-registered workers means we can cover urgent and last-minute shifts, and keep the same familiar faces for ongoing care.'
    }
  ]

  const audiences = [
    {
      icon: 'fas fa-house-user',
      title: 'Individuals & families',
      description: 'Personalised home care and support with daily living, so your loved one can stay safe, comfortable and independent.',
      cta: 'Arrange care',
      to: '/service#home-care'
    },
    {
      icon: 'fas fa-hospital',
      title: 'Care providers',
      description: 'Trained, vetted staff for care homes, hospitals and services, from emergency cover to long-term placements.',
      cta: 'Request staff',
      to: '/service#care-home-staffing'
    },
    {
      icon: 'fas fa-id-badge',
      title: 'Care professionals',
      description: 'Flexible shifts, competitive pay and real career development for carers, HCAs and support workers.',
      cta: 'Join our team',
      to: '/service#careers'
    }
  ]

  const steps = [
    { title: 'Get in touch', text: 'Call, WhatsApp or send a message. Tell us a little about who needs support.' },
    { title: 'Consultation', text: 'We listen, ask the right questions and understand the needs, routines and goals.' },
    { title: 'Your care plan', text: 'We agree a personalised plan and match carers with the right skills and personality.' },
    { title: 'Ongoing support', text: 'Care begins, and we review regularly so support keeps up with changing needs.' }
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Home care · Supported living · Care staffing</span>
            <h1>Care that feels like <em>family</em>, delivered by professionals.</h1>
            <p>DiidoCare provides compassionate, person-centred care at home and trained, dependable staff for care organisations across Ireland and the UK.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">
                Request care
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/service" className="btn btn-outline">
                Explore our services
              </Link>
            </div>
            <ul className="hero-points">
              <li><i className="fas fa-check"></i>Vetted, trained carers</li>
              <li><i className="fas fa-check"></i>Available 24/7</li>
              <li><i className="fas fa-check"></i>Tailored care plans</li>
            </ul>
          </div>
          <div className="hero-media">
            <img src={heroImg} alt="A DiidoCare nurse sharing a smile with an older woman" fetchpriority="high" />
            <div className="hero-pill">
              <span className="pulse-dot"></span>
              Available 24/7
            </div>
            <div className="media-badge">
              <i className="fas fa-hand-holding-heart"></i>
              <div>
                <strong>Person-centred care</strong>
                <span>Shaped around routines and choices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" aria-label="Why families trust DiidoCare">
        <div className="container trust-grid">
          {trustPoints.map((point) => (
            <div key={point.title} className="trust-item">
              <i className={point.icon}></i>
              <div>
                <strong>{point.title}</strong>
                <span>{point.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img src={introImg} alt="A DiidoCare carer supporting two older adults during an art activity" loading="lazy" />
            <div className="media-badge">
              <i className="fas fa-heart"></i>
              <div>
                <strong>Dignity first</strong>
                <span>Respect and choice in every visit</span>
              </div>
            </div>
          </div>
          <div className="split-body">
            <span className="eyebrow">Welcome to DiidoCare</span>
            <h2>Helping people live safely, confidently and independently</h2>
            <p className="lead">Whether you are arranging care for a parent, looking for support for yourself, or need reliable staff for your care home, we are here to help.</p>
            <p>Our team brings together skilled carers who genuinely care. We focus on the small things that make a big difference: a familiar face, a cup of tea made just right, time to talk.</p>
            <ul className="check-list">
              <li>Personal care, meals, medication support and companionship</li>
              <li>Short visits, overnight, live-in and respite care</li>
              <li>Emergency and long-term staffing for care providers</li>
            </ul>
            <Link to="/about" className="btn btn-outline">
              More about us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Our care services</h2>
            <p>Flexible, high-quality support for individuals, families and care organisations, tailored to each person’s needs.</p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card-img">
                  <div className="service-card-img-inner">
                    <img src={service.image} alt={service.alt} loading="lazy" />
                  </div>
                  <span className="service-card-icon"><i className={service.icon}></i></span>
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={`/service#${service.id}`} className="text-link">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who we help</span>
            <h2>Support for everyone in the circle of care</h2>
            <p>Whoever you are, there’s a way DiidoCare can help.</p>
          </div>
          <div className="card-grid">
            {audiences.map((a) => (
              <Link key={a.title} to={a.to} className="audience-card">
                <div className="audience-icon"><i className={a.icon}></i></div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className="text-link">{a.cta} <i className="fas fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why DiidoCare</span>
            <h2>Care you can rely on</h2>
            <p>Happy, well-trained staff deliver better care. That’s why we invest in our people as much as in the families we support.</p>
          </div>
          <div className="card-grid">
            {reasons.map((item) => (
              <div key={item.title} className="card">
                <div className="card-icon"><i className={item.icon}></i></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Getting started is simple</h2>
            <p>From your first call to the first visit, we guide you through every step.</p>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div key={step.title} className="step">
                <div className="step-num">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <img src={handsImg} alt="" className="cta-band-bg" loading="lazy" />
        <div className="container">
          <h2>Let’s talk about the support you need</h2>
          <p>Speak to our friendly team today for honest advice about the right care for you or your loved one.</p>
          <div className="hero-actions">
            <a href="https://wa.me/353899895546" className="btn btn-gold" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              WhatsApp us
            </a>
            <Link to="/contact" className="btn btn-ghost-light">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
