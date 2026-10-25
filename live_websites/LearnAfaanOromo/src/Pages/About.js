import React from 'react';
import '../assets/css/About.css';
import myStoryImage from '../assets/images/my-story-learning.svg';
import myStoryAfaanOromo from '../assets/images/my-story-afaan-oromo.svg';
import PageHeader from '../Components/PageHeader';
import CtaBanner from '../Components/CtaBanner';
import { YOUTUBE_URL } from '../siteConfig';
import usePageTitle from '../usePageTitle';

const approach = [
  {
    icon: 'fas fa-brain',
    title: 'Cognitive Science',
    text: 'Lessons are built on proven cognitive science principles that optimise how your brain acquires and retains new language skills.',
  },
  {
    icon: 'fas fa-sync-alt',
    title: 'Spaced Repetition',
    text: "Key words and phrases come back at regular intervals, helping you remember what you've learned for the long term.",
  },
  {
    icon: 'fas fa-user-graduate',
    title: 'Personalised Learning',
    text: 'Learn at your own pace: revisit any lesson as often as you like and focus on the areas where you need more practice.',
  },
];

const About = () => {
  usePageTitle('About');

  return (
    <div className="about-page">
      <PageHeader
        eyebrow="About"
        title="About Learning Oromo"
        subtitle="Dedicated to making Oromo language learning accessible, engaging and effective for everyone."
      />

      {/* My Story */}
      <section className="section">
        <div className="container split">
          <div className="split-content">
            <span className="eyebrow">My story</span>
            <h2>Hi, I'm Abdullah Siraj</h2>
            <p>My mission is to create a platform where anyone can learn the Oromo language in an engaging
              and effective way. As one of the most widely spoken languages in Ethiopia and parts of Kenya,
              Oromo has rich cultural significance and practical importance.</p>
            <p>I believe language learning should be accessible to everyone, regardless of background or
              previous experience with languages. That's why I've designed my YouTube lessons to be easy to
              follow and adaptable to different learning styles and paces.</p>
          </div>
          <div className="split-visual">
            <img src={myStoryAfaanOromo} alt="Illustration of two people greeting each other in Afaan Oromo" />
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="section section-alt">
        <div className="container split reverse">
          <div className="split-content">
            <span className="eyebrow">The journey</span>
            <h2>A path that grows with you</h2>
            <p>The journey of learning Oromo is filled with discovery and cultural enrichment. My approach
              combines traditional language learning methods with modern techniques to make the process
              engaging and effective.</p>
            <p>Whether you're a complete beginner or improving existing skills, a structured learning path
              guides you through vocabulary, grammar, pronunciation and cultural context at a pace that
              works for you.</p>
          </div>
          <div className="split-visual">
            <img src={myStoryImage} alt="Illustration of a learner standing on a stack of Oromo language books" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Purpose</span>
            <h2>Mission &amp; Vision</h2>
            <p>What drives me forward</p>
          </div>
          <div className="mission-vision-grid">
            <div className="card mv-card">
              <span className="icon-chip"><i className="fas fa-bullseye" aria-hidden="true"></i></span>
              <h3>Mission</h3>
              <p>To preserve and promote the Oromo language by providing accessible, high-quality language
                education to learners worldwide, in an engaging environment that respects the cultural
                context of the language.</p>
            </div>
            <div className="card mv-card mv-card-dark">
              <span className="icon-chip"><i className="fas fa-eye" aria-hidden="true"></i></span>
              <h3>Vision</h3>
              <p>To become the leading platform for Oromo language learning, connecting people across the
                globe and ensuring the rich heritage of the Oromo people is celebrated and preserved for
                future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Method</span>
            <h2>My Learning Approach</h2>
            <p>How I make language learning effective</p>
          </div>
          <div className="features">
            {approach.map((item) => (
              <div className="card" key={item.title}>
                <span className="icon-chip"><i className={item.icon} aria-hidden="true"></i></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join our learning community"
        text="Start learning Afaan Oromo with me on YouTube, completely free."
      >
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <i className="fab fa-youtube" aria-hidden="true"></i> Explore My YouTube Channel
        </a>
      </CtaBanner>
    </div>
  );
};

export default About;
