import { Link } from 'react-router-dom';

const STEPS = [
  { num: 1, title: 'Initial Contact',      desc: 'Contact our referrals team by phone or email to discuss a potential placement. We respond promptly to all enquiries.' },
  { num: 2, title: 'Information Sharing',  desc: 'We gather the relevant background, assessment information, and support needs to understand the young person\'s profile fully.' },
  { num: 3, title: 'Review & Matching',    desc: 'Our team reviews all information to assess whether we can meet the young person\'s needs and identify the best placement match.' },
  { num: 4, title: 'Decision & Planning',  desc: 'We communicate our decision promptly and, where accepted, begin collaborative care planning with the placing authority.' },
  { num: 5, title: 'Admission & Support',  desc: 'A planned, supported admission is arranged. We ensure the young person is welcomed and their support begins immediately.' },
];

export default function Safeguarding() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="badge">Safety &amp; Referrals</div>
        <h1>Safeguarding <span>&amp;</span> Referrals</h1>
        <p>
          Our unwavering commitment to protecting, empowering, and supporting
          every young person in our care.
        </p>
      </section>

      {/* COMMITMENT */}
      <section className="section section-navy">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Our Commitment</p>
          <h2>Safeguarding at Kingswell Care</h2>
          <div className="commitment-grid">
            <div className="commitment-card">
              <h3>Zero-Tolerance Approach</h3>
              <ul>
                <li>Absolute zero tolerance to any form of abuse or neglect</li>
                <li>Safe, nurturing environment at all times</li>
                <li>All staff trained in safeguarding responsibilities</li>
                <li>Clear reporting and escalation procedures</li>
              </ul>
            </div>
            <div className="commitment-card">
              <h3>Creating Safe Environments</h3>
              <ul>
                <li>Clear safeguarding and child protection procedures</li>
                <li>Safe recruitment and enhanced DBS checks</li>
                <li>Regular supervision and management oversight</li>
                <li>Partnership working with statutory agencies</li>
              </ul>
            </div>
            <div className="commitment-card">
              <h3>Empowering Young People</h3>
              <ul>
                <li>Open and honest communication at all times</li>
                <li>Raising awareness of safety and wellbeing</li>
                <li>Young people know their rights and how to get help</li>
                <li>Continuous improvement through feedback and review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REFERRAL STEPS */}
      <section className="section section-referral">
        <div className="container">
          <p className="section-label section-label--navy">How It Works</p>
          <h2>Our Referral Process</h2>
          <p className="lead" style={{ marginBottom: '8px' }}>
            Simple, transparent, and focused on getting the right support in place quickly.
          </p>
          <div className="steps">
            {STEPS.map(({ num, title, desc }) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN REFER + ELIGIBILITY */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label section-label--navy">Who Can Refer</p>
              <h2>Referral Sources</h2>
              <p>We accept referrals from:</p>
              <div className="values-grid" style={{ gridTemplateColumns: '1fr', marginTop: '20px' }}>
                <div className="value-pill"><span>🏛️</span> Local Authorities</div>
                <div className="value-pill"><span>👤</span> Social Workers</div>
                <div className="value-pill"><span>📍</span> Placement Teams</div>
                <div className="value-pill"><span>🏥</span> Health Professionals</div>
              </div>
            </div>
            <div>
              <p className="section-label">Who We Support</p>
              <h2>Eligibility</h2>
              <p>We support young people aged <strong>16–18</strong> with:</p>
              <div className="values-grid" style={{ gridTemplateColumns: '1fr', marginTop: '20px' }}>
                <div className="value-pill"><span>💛</span> Emotional &amp; Behavioural Difficulties</div>
                <div className="value-pill"><span>🔷</span> Complex &amp; Multiple Needs</div>
                <div className="value-pill"><span>🌱</span> Social &amp; Developmental Challenges</div>
              </div>
            </div>
          </div>

          <hr className="divider-line" />

          <div className="text-center">
            <h2>Make a Referral Today</h2>
            <p className="lead" style={{ margin: '0 auto 32px' }}>
              Contact our team directly to start the referral process.
            </p>
            <div className="btn-group centered">
              <a className="btn btn-gold"  href="mailto:info@kingswellcareltd.co.uk">📧 info@kingswellcareltd.co.uk</a>
              <a className="btn btn-navy"  href="tel:07891914947">📞 07891 914 947</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
