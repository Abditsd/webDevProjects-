import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import CtaBanner from '../Components/CtaBanner';
import { YOUTUBE_URL } from '../siteConfig';
import usePageTitle from '../usePageTitle';

const starterPhrases = [
  { oromo: 'Akkam?', english: 'Hello / How are you?' },
  { oromo: 'Galatoomi', english: 'Thank you' },
  { oromo: 'Maqaan kee eenyu?', english: 'What is your name?' },
  { oromo: 'Nagaatti', english: 'Goodbye' },
];

const highlights = ['100% free lessons', 'Beginner to advanced', 'Taught by a native speaker'];

const tickerWords = [
  { oromo: 'Akkam', english: 'Hello' },
  { oromo: 'Galatoomi', english: 'Thank you' },
  { oromo: 'Eeyyee', english: 'Yes' },
  { oromo: 'Lakki', english: 'No' },
  { oromo: 'Nagaa', english: 'Peace' },
  { oromo: 'Bishaan', english: 'Water' },
  { oromo: 'Mana', english: 'House' },
  { oromo: 'Hiriyaa', english: 'Friend' },
  { oromo: 'Barumsa', english: 'Lesson' },
  { oromo: 'Aadaa', english: 'Culture' },
];

const steps = [
  {
    icon: 'fas fa-play',
    title: 'Watch a lesson',
    text: 'Pick a short, focused video on YouTube, from the alphabet to everyday conversation.',
  },
  {
    icon: 'fas fa-redo',
    title: 'Practise the phrases',
    text: 'Pause, repeat out loud and rewatch. Key words come back so they stick.',
  },
  {
    icon: 'fas fa-comments',
    title: 'Start speaking',
    text: 'Use what you learn with family, friends and the wider Oromo community.',
  },
];

const faqs = [
  {
    q: 'Are the lessons really free?',
    a: 'Yes. All of the video lessons are on YouTube and free to watch. Subscribe to the channel so you never miss a new one.',
  },
  {
    q: 'Do I need any previous experience?',
    a: 'Not at all. The beginner lessons start from the alphabet and simple everyday phrases, then build up step by step.',
  },
  {
    q: 'What is Qubee?',
    a: 'Qubee is the Latin-based alphabet used to write Afaan Oromo. Learning it first makes reading and pronunciation much easier.',
  },
  {
    q: 'Can I book live classes or one-on-one tutoring?',
    a: 'Get in touch through the contact page to ask about live sessions or personalised tutoring.',
  },
];

const Home = () => {
  usePageTitle();

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="pulse-dot" aria-hidden="true"></span>
              Barnoota Afaan Oromoo
            </span>
            <h1>
              Learn <span className="text-gradient">Afaan Oromo</span> the simple way
            </h1>
            <p>
              Free, easy-to-follow lessons with Abdullah Siraj on one of Africa's most widely
              spoken languages, with the culture behind every word.
            </p>
            <div className="hero-buttons">
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fab fa-youtube" aria-hidden="true"></i> Watch Free Lessons
              </a>
              <Link to="/service" className="btn-secondary">
                What You'll Learn <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
            <ul className="hero-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <i className="fas fa-check" aria-hidden="true"></i> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="window-dots" aria-hidden="true"><span></span><span></span><span></span></span>
                <span>Your first phrases</span>
              </div>
              <ul>
                {starterPhrases.map((phrase) => (
                  <li key={phrase.oromo}>
                    <span className="phrase-oromo" lang="om">{phrase.oromo}</span>
                    <span className="phrase-english">{phrase.english}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-badge" aria-hidden="true">
              <span className="icon-chip"><i className="fas fa-graduation-cap"></i></span>
              <div>
                <strong>Beginner friendly</strong>
                <span>Start from zero</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling word strip */}
      <div className="word-ticker" aria-label="Common Afaan Oromo words">
        <div className="word-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1}>
              {tickerWords.map((word) => (
                <li key={word.oromo}>
                  <span lang="om">{word.oromo}</span> {word.english}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bento feature grid */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why learn with me</span>
            <h2>More than just vocabulary</h2>
            <p>
              Learning Afaan Oromo is about immersing yourself in the culture, context and everyday
              communication of millions of native speakers.
            </p>
          </div>

          <div className="bento">
            <div className="card bento-feature">
              <div className="bento-body">
                <span className="icon-chip"><i className="fab fa-youtube" aria-hidden="true"></i></span>
                <h3>Free video lessons, anytime</h3>
                <p>
                  Clear, easy-to-follow YouTube lessons that break down pronunciation, grammar and
                  vocabulary, so you can learn at your own pace wherever you are.
                </p>
              </div>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
                Browse the channel <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
              <div className="bento-play" aria-hidden="true"><i className="fas fa-play"></i></div>
            </div>

            <div className="card">
              <span className="icon-chip"><i className="fas fa-user-check" aria-hidden="true"></i></span>
              <h3>Taught by a native speaker</h3>
              <p>Learn natural pronunciation and real expressions from Abdullah, a passionate native speaker.</p>
            </div>

            <div className="card">
              <span className="icon-chip"><i className="fas fa-globe-africa" aria-hidden="true"></i></span>
              <h3>Culture in every lesson</h3>
              <p>Understand the traditions, values and way of life that shape Afaan Oromo.</p>
            </div>

            <div className="card">
              <span className="icon-chip"><i className="fas fa-layer-group" aria-hidden="true"></i></span>
              <h3>For every level</h3>
              <div className="level-pills">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </div>

            <div className="card">
              <span className="icon-chip"><i className="fas fa-laptop" aria-hidden="true"></i></span>
              <h3>Interactive platform</h3>
              <p>Quizzes, dialogues and activities are on the way to take your learning further.</p>
              <span className="soon-tag">Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">How it works</span>
            <h2>Three steps to your first conversation</h2>
          </div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li className="card step" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <span className="icon-chip"><i className={step.icon} aria-hidden="true"></i></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Meet the teacher */}
      <section className="section">
        <div className="container">
          <div className="teacher reveal">
            <div className="teacher-profile">
              <div className="teacher-avatar" aria-hidden="true">AS</div>
              <h3>Abdullah Siraj</h3>
              <p>Native speaker &amp; teacher</p>
              <span className="teacher-location">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Sheffield, UK
              </span>
            </div>
            <div className="teacher-content">
              <span className="eyebrow">Meet your teacher</span>
              <blockquote>
                "I believe language learning should be accessible to everyone, regardless of
                background or previous experience."
              </blockquote>
              <p>
                My mission is to create a place where anyone can learn Afaan Oromo in an engaging and
                effective way, and help preserve the language for future generations.
              </p>
              <Link to="/about" className="btn-secondary">
                Read my story <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container faq-layout">
          <div className="section-title faq-title">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered</h2>
            <p>Can't find what you're looking for? <Link to="/contact">Get in touch</Link>.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details className="faq-item reveal" key={item.q} open={index === 0}>
                <summary>
                  {item.q}
                  <i className="fas fa-plus" aria-hidden="true"></i>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to start your journey?"
        text="Subscribe on YouTube and take your first step in Afaan Oromo today."
      >
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <i className="fab fa-youtube" aria-hidden="true"></i> Subscribe on YouTube
        </a>
        <Link to="/contact" className="btn-secondary">Get in Touch</Link>
      </CtaBanner>
    </div>
  );
};

export default Home;
