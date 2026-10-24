import { Link } from 'react-router-dom'
import '../styles/pages.css'
import heroImg from '../assets/images/photos/about-team.jpg'
import storyImg from '../assets/images/photos/carer-laughing.jpg'
import teamImg from '../assets/images/photos/carer-walker.jpg'
import handsImg from '../assets/images/photos/holding-hands.jpg'

function About() {
  const missionVision = [
    {
      label: 'What we do',
      title: 'Our Mission',
      description: 'To deliver high-quality, person-centred care through a compassionate, skilled and committed workforce dedicated to improving lives and promoting independence.'
    },
    {
      label: 'Where we’re going',
      title: 'Our Vision',
      description: 'To be recognised as a leading care and staffing provider, known for excellence, compassion and setting the standard for outstanding support services.'
    },
    {
      label: 'Why we do it',
      title: 'Our Belief',
      description: 'Happy, well-trained staff create better outcomes. We partner with families and organisations to deliver support that truly makes a difference.'
    }
  ]

  const coreValues = [
    { icon: 'fas fa-heart', title: 'Compassion', description: 'We care from the heart, taking time to understand each person’s needs, challenges and story.' },
    { icon: 'fas fa-handshake', title: 'Integrity', description: 'We are honest, transparent and accountable in everything we do.' },
    { icon: 'fas fa-award', title: 'Excellence', description: 'We hold ourselves to high standards in training, service delivery, communication and compliance.' },
    { icon: 'fas fa-clock', title: 'Reliability', description: 'Consistent, dependable support, especially when it’s needed most.' },
    { icon: 'fas fa-shield-heart', title: 'Safety & Dignity', description: 'Every person is treated with dignity and respect, whatever their background or ability.' },
    { icon: 'fas fa-seedling', title: 'Growth', description: 'We invest in our people’s development and in sustainable, long-term care.' }
  ]

  const teamQualities = [
    'Background and reference checked before every placement',
    'Trained in all relevant care competencies and standards',
    'Skilled in individualised, person-centred care',
    'Supported with ongoing development and supervision',
    'Committed to wellbeing and quality of life',
    'Confident, competent and caring from day one'
  ]

  const whereWeWork = [
    { icon: 'fas fa-house-user', title: 'Private homes', description: 'Visiting, overnight and live-in care for individuals and families.' },
    { icon: 'fas fa-hospital', title: 'Care homes & hospitals', description: 'Healthcare Assistants and carers to support residents and patients.' },
    { icon: 'fas fa-building-user', title: 'Supported living', description: 'Support for adults living independently in the community.' },
    { icon: 'fas fa-people-roof', title: 'Day & community services', description: 'Staff for day services and community support programmes.' }
  ]

  return (
    <>
      <section className="page-hero">
        <img src={heroImg} alt="" className="page-hero-bg" fetchpriority="high" />
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow">About DiidoCare</span>
            <h1>We provide care because we care about people</h1>
            <p>A Dublin-based care and support agency delivering compassionate care and dependable staffing to individuals, families and organisations.</p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img src={storyImg} alt="A care worker sharing a laugh with an older woman" loading="lazy" />
          </div>
          <div className="split-body">
            <span className="eyebrow">Who we are</span>
            <h2>Professional care with a personal touch</h2>
            <p className="lead">DiidoCare is a specialist care agency providing personalised care services and high-quality staffing across Ireland and the UK.</p>
            <p>Our team of Healthcare Assistants, Support Workers, Senior Carers and specialist care professionals supports people at home, in care homes, in hospitals and in supported-living settings.</p>
            <p>Every person we support is an individual with their own history, preferences and goals. Our job is to help them live the life they choose, safely and with dignity.</p>
            <div className="quote-block">
              “Providing professional, compassionate care and dependable staffing solutions.”
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our direction</span>
            <h2>Mission, vision and belief</h2>
            <p>The principles that guide every visit, every shift and every decision we make.</p>
          </div>
          <div className="card-grid">
            {missionVision.map((item) => (
              <div key={item.title} className="mvv-card">
                <span className="eyebrow">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our values</span>
            <h2>What we stand for</h2>
            <p>Six values shape how we treat everyone we work with: the people we support, their families and our staff.</p>
          </div>
          <div className="card-grid">
            {coreValues.map((value) => (
              <div key={value.title} className="value-tile">
                <i className={value.icon}></i>
                <div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STANDARDS */}
      <section className="section section-tint">
        <div className="container split reverse">
          <div className="split-media">
            <img src={teamImg} alt="A carer helping an older woman walk with her walking frame" loading="lazy" />
            <div className="media-badge">
              <i className="fas fa-user-check"></i>
              <div>
                <strong>Carefully selected</strong>
                <span>Vetted, trained and supported</span>
              </div>
            </div>
          </div>
          <div className="split-body">
            <span className="eyebrow">Our team</span>
            <h2>The standards every carer meets</h2>
            <p>The quality of care comes down to the people who deliver it. That’s why every member of the DiidoCare team is carefully recruited, trained and supported.</p>
            <ul className="check-list">
              {teamQualities.map((quality) => (
                <li key={quality}>{quality}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where we work</span>
            <h2>Support wherever it’s needed</h2>
          </div>
          <div className="card-grid four">
            {whereWeWork.map((place) => (
              <div key={place.title} className="card">
                <div className="card-icon"><i className={place.icon}></i></div>
                <h3>{place.title}</h3>
                <p>{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <img src={handsImg} alt="" className="cta-band-bg" loading="lazy" />
        <div className="container">
          <h2>Ready to find the right support?</h2>
          <p>Talk to us about care at home, supported living or staffing for your organisation.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold">
              Contact our team <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/service" className="btn btn-ghost-light">
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
