import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages.css'
import heroImg from '../assets/images/photos/carer-walker.jpg'
import homeCareImg from '../assets/images/photos/home-care.jpg'
import careHomeImg from '../assets/images/photos/care-home-activities.jpg'
import supportedLivingImg from '../assets/images/photos/supported-living.jpg'
import recruitmentImg from '../assets/images/photos/recruitment-carer.jpg'
import handsImg from '../assets/images/photos/holding-hands.jpg'

const services = [
  {
    id: 'home-care',
    icon: 'fas fa-house-chimney-medical',
    navLabel: 'Home Care',
    title: 'Home Care Support',
    image: homeCareImg,
    alt: 'A carer and an older man looking through a photo album together at home',
    intro: 'Our home care service helps people remain independent in the comfort of their own homes. We create personalised care plans that respect each person’s routine, preferences and unique needs.',
    highlights: ['Personal care', 'Medication assistance', 'Meals & nutrition', 'Companionship', 'Respite care', 'Live-in care'],
    listLabel: 'Our home care services include:',
    items: [
      'Personal care (washing, bathing, dressing)',
      'Medication assistance',
      'Meal preparation & feeding support',
      'Mobility support',
      'Domestic tasks (cleaning, laundry, ironing)',
      'Shopping assistance',
      'Companionship & emotional support',
      'Respite care for families and caregivers',
      'Overnight or live-in care',
      'Post-hospital discharge support',
      'Healthcare support & monitoring',
      'Transportation assistance'
    ],
    closing: 'Every visit is built around dignity, safety and comfort.',
    cta: { label: 'Arrange home care', to: '/contact' }
  },
  {
    id: 'care-home-staffing',
    icon: 'fas fa-hospital-user',
    navLabel: 'Care Home Staffing',
    title: 'Care Home Staffing',
    image: careHomeImg,
    alt: 'A care worker leading a knitting activity with residents in a care home',
    intro: 'Care providers rely on skilled, dependable staff to deliver excellent care. DiidoCare supplies trained professionals to help you maintain safe staffing levels across all kinds of care environments.',
    highlights: ['HCAs', 'Support Workers', 'Night shifts', 'Emergency cover'],
    listLabel: 'We provide:',
    items: [
      'Healthcare Assistants (HCAs)',
      'Support Workers',
      'Social Care Workers',
      'Senior Carers',
      'Relief / bank staff',
      'Night shift staff',
      'Short-term & long-term placements',
      'Emergency / last-minute cover',
      'Specialised dementia care staff',
      'Supervision & continuity of care',
      'Flexible shift patterns',
      'Fully trained & vetted professionals'
    ],
    closing: 'All staff undergo thorough background checks, skills assessments and ongoing training to meet industry standards.',
    cta: { label: 'Request staff', to: '/contact' }
  },
  {
    id: 'supported-living',
    icon: 'fas fa-people-group',
    navLabel: 'Supported Living',
    title: 'Supported Living & Community Support',
    image: supportedLivingImg,
    alt: 'A young man using a wheelchair relaxing in his own kitchen',
    intro: 'Our supported-living services promote independence, community engagement and emotional wellbeing for people with additional needs or disabilities.',
    groupsLabel: 'We support people with:',
    groups: ['Autism', 'Learning disabilities', 'Mental health conditions', 'Physical disabilities', 'Long-term health conditions', 'Social & emotional needs'],
    listLabel: 'Our support includes:',
    items: [
      'Help with daily living and routines',
      'Meal planning and healthy living',
      'Medication prompts',
      'Attending appointments',
      'Social activities & community involvement',
      'Skills-building and confidence development',
      'Emotional support and companionship',
      'Budgeting & financial management support',
      'Life skills development',
      'Advocacy & person-centred planning',
      'Community integration programmes'
    ],
    closing: 'We empower people to live fulfilling, meaningful lives within their communities.',
    cta: { label: 'Talk to us', to: '/contact' }
  },
  {
    id: 'careers',
    icon: 'fas fa-briefcase',
    navLabel: 'Careers',
    title: 'Recruitment & Careers',
    image: recruitmentImg,
    alt: 'A smiling care worker in scrubs',
    tall: true,
    intro: 'Are you a support worker or healthcare assistant looking for flexible, rewarding work? DiidoCare offers excellent opportunities to grow, learn and make a real difference.',
    highlights: ['Flexible shifts', 'Competitive pay', 'Training', 'Career progression'],
    listLabel: 'What we offer:',
    items: [
      'Flexible shifts that fit your lifestyle',
      'Competitive pay rates',
      'Ongoing training and career development',
      'A supportive management team',
      'Placements in a variety of care settings',
      'Opportunities for long-term or permanent roles',
      'A smooth, friendly registration process',
      'Mentorship & professional support',
      'Career progression pathways',
      'Bonus & incentive schemes',
      'Comprehensive induction & onboarding'
    ],
    closing: 'We connect skilled care professionals with roles where they can excel and feel valued.',
    cta: { label: 'Apply to join our team', to: '/contact' }
  }
]

function Service() {
  const [expanded, setExpanded] = useState({})

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <>
      <section className="page-hero">
        <img src={heroImg} alt="" className="page-hero-bg" fetchpriority="high" />
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow">Our services</span>
            <h1>Care and support, shaped around you</h1>
            <p>From a few hours of help at home to fully staffed shifts for care providers, we deliver dependable support that helps people live safely, comfortably and independently.</p>
          </div>
        </div>
      </section>

      <nav className="service-nav" aria-label="Jump to a service">
        <div className="container">
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>
                  <i className={service.icon}></i>
                  {service.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {services.map((service, index) => {
        const isOpen = !!expanded[service.id]
        return (
          <section
            key={service.id}
            id={service.id}
            className={`section service-detail ${index % 2 === 1 ? 'section-alt' : ''}`}
          >
            <div className={`container split ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className={`split-media ${service.tall ? 'tall' : ''}`}>
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>
              <div className="split-body">
                <span className="service-number">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p className="lead">{service.intro}</p>

                {service.highlights && (
                  <ul className="chip-list">
                    {service.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                )}

                {service.groups && (
                  <>
                    <p className="list-label">{service.groupsLabel}</p>
                    <ul className="chip-list">
                      {service.groups.map((g) => <li key={g}>{g}</li>)}
                    </ul>
                  </>
                )}

                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => toggle(service.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${service.id}-details`}
                >
                  {isOpen ? 'Hide full list' : 'See everything we offer'}
                  <i className="fas fa-chevron-down"></i>
                </button>

                {isOpen && (
                  <div id={`${service.id}-details`}>
                    <p className="list-label">{service.listLabel}</p>
                    <ul className="check-list two-col">
                      {service.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p>{service.closing}</p>
                  </div>
                )}

                <div>
                  <Link to={service.cta.to} className="btn btn-primary">
                    {service.cta.label} <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="cta-band">
        <img src={handsImg} alt="" className="cta-band-bg" loading="lazy" />
        <div className="container">
          <h2>Not sure which service is right?</h2>
          <p>Tell us about your situation and we’ll recommend the support that fits best.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold">
              Get advice <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="https://wa.me/353899895546" className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
