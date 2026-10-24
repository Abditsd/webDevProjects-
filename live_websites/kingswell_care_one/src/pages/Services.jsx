import img1 from '../components/images/img1.jpg';
import img2 from '../components/images/img2.jpg';
import img3 from '../components/images/img3.jpg';
import img4 from '../components/images/img4.jpg';
import img5 from '../components/images/img5.jpg';
import img6 from '../components/images/img6.jpg';

const KINGS = [
  { letter: 'K', word: 'Knowledge',    desc: 'Build essential life knowledge and skills for the future' },
  { letter: 'I', word: 'Independence', desc: 'Develop practical life skills and self-sufficiency' },
  { letter: 'N', word: 'Nurture',      desc: 'Safe and supportive environment to feel secure' },
  { letter: 'G', word: 'Growth',       desc: 'Emotional development and building resilience' },
  { letter: 'S', word: 'Success',      desc: 'Prepare every young person for successful adulthood' },
];

const SERVICES = [
  { icon: '🕐', title: '24/7 Support',         desc: 'Round-the-clock staffed accommodation ensuring young people are never without guidance and support, day or night.', img: img1 },
  { icon: '️', title: 'Key Working',          desc: 'Every young person has a dedicated key worker who builds a trusted relationship and coordinates their individual support plan.', img: img2 },
  { icon: '📚', title: 'Life Skills Development', desc: 'Practical skills training covering cooking, budgeting, transport, health, and all areas essential for independent living.', img: img3 },
  { icon: '💬', title: 'Emotional Support',    desc: 'Trauma-informed emotional support and therapeutic approaches to help young people process experiences and build resilience.', img: img4 },
  { icon: '🏡', title: 'Safe Accommodation',   desc: 'High-quality, comfortable homes that feel like real home environments — clean, welcoming, and maintained to an excellent standard.', img: img5 },
  { icon: '🎓', title: 'Education & Engagement', desc: 'We actively support engagement with education, training, and employment opportunities to build positive futures.', img: img6 },
];

const OVER_18_SUPPORT = [
  'Preparing for adulthood and independent living',
  'Developing daily living and household skills',
  'Meal planning and food preparation',
  'Shopping and making informed choices',
  'Managing money and budgeting',
  'Keeping the home clean, safe and organised',
  'Attending appointments and accessing local services',
  'Developing communication and social skills',
  'Accessing education, training and volunteering',
  'Developing employability skills and preparing for work',
  'Setting personal goals and achieving positive outcomes',
  'Taking part in community activities and building positive relationships',
];

export default function Services() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="badge">What We Provide</div>
        <h1>Our <span>Services</span></h1>
        <p>
          Kingswell Care Ltd provides high-quality supported accommodation for young people aged 16–18 
          and young adults aged 18 and over, including care leavers transitioning into adulthood and 
          greater independence. We provide a safe and supportive environment that promotes independence, 
          resilience, confidence and positive outcomes.
        </p>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="section section-white">
        <div className="container">
          <p className="section-label">Who We Support</p>
          <h2>Young People With Complex Needs</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">💛</div>
              <h3>Emotional &amp; Behavioural Difficulties</h3>
              <p>
                Support for young people experiencing EBD, providing a structured,
                nurturing environment to develop emotional regulation and self-esteem.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🔷</div>
              <h3>Complex Needs</h3>
              <p>
                Tailored packages of support for individuals with layered or multi-faceted
                support requirements, delivered by trained and experienced staff.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🌱</div>
              <h3>Social &amp; Developmental Challenges</h3>
              <p>
                Support for young people facing social, emotional, and developmental
                challenges as they transition to adulthood and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KINGS MODEL */}
      <section className="section section-navy">
        <div className="container">
          <p className="section-label text-center" style={{ color: 'var(--gold)' }}>Our Framework</p>
          <h2 className="text-center">The KINGS Model</h2>
          <p className="lead text-center" style={{ margin: '0 auto 8px', color: 'rgba(255,255,255,0.8)' }}>
            Everything we do is guided by our KINGS model — a holistic framework
            for development.
          </p>
          <div className="kings-grid">
            {KINGS.map(({ letter, word, desc }) => (
              <div className="king-card" key={letter}>
                <div className="king-letter" style={{ color: '#0D3B5F' }}>{letter}</div>
                <div className="king-word">{word}</div>
                <div className="king-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER-18 PROVISION */}
      <section className="section section-white">
        <div className="container">
          <p className="section-label text-center" style={{ fontSize: '16px', fontWeight: '800', color: 'var(--gold)' }}>Over-18 Provision</p>
          <h2 className="text-center" style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>Supported Accommodation for Care Leavers</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p className="lead" style={{ marginBottom: '24px' }}>
              Kingswell Care Ltd provides supported accommodation for young adults aged 18 and over, 
              including care leavers who are transitioning into adulthood and greater independence.
            </p>
            <p style={{ marginBottom: '32px' }}>
              We support young adults who may have autism, ADHD, mental health needs or other additional 
              support needs. Our person-centred approach provides a safe, comfortable and supportive 
              environment where residents can build confidence, develop independence and learn essential life skills.
            </p>

            <h3 style={{ color: 'var(--navy)', marginBottom: '20px' }}>Our Support Includes</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '12px',
              marginBottom: '40px'
            }}>
              {OVER_18_SUPPORT.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>✓</span>
                  <span style={{ fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ 
              background: 'var(--off-white)', 
              padding: '32px', 
              borderRadius: '14px', 
              borderLeft: '4px solid var(--gold)' 
            }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Our Accommodation</h3>
              <p>
                Kingswell Care Ltd has a fully furnished four-bedroom house in Newark, providing a 
                welcoming and supportive home where young adults can develop the skills and confidence 
                needed to move towards greater independence.
              </p>
              <p style={{ marginTop: '16px', fontSize: '14px', fontStyle: 'italic' }}>
                <strong>Please note:</strong> Kingswell Care Ltd does not provide personal care as part of this service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section section-white">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2>Our Core Services</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {SERVICES.map(({ icon, title, desc, img }) => (
              <div className="card" key={title}>
                <img src={img} alt={title} className="service-img" />
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section section-white text-center">
        <div className="container">
          <p className="section-label">Outcomes</p>
          <h2>What Young People Achieve</h2>
          <div className="outcomes-strip" style={{ marginTop: '32px' }}>
            <div className="outcome-item"><div className="num">🏠</div><div className="label">Independence &amp; Living Skills</div></div>
            <div className="outcome-item"><div className="num">📖</div><div className="label">Education &amp; Engagement</div></div>
            <div className="outcome-item"><div className="num">⚓</div><div className="label">Stability &amp; Safety</div></div>
            <div className="outcome-item"><div className="num">💫</div><div className="label">Confidence &amp; Resilience</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
